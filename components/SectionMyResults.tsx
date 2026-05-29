'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

type Media = { type: 'image' | 'video'; src: string };
type Group = { num: string; title: string; desc: string; media: Media[] };

const GROUPS: Group[] = [
  {
    num: '01',
    title: 'З складу та кухні — в онлайн-сферу',
    desc: 'Перехід від звичайної роботи до свободи та власної справи',
    media: [
      { type: 'video', src: '/images/1.MP4' },
      { type: 'image', src: '/images/2.jpg' },
    ],
  },
  {
    num: '02',
    title: 'BMW 850 за $70 000 завдяки P2P',
    desc: 'Мрія, що стала реальністю',
    media: [
      { type: 'image', src: '/images/17.webp' },
      { type: 'image', src: '/images/7.jpg' },
    ],
  },
  {
    num: '03',
    title: 'Стабільний заробіток',
    desc: 'Готівка щодня — результат системної роботи',
    media: [
      { type: 'image', src: '/images/5.jpg' },
      { type: 'image', src: '/images/6.jpg' },
    ],
  },
  {
    num: '04',
    title: 'Купив → продав = профіт',
    desc: 'Реальні ордери з історії угод USDT',
    media: [
      { type: 'image', src: '/images/4.jpg' },
      { type: 'image', src: '/images/10.jpg' },
      { type: 'image', src: '/images/11.jpg' },
      { type: 'image', src: '/images/12.jpg' },
      { type: 'image', src: '/images/13.jpg' },
      { type: 'image', src: '/images/14.jpg' },
      { type: 'image', src: '/images/15.jpg' },
    ],
  },
];

const videoThumb = (src: string) => `${src}#t=0.1`;

export default function SectionMyResults() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // lightbox: which group + which media within the group
  const [box, setBox] = useState<{ g: number; m: number } | null>(null);

  const goTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>('[data-slide]')[idx];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setActive(idx);
  }, []);

  const scrollByOne = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(GROUPS.length - 1, active + dir));
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

  const boxMedia = box ? GROUPS[box.g].media[box.m] : null;

  const boxNav = useCallback((dir: 1 | -1) => {
    setBox((prev) => {
      if (!prev) return prev;
      const len = GROUPS[prev.g].media.length;
      return { g: prev.g, m: (prev.m + dir + len) % len };
    });
  }, []);

  useEffect(() => {
    if (!box) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBox(null);
      if (e.key === 'ArrowRight') boxNav(1);
      if (e.key === 'ArrowLeft') boxNav(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [box, boxNav]);

  return (
    <section id="my-results" className="rv2-section">
      <div className="container">

        <div className="rv2-header">
          <span className="rv2-label">Особисті досягнення</span>
          <h2 className="rv2-title">
            <span className="rv2-title__accent">Мої</span> результати
          </h2>
          <p className="rv2-desc">Реальний шлях, цифри та докази з моєї P2P-діяльності</p>
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

          <div className="rv2-track mr-track" ref={trackRef}>
            {GROUPS.map((group, gi) => {
              const preview = group.media.slice(0, 4);
              const extra = group.media.length - preview.length;
              return (
                <article
                  key={gi}
                  data-slide
                  className={`mr-card mr-card--media-${preview.length}`}
                >
                  <div className="mr-card__head">
                    <span className="mr-card__num">{group.num}</span>
                    <div className="mr-card__head-text">
                      <h3 className="mr-card__title">{group.title}</h3>
                      <p className="mr-card__desc">{group.desc}</p>
                    </div>
                  </div>

                  <div className="mr-card__media">
                    {preview.map((m, mi) => {
                      const isLast = mi === preview.length - 1 && extra > 0;
                      return (
                        <button
                          key={mi}
                          type="button"
                          className="mr-thumb"
                          onClick={() => setBox({ g: gi, m: mi })}
                          aria-label={`Переглянути ${group.title}`}
                        >
                          {m.type === 'image' ? (
                            <img src={m.src} loading="lazy" alt="" className="mr-thumb__media" />
                          ) : (
                            <video src={videoThumb(m.src)} className="mr-thumb__media" preload="metadata" muted playsInline />
                          )}
                          {m.type === 'video' && !isLast && (
                            <span className="mr-thumb__play">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </span>
                          )}
                          {isLast && (
                            <span className="mr-thumb__more">+{extra + 1}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="rv2-arrow rv2-arrow--right"
            aria-label="Наступний"
            onClick={() => scrollByOne(1)}
            disabled={active === GROUPS.length - 1}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="rv2-dots">
          {GROUPS.map((_, i) => (
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

      {box && boxMedia && (
        <div className="rv2-modal" onClick={() => setBox(null)} role="dialog" aria-modal="true">
          <button type="button" className="rv2-modal__close" onClick={() => setBox(null)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {GROUPS[box.g].media.length > 1 && (
            <button
              type="button"
              className="mr-modal__nav mr-modal__nav--prev"
              onClick={(e) => { e.stopPropagation(); boxNav(-1); }}
              aria-label="Попереднє"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div className="rv2-modal__frame mr-modal__frame" onClick={(e) => e.stopPropagation()}>
            {boxMedia.type === 'image' ? (
              <img src={boxMedia.src} alt="" className="mr-modal__img" />
            ) : (
              <video key={boxMedia.src} src={boxMedia.src} controls autoPlay playsInline className="mr-modal__img" />
            )}
          </div>

          {GROUPS[box.g].media.length > 1 && (
            <button
              type="button"
              className="mr-modal__nav mr-modal__nav--next"
              onClick={(e) => { e.stopPropagation(); boxNav(1); }}
              aria-label="Наступне"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {GROUPS[box.g].media.length > 1 && (
            <div className="mr-modal__counter" onClick={(e) => e.stopPropagation()}>
              {box.m + 1} / {GROUPS[box.g].media.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
