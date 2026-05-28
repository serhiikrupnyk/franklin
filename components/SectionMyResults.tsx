'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

// TODO: замінити на реальні YouTube ID або шляхи до зображень
const RESULTS: { id: string; label: string }[] = [
  { id: 'PLACEHOLDER_1', label: 'Результат 1' },
  { id: 'PLACEHOLDER_2', label: 'Результат 2' },
  { id: 'PLACEHOLDER_3', label: 'Результат 3' },
  { id: 'PLACEHOLDER_4', label: 'Результат 4' },
];

export default function SectionMyResults() {
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
    const next = Math.max(0, Math.min(RESULTS.length - 1, active + dir));
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
    <section id="my-results" className="rv2-section">
      <div className="container">

        <div className="rv2-header">
          <span className="rv2-label">Особисті досягнення</span>
          <h2 className="rv2-title">
            <span className="rv2-title__accent">Мої</span> результати
          </h2>
          <p className="rv2-desc">Реальні цифри та скріни з моєї P2P-діяльності</p>
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
            {RESULTS.map((r) => (
              <button
                key={r.id}
                type="button"
                data-slide
                className="rv2-card rv2-card--placeholder"
                onClick={() => setOpenId(r.id)}
                aria-label={`Переглянути ${r.label}`}
              >
                <div className="rv2-card__placeholder-inner">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="rv2-card__placeholder-text">{r.label}</span>
                </div>
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
            disabled={active === RESULTS.length - 1}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="rv2-dots">
          {RESULTS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`rv2-dot${i === active ? ' rv2-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <div className="rv2-to-reviews">
          <a href="#reviews" className="rv2-to-reviews__btn">
            Відгуки учнів
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
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
              title="Результат"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
