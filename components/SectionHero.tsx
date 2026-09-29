export default function SectionHero() {
  return (
    <section className="section-hero hero-v2">
      <svg style={{ display: "none" }} aria-hidden="true">
        <defs>
          <filter id="horizontal-glitch-desktop">
            <feTurbulence type="fractalNoise" baseFrequency="0.1 0.30" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="horizontal-glitch-mobile">
            <feTurbulence type="fractalNoise" baseFrequency="0.1 0.50" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="hero-v2__bg" aria-hidden="true" />
      <div className="hero-darkness" />
      <div className="hero-v2__brand-bg" aria-hidden="true">
        <span className="hero-v2__brand-line">REMARENKO</span>
        <span className="hero-v2__brand-line hero-v2__brand-line--p2p">P2P</span>
        <span className="hero-v2__brand-line">EDUCATION</span>
      </div>
      <img
        src="/images/man-color-transparent.webp"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        alt=""
        className="hero-v2__man"
      />
      <div className="container">
        <div className="hero-v2__inner">
          <div className="hero-v2__main">
            <div className="hero-v2__copy">
              <div className="hero-v2__details">
                <p className="hero-v2__subtitle">
                  Практичне навчання P2P-торгівлі з реальними зв&apos;язками та підтримкою
                </p>
                <div className="hero-v2__badges">
                  <span className="hero-v2__badge">1500+ учнів</span>
                  <span className="hero-v2__badge hero-v2__badge--accent">4 роки в P2P</span>
                  <span className="hero-v2__badge-newline" aria-hidden="true" />
                  <span className="hero-v2__badge">ФОП + офіційна оплата</span>
                </div>
                <div className="hero-buttons-wrapper hero-v2__buttons">
                  <a href="#tariff" className="button-black w-button">
                    <strong>Записатися на курс</strong>
                  </a>
                  <a href="#program" className="stroke-line-button btn-margin-33 w-inline-block">
                    <div className="opacity-60">Подивитись всю програму</div>
                  </a>
                </div>
                <div className="hero-v2__contacts">
                  <span className="hero-v2__contacts-label">
                    <svg className="hero-v2__contacts-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M8 10.5h8M8 14h5" />
                      <path d="M20 11.5a8 8 0 0 1-8 8c-1.1 0-2.15-.22-3.1-.62L4 20l1.12-4.2A8 8 0 1 1 20 11.5Z" />
                    </svg>
                    Зв&apos;язок зі мною:
                  </span>
                  <div className="hero-v2__contacts-links">
                    <a href="https://t.me/P2P_Marshal" target="_blank" rel="noopener noreferrer" className="hero-v2__contact-link">
                      <svg className="hero-v2__telegram-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.7 3.4 2.9 10.3c-1.2.5-1.2 1.1-.2 1.4l4.6 1.4 1.7 5.3c.2.6.1.9.8.9.5 0 .8-.2 1-.4l2.2-2.1 4.7 3.5c.9.5 1.5.3 1.7-.8l3-14.2c.3-1.4-.5-2.1-1.7-1.9Zm-2.1 3.3-8.8 8c-.3.3-.6.5-.6 1.1l-.2 2.3-1.6-5.2 10.5-6.6c.5-.3.9-.1.7.4Z" />
                      </svg>
                      <span>@P2P_Marshal</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/IMG_8004.PNG"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1254}
              height={1254}
              alt="Логотип REMARENKO P2P"
              className="hero-v2__logo"
            />
          </div>
          <div className="hero-content-down hero-v2__cards">
            <div className="hero-points-wrapper">
              <div className="hero-point-wrapper-icon">
                <img
                  src="/images/6708e644e3ba1983d1e13bd5_Frame-2.svg"
                  loading="lazy"
                  alt=""
                  className="hero-point-icon"
                />
              </div>
              <div className="hero-point-text-wrapper">
                <div className="helvetica_40_bold white">Почни</div>
                <div className="helvetica_20 white mobile_15">З нуля. Досвід не важливий</div>
              </div>
            </div>
            <div className="hero-points-wrapper">
              <div className="hero-point-wrapper-icon">
                <img
                  src="/images/6708e645baf25a56882ed7a5_Frame.svg"
                  loading="lazy"
                  alt=""
                  className="hero-point-icon"
                />
              </div>
              <div className="hero-point-text-wrapper">
                <div className="helvetica_40_bold white">Опануй</div>
                <div className="helvetica_20 white mobile_15">Всі інструменти P2P торгівлі</div>
              </div>
            </div>
            <div className="hero-points-wrapper">
              <div className="hero-point-wrapper-icon">
                <img
                  src="/images/6708e644fffd70bdfa99baa3_Frame-1.svg"
                  loading="lazy"
                  alt="play"
                  className="hero-point-icon"
                />
              </div>
              <div className="hero-point-text-wrapper">
                <div className="helvetica_40_bold white">Прокрути</div>
                <div className="helvetica_20 white mobile_15">Свою першу зв&apos;язку</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
