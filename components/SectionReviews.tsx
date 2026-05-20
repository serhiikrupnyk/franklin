'use client';
import { useRef, useState } from 'react';

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

  const scrollByOne = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-slide]');
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="section-reviews reviews-fixed">
      <div className="container">
        <div className="reviews-wrapper">
          <img
            src="/images/670450fa70492be453611bfd_oskolok%20rev%20%281%29.webp"
            loading="lazy"
            width={428}
            alt=""
            className="review-decor-img"
          />
          <div className="reviews-bg">
            <div className="reviews-stroke">
              <div className="title-review-wrapper">
                <div className="unbounded_70">
                  <span className="blue">Відгуки</span> учнів
                </div>
              </div>

              <div className="reviews-slider">
                <button
                  type="button"
                  className="reviews-arrow reviews-arrow--left"
                  aria-label="Попередній"
                  onClick={() => scrollByOne(-1)}
                >
                  <img
                    src="/images/6704300efa640eb93a461c22_Arrow%203-1.svg"
                    alt=""
                    className="review-arrow"
                  />
                </button>

                <div className="reviews-track" ref={trackRef}>
                  {REVIEWS.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      data-slide
                      className="reviews-card"
                      onClick={() => setOpenId(r.id)}
                      aria-label={`Дивитися ${r.name}`}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${r.id}/hqdefault.jpg`}
                        loading="lazy"
                        alt={r.name}
                        className="review-img"
                      />
                      <div className="darkness-review" />
                      <div className="play-button-wrapper">
                        <div className="play">
                          <img
                            src="/images/6704461f1babd73573b2315c_Play.svg"
                            loading="lazy"
                            alt="Play"
                            className="play-icon"
                          />
                        </div>
                        <div className="underline-button">
                          <div className="helvetica_15 helvetica-bold">ПЕРЕГЛЯНУТИ</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="reviews-arrow reviews-arrow--right"
                  aria-label="Наступний"
                  onClick={() => scrollByOne(1)}
                >
                  <img
                    src="/images/6704300efa0b6d2336f243e7_Arrow%202-1.svg"
                    alt=""
                    className="review-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openId && (
        <div
          className="reviews-modal"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="reviews-modal__close"
            aria-label="Закрити"
            onClick={() => setOpenId(null)}
          >
            ×
          </button>
          <div className="reviews-modal__frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${openId}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
