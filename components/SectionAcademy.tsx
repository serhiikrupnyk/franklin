export default function SectionAcademy() {
  return (
    <section className="section-academy academy-v2">
      <img
        src="/images/6706d381099634a8affab75e_oskolok-academy-4.webp"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="academy-v2__shard academy-v2__shard--tl"
      />
      <img
        src="/images/6706cd50137f1727fd922acc_oskolok-academy-2%20%282%29.webp"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="academy-v2__shard academy-v2__shard--br"
      />
      <img
        src="/images/6706d25a738025ff21d8cbb2_oskolok-academy-3%20%281%29.webp"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="academy-v2__shard academy-v2__shard--r"
      />

      <div className="container academy-v2__container">
        <div className="academy-v2__grid">
          <div className="academy-v2__left">
            <div className="academy-v2__big" aria-hidden="true">
              1500
            </div>
            <img
              src="/images/WITHOUTBACK.webp"
              loading="lazy"
              alt=""
              className="academy-v2__hero"
            />

            <h2 className="academy-v2__title">
              <span className="academy-v2__title-brand">
                <span className="academy-v2__brand-franklin">REMARENKO</span>{' '}
                <span className="academy-v2__brand-p2p">P2P EDUCATION</span>
              </span>
              <span className="academy-v2__title-main">
                ПОВНОЦІННЕ НАВЧАННЯ P2P ВІД ДІЮЧИХ ПРАКТИКІВ
              </span>
            </h2>
          </div>

            <div className="academy-v2__right">
              <div className="academy-v2__right-top">
                <div className="academy-v2__kicker">
                  <span className="academy-v2__kicker-accent">ПОНАД 1500 СТУДЕНТІВ</span>
                  <br />
                  ПРОЙШЛИ НАВЧАННЯ
                </div>
              </div>

            <div className="academy-v2__stats">
              <div className="academy-v2__stat">
                <div className="academy-v2__stat-head">
                  <div className="academy-v2__stat-value">95%</div>
                  <span className="academy-v2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="m8.5 12 2.2 2.2 4.8-5" />
                    </svg>
                  </span>
                </div>
                <div className="academy-v2__stat-text">
                  <span className="academy-v2__check" aria-hidden="true" />
                  <span className="academy-v2__stat-copy">
                    повністю <span className="academy-v2__stat-accent">завершили</span> усі модулі
                  </span>
                </div>
              </div>
              <div className="academy-v2__stat">
                <div className="academy-v2__stat-head">
                  <div className="academy-v2__stat-value">89%</div>
                  <span className="academy-v2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 18V9M12 18V5M19 18v-7" />
                      <path d="m4 14 5-4 3 2 7-6" />
                      <path d="M16 6h3v3" />
                    </svg>
                  </span>
                </div>
                <div className="academy-v2__stat-text">
                  <span className="academy-v2__check" aria-hidden="true" />
                  <span className="academy-v2__stat-copy">
                    <span className="academy-v2__stat-accent">зробили</span> перший круг ще під час навчання
                  </span>
                </div>
              </div>
              <div className="academy-v2__stat">
                <div className="academy-v2__stat-head">
                  <div className="academy-v2__stat-value">78%</div>
                  <span className="academy-v2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 19.5h16" />
                      <path d="m5 16 4-4 3 2.5L19 7" />
                      <path d="M16 7h3v3" />
                    </svg>
                  </span>
                </div>
                <div className="academy-v2__stat-text">
                  <span className="academy-v2__check" aria-hidden="true" />
                  <span className="academy-v2__stat-copy">
                    <span className="academy-v2__stat-accent">вже вийшли</span> на стабільний профіт у P2P
                  </span>
                </div>
              </div>
            </div>

            <p className="academy-v2__desc">
              <span className="academy-v2__desc-accent">Мета — знайти найвмотивованіших студентів,</span> допомогти їм зробити перші результати в P2P,
              а далі — запропонувати співпрацю, партнерство або місце в нашій команді.
            </p>

            <a href="#tariff" className="academy-v2__cta">
              РОБИ СВІЙ ВИБІР ПОЧИНАЙ СВІЙ ШЛЯХ У P2P ВЖЕ СЬОГОДНІ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
