const BONUS_CARDS = [
  {
    image: '/images/bonus-community.webp',
    title: "КОМ'ЮНІТІ",
    text: 'доступ до ком\'юніті на 6 місяців',
    alt: "Ком'юніті",
  },
  {
    image: '/images/bonus-resources.webp',
    title: 'РЕСУРСИ',
    text: 'пакет корисних ресурсів (таблиці для розрахунку, текста, додаткові матеріали)',
    alt: 'Ресурси',
  },
  {
    image: '/images/bonus-team.webp',
    title: 'КОМАНДА',
    text: 'можливість потрапити до нас в команду',
    alt: 'Команда',
  },
] as const;

function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="bonuses-card__check-icon">
      <path d="M9.2 13.7 7 11.5l-1.4 1.4 3.6 3.6L19 6.7l-1.4-1.4z" />
    </svg>
  );
}

export default function SectionBonuses() {
  return (
    <section className="bonuses-section">
      <div className="container bonuses-section__container">
        <h2 className="bonuses-section__title unbounded_70">
          <span className="bonuses-section__title-accent">БОНУСИ</span> ДЛЯ СТУДЕНТІВ КУРСУ
        </h2>

        <div className="bonuses-section__grid">
          {BONUS_CARDS.map((card) => (
            <article key={card.title} className="bonuses-card">
              <div className="bonuses-card__media">
                <img src={card.image} loading="lazy" alt={card.alt} className="bonuses-card__image" />
              </div>

              <div className="bonuses-card__check" aria-hidden="true">
                <CheckMark />
              </div>

              <div className="bonuses-card__body">
                <h3 className="bonuses-card__title">{card.title}</h3>
                <p className="bonuses-card__text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <a href="#tariff" className="bonuses-section__cta">
          ЗАПИСАТИСЯ НА КУРС
        </a>
      </div>
    </section>
  );
}
