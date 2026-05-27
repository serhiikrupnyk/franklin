'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

const REVIEWS = [
  { id: 'QsANXKlRJnc', name: 'Відгук 1' },
  { id: 'ZpuWZnh-LVg', name: 'Відгук 2' },
  { id: '0ITpBuwPiZs', name: 'Відгук 3' },
  { id: 'JziV0faU2Ao', name: 'Відгук 4' },
  { id: 'Kwa5bRVSilk', name: 'Відгук 5' },
  { id: 't3vAvEy7f7Q', name: 'Відгук 6' },
];

export default function SectionReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>('[data-slide]')[idx];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setActive(idx);
  }, []);

  const scrollByOne = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(REVIEWS.length - 1, active + dir));
    goTo(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = track.querySelectorAll<HTMLElement>('[data-slide]');
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - track.scrollLeft - track.offsetLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActive(closest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="rv2-section">
      <div className="container">

        <div className="rv2-header">
          <span className="rv2-label">Результати учнів</span>
          <h2 className="rv2-title">
            <span className="rv2-title__accent">Відгуки</span> учнів
          </h2>
          <p className="rv2-desc">Реальні відео від тих, хто вже пройшов навчання</p>
        </div>

        <div className="rv2-slider">
          <button
            type="button"
            className="rv2-arrow rv2-arrow--left"
            aria-label="Попередній"
            onClick={() => scrollByOne(-1)}
            disabled={active === 0}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="rv2-track" ref={trackRef}>
            {REVIEWS.map((r) => (
              <button
                key={r.id}
                type="button"
                data-slide
                className="rv2-card"
                onClick={() => setOpenId(r.id)}
                aria-label={`Дивитися ${r.name}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${r.id}/hqdefault.jpg`}
                  loading="lazy"
                  alt={r.name}
                  className="rv2-card__img"
                />
                <div className="rv2-card__overlay" />
                <div className="rv2-card__play">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="rv2-card__label">ПЕРЕГЛЯНУТИ</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="rv2-arrow rv2-arrow--right"
            aria-label="Наступний"
            onClick={() => scrollByOne(1)}
            disabled={active === REVIEWS.length - 1}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="rv2-dots">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`rv2-dot${i === active ? ' rv2-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {openId && (
        <div className="rv2-modal" onClick={() => setOpenId(null)} role="dialog" aria-modal="true">
          <button type="button" className="rv2-modal__close" onClick={() => setOpenId(null)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="rv2-modal__frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${openId}?autoplay=1`}
              title="YouTube відгук"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
