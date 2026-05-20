const FACTORS = [
  {
    title: 'МАТЕРІАЛ',
    text: 'легка для сприйняття та гарно структурована подача',
  },
  {
    title: 'БАЖАННЯ',
    text: 'правильний настрій руйнує всі перешкоди на шляху до мети',
  },
  {
    title: 'ПІДТРИМКА',
    text: 'міцне плече близьких людей та завжди влучна порада куратора',
  },
] as const;

const RESULTS = [
  'Засвоїш повну базу: від створення акаунтів до прокрутки на кількох біржах',
  'Отримаєш практичні навички: налаштування зв’язок, робота з дропами, оборот через банки',
  'Підкачаєш аналітичне мислення і логіку в прийнятті фінансових рішень',
  'Навчишся масштабувати: з 1 зв’язки — до стабільної моделі з командою і оборотом',
] as const;

function FactorDot() {
  return <span className="talanta-section__dot" aria-hidden="true" />;
}

export default function SectionTalent() {
  return (
    <section className="talanta-section">
      <img
        src="/images/talanta-top-shard.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="talanta-section__shard talanta-section__shard--top"
      />
      <img
        src="/images/talanta-bottom-shard.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="talanta-section__shard talanta-section__shard--bottom"
      />

      <div className="container talanta-section__container">
        <header className="talanta-section__header">
          <h2 className="talanta-section__title">
            <span className="talanta-section__title-line">
              <span className="talanta-section__title-light">ТАЛАНТА НЕ ІСНУЄ</span>
            </span>
            <span className="talanta-section__title-line">
              <span className="talanta-section__title-light">АБО </span>
              <span className="talanta-section__title-gradient">АБО P2P-ТРЕЙДЕРАМИ НЕ</span>
            </span>
            <span className="talanta-section__title-line">
              <span className="talanta-section__title-gradient">НАРОДЖУЮТЬСЯ</span>
            </span>
          </h2>
          <p className="talanta-section__intro">
            Ми в <strong>FRANKLIN P2P EDUCATION</strong> віримо в силу бажання та наполегливості.
          </p>
        </header>

        <div className="talanta-section__top">
          <div className="talanta-section__percentages" aria-label="50, 25 і 25 відсотків">
            <div className="talanta-section__percent talanta-section__percent--gold">50%</div>
            <div className="talanta-section__percent talanta-section__percent--gray">25%</div>
            <div className="talanta-section__percent talanta-section__percent--white">25%</div>
          </div>

          <div className="talanta-section__factors">
            {FACTORS.map((factor) => (
              <div key={factor.title} className="talanta-section__factor">
                <div className="talanta-section__factor-title">{factor.title}</div>
                <div className="talanta-section__factor-desc">
                  <FactorDot />
                  <span>{factor.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="talanta-results">
          <div className="talanta-results__header">
            <span className="talanta-results__header-muted">ТВОЇ</span>{' '}
            <span className="talanta-results__header-accent">РЕЗУЛЬТАТИ</span>{' '}
            <span className="talanta-results__header-muted">ПІСЛЯ НАВЧАННЯ:</span>
          </div>

          <div className="talanta-results__grid">
            {RESULTS.slice(0, 2).map((item) => (
              <p key={item} className="talanta-results__item">
                <span className="talanta-results__check" aria-hidden="true">
                  ✓
                </span>
                {item}
              </p>
            ))}

            <div className="talanta-results__cta-card">
              <div className="talanta-results__cta-text">Отримаєш можливість почати заробляти від</div>
              <div className="talanta-results__cta-amount">2000$+</div>
            </div>

            {RESULTS.slice(2).map((item) => (
              <p key={item} className="talanta-results__item">
                <span className="talanta-results__check" aria-hidden="true">
                  ✓
                </span>
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
