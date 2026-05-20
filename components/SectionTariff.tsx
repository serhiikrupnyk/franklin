type TariffPlan = {
  code: 'basic' | 'pro' | 'master';
  labelTop?: string;
  name: string;
  bullets: string[];
  result: string;
  oldPrice: string;
  price: string;
  ctaHref: string;
  ctaLabel: string;
};

const PLANS: TariffPlan[] = [
  {
    code: 'basic',
    name: 'BASIC',
    bullets: [
      'Доступ до 7 базових модулів навчання',
      'Відеоуроки в записі',
      'Підтримка 3 рази на тиждень у чаті та зідзвони',
      "2 місяці доступу до закритого ком'юніті",
      '1 місяць доступу до навчання',
      'Домашні завдання без перевірки',
      "Робочі зв'язки з прибутком 1–2% за круг",
      'Додаткові матеріали: алгоритми, шаблони, гайди та чек-листи',
    ],
    result:
      'Розуміння усіх базових аспектів у P2P, старт заробітку з доходом від 500$ на місяць. Можливість відбити вартість курсу вже під час навчання.',
    oldPrice: '490$',
    price: '290$',
    ctaHref: '#form',
    ctaLabel: 'ОБРАТИ ТАРИФ',
  },
  {
    code: 'pro',
    labelTop: '50 місць',
    name: 'PRO',
    bullets: [
      'Усе, що в тарифі базовий: Basic',
      '+ 7 додаткових модулів:',
      '1. 2P2P через ФОП',
      '2. Закордонні банки',
      '3. P2P через мерчанта',
      '4. Як працювати з відгуками',
      '5. Як уникати шахраїв',
      '6. Масштабування та побудова P2P-команди',
      '7. Робочі валютні угоди',
      'Чат для учнів',
      'Групові зідзвони з кураторами',
      'Перевірка домашніх завдань',
      "Доступ до ком'юніті на 3 місяці",
      'Доступ до навчання на 3 місяці',
      "Робочі зв'язки з прибутком 1–3%",
      'Можливість потрапити до команди',
      'Детальна інструкція з отримання статусу мерчанта',
    ],
    result:
      "Глибоке розуміння ринку, дохід від 1000$+ на місяць, реальна можливість потрапити до команди FranklinP2P. Можливо окупити вартість навчання ще під час проходження курсу.",
    oldPrice: '700$',
    price: '450$',
    ctaHref: '#form',
    ctaLabel: 'ОБРАТИ ТАРИФ',
  },
  {
    code: 'master',
    labelTop: '20 місць',
    name: 'P2P MASTER',
    bullets: [
      'Усе з тарифу: PRO',
      'Чат із експертом та 2 кураторами',
      'Робочі учасники та P2P-угоди за відгуками',
      'Ігри між командами (3 команди × 4 учасники). Топ 3 місця — призи',
      'Поглиблена допомога з отримання статусу мерчанта',
      'Доступ до навчання назавжди',
      "6 місяців доступу до ком'юніті",
      'Повна підтримка під час і після навчання',
      'Можливість нетворкінгу офлайн',
      "Робочі зв'язки з прибутком 1–5%",
    ],
    result:
      'Розуміння, як масштабуватись до стабільного доходу 1500–2000$+ щомісяця. Можливість увійти до команди FranklinP2P або побудувати власну.',
    oldPrice: '1200$',
    price: '790$',
    ctaHref: '#form',
    ctaLabel: 'ОБРАТИ ТАРИФ',
  },
] as const;

function TariffCard({ plan }: { plan: TariffPlan }) {
  return (
    <article className={`tariff-v3__card tariff-v3__card--${plan.code}`}>
      <div className="tariff-v3__card-top">
        {plan.labelTop ? <div className="tariff-v3__badge">{plan.labelTop}</div> : <div className="tariff-v3__cap" />}
        <div className="tariff-v3__tariff-label">тариф:</div>
        <h3 className="tariff-v3__name">{plan.name}</h3>
      </div>

      <div className="tariff-v3__divider" aria-hidden="true" />

      <ul className="tariff-v3__list">
        {plan.bullets.map((line, idx) => (
          <li key={`${plan.code}-${idx}`} className="tariff-v3__li">
            <span className="tariff-v3__dot" aria-hidden="true" />
            <span className="tariff-v3__li-text">{line}</span>
          </li>
        ))}
      </ul>

      <div className="tariff-v3__result">
        <div className="tariff-v3__result-title">Результат:</div>
        <div className="tariff-v3__result-text">{plan.result}</div>
      </div>

      <div className="tariff-v3__bottom">
        <div className="tariff-v3__prices">
          <div className="tariff-v3__old">{plan.oldPrice}</div>
          <div className="tariff-v3__price">{plan.price}</div>
        </div>
        <a href={plan.ctaHref} className={`tariff-v3__cta tariff-v3__cta--${plan.code}`}>
          {plan.ctaLabel}
        </a>
      </div>
    </article>
  );
}

export default function SectionTariff() {
  return (
    <section id="tariff" className="tariff-v3">
      <div className="container tariff-v3__container">
        <h2 className="tariff-v3__title">
          <span className="tariff-v3__title-accent">ВАРТІСТЬ</span>
          <br />
          НАВЧАННЯ
        </h2>

        <div className="tariff-v3__grid">
          {PLANS.map((plan) => (
            <TariffCard key={plan.code} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
