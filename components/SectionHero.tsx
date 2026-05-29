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
        <span className="hero-v2__brand-line">FRANKLIN</span>
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
                <a href="https://t.me/P2P_Mentoor" target="_blank" rel="noopener noreferrer" className="button-black w-button">
                  <strong>Записатися на курс</strong>
                </a>
                <a href="#program" className="stroke-line-button btn-margin-33 w-inline-block">
                  <div className="opacity-60">Подивитись всю програму</div>
                </a>
              </div>
              <div className="hero-v2__contacts">
                <span className="hero-v2__contacts-label">👨🏻‍💻 Зв&apos;язок зі мною:</span>
                <div className="hero-v2__contacts-links">
                  <a href="https://t.me/traffic_merch" target="_blank" rel="noopener noreferrer" className="hero-v2__contact-link">
                    @traffic_merch
                  </a>
                  <a href="https://t.me/P2P_Mentoor" target="_blank" rel="noopener noreferrer" className="hero-v2__contact-link">
                    @P2P_Mentoor
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/images/dolar.webp"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt=""
              className="hero-v2__dolar"
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
