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
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
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
        src="/images/man-transparent.webp"
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
              <h1 className="hero-v2__title helvetica_60 helvetica_light">
                Опануй професію майбутнього
                <br />
                <span className="hero-v2__accent">за 30 днів</span> та почни заробляти{" "}
                <span className="hero-v2__accent">від $800</span>
              </h1>
              <div className="hero-buttons-wrapper hero-v2__buttons">
                <a href="#tariffs" className="button-black w-button">
                  <strong>Записатися на курс</strong>
                </a>
                <a href="#program" className="stroke-line-button btn-margin-33 w-inline-block">
                  <div className="opacity-60">Подивитись всю програму</div>
                </a>
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
