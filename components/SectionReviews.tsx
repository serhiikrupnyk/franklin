'use client';
import { useRef, useState, useEffect, useCallback } from 'react';

type Review =
  | { key: string; type: 'video'; src: string; poster: string; name: string }
  | { key: string; type: 'image'; src: string; name: string };

const REVIEWS: Review[] = [
  {
    key: 'local-video-6555',
    type: 'video',
    src: '/images/IMG_6555.mp4',
    poster: '/images/IMG_6555-poster.webp',
    name: 'Відеовідгук учня',
  },
  {
    key: 'local-video-4221',
    type: 'video',
    src: '/images/IMG_4221.mp4',
    poster: '/images/IMG_4221-poster.webp',
    name: 'Результат учениці після навчання',
  },
  {
    key: 'local-photo-0302',
    type: 'image',
    src: '/images/photo_2025-03-02_18-42-04.jpg',
    name: 'Відгук про підтримку під час навчання',
  },
  {
    key: 'local-photo-0316',
    type: 'image',
    src: '/images/photo_2025-03-16_17-50-06.jpg',
    name: 'Результат учня після навчання',
  },
  {
    key: 'local-photo-0329-36',
    type: 'image',
    src: '/images/photo_2025-03-29_20-46-36.jpg',
    name: 'Відгук учня про результати',
  },
  {
    key: 'local-photo-0329-39',
    type: 'image',
    src: '/images/photo_2025-03-29_20-46-39.jpg',
    name: 'Продовження відгуку учня',
  },
];

export default function SectionReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const openReview = openIndex === null ? null : REVIEWS[openIndex];

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
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      setActive(atEnd ? cards.length - 1 : closest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openIndex]);

  return (
    <section id="reviews" className="rv2-section">
      <div className="container">

        <div className="rv2-header">
          <span className="rv2-label">Результати учнів</span>
          <h2 className="rv2-title">
            <span className="rv2-title__accent">Відгуки</span> учнів
          </h2>
          <p className="rv2-desc">Реальні відгуки та результати тих, хто вже пройшов навчання</p>
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
            {REVIEWS.map((review, index) => {
              const preview = review.type === 'video' ? review.poster : review.src;

              return (
                <button
                  key={review.key}
                  type="button"
                  data-slide
                  className="rv2-card"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Переглянути ${review.name}`}
                >
                  <img
                    src={preview}
                    loading="lazy"
                    alt={review.name}
                    className="rv2-card__img"
                  />
                  <div className="rv2-card__overlay" />
                  <div className="rv2-card__play">
                    {review.type === 'image' ? (
                      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </div>
                  <span className="rv2-card__label">ПЕРЕГЛЯНУТИ</span>
                </button>
              );
            })}
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

      {openReview && (
        <div className="rv2-modal" onClick={() => setOpenIndex(null)} role="dialog" aria-modal="true" aria-label={openReview.name}>
          <button type="button" className="rv2-modal__close" onClick={() => setOpenIndex(null)} aria-label="Закрити">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="rv2-modal__frame" onClick={(e) => e.stopPropagation()}>
            {openReview.type === 'video' && (
              <video
                key={openReview.src}
                src={openReview.src}
                poster={openReview.poster}
                controls
                autoPlay
                playsInline
                className="rv2-modal__media"
              />
            )}
            {openReview.type === 'image' && (
              <img src={openReview.src} alt={openReview.name} className="rv2-modal__media" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
