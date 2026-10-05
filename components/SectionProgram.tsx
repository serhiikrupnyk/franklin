"use client";

import { useState } from "react";

const PROGRAM_ICONS = [
  "/images/670075a64d1e04c6941a14ce_Group%201321316711.svg",
  "/images/670075a6bc892130619740ce_Group%201321316711-1.svg",
  "/images/670075a61589f419b5bd2228_Group%201321316711-2.svg",
] as const;

type ProgramModule = {
  label: string;
  title: string;
  art?: string;
  items: string[];
  additional?: string[];
  result: string;
};

const MODULES_BEFORE_PRO: ProgramModule[] = [
  {
    label: "Модуль 0",
    title: "Введення в курс",
    art: "/images/program-module-00.webp",
    items: [
      "Привітання та знайомство з REMARENKO P2P",
      "Як проходить навчання: формат, структура, правила",
      "Що таке P2P і як саме тут заробляють",
      "З чого почати: реєстрація, картки, банкінг, чати",
    ],
    additional: ["Словник термінів", "Інструкція для новачків"],
    result:
      "Розумієш, куди ти потрапив, готуєш акаунти та картки. Формуєш власний навчальний план.",
  },
  {
    label: "Модуль 01",
    title: "Перші кроки на Binance",
    art: "/images/program-module-01.webp",
    items: [
      "Створення і прогрів акаунту",
      "Платіжні методи та виставлення оголошень",
      "Як створювати ордери",
      "Перша зв'язка з прибутком 1–2%",
    ],
    additional: ["Шаблон оголошень", "Таблиця для розрахунку прибутку"],
    result: "Зробиш свій перший круг: купівля-продаж — з мінімальним ризиком.",
  },
  {
    label: "Модуль 02",
    title: "Біржі, мережі",
    art: "/images/program-module-02.webp",
    items: [
      "Які мережі використовуються у P2P",
      "Вартість і швидкість переказів",
      "ТОП бірж для прокрутів",
      "Як уникати зайвих комісій",
    ],
    additional: ["Порівняльна таблиця мереж та бірж"],
    result: "Розумієш, через що найвигідніше переказувати крипту швидко та вигідно.",
  },
  {
    label: "Модуль 03",
    title: "Безпека та апеляції",
    art: "/images/program-module-03.webp",
    items: [
      "Що таке апеляція і як її відкривати",
      "Як діяти, якщо тебе намагаються обманути",
      'Що робити, коли контрагент тисне "Переказано", але грошей нема',
      "Як не заскамитись на P2P",
    ],
    additional: ["Гайд по спілкуванню з підтримкою", "Сценарії вирішення конфліктів"],
    result: "Ти готовий до реальних кейсів. Вмієш захищатися в конфліктних ситуаціях.",
  },
  {
    label: "Модуль 04",
    title: "Дропи і оренда карток",
    art: "/images/program-module-04.webp",
    items: [
      "Де і як шукати дропів",
      "Як домовлятись і не зливати час",
      "Скільки платити дропу",
      "Юридичні та етичні нюанси",
    ],
    additional: ["Шаблони діалогів з дропами", "Список сайтів/методів для пошуку"],
    result: "Зможеш масштабуватись і не працювати тільки на своїх картках.",
  },
  {
    label: "Модуль 05",
    title: "Актуальні зв'язки",
    art: "/images/program-module-05.webp",
    items: [
      "OKX зв'язка — з прибутком до 2%",
      "Bybit — депозит + прокрут, прибуток до 2%",
      "Зв'язка — Трикутник між 3 біржами — без обмежень, прибуток до 2%",
    ],
    additional: ["Інструкція по кожній схемі"],
    result: "У тебе 3 готові робочі схеми — бери і заробляй.",
  },
];

const MODULES_PRO: ProgramModule[] = [
  {
    label: "Модуль 06",
    title: "Безліміт та обнал зв'язки",
    art: "/images/program-module-06.webp",
    items: [
      "USDT–USDC зв'язка — до 2% прибутку",
      "Як виводити кошти через банки/обмінники - ОБНАЛ",
      "Ризики та ліміти",
      "Перевірені схеми виведення",
    ],
    additional: ["Список обмінників", "Банки з хорошими умовами"],
    result: "Вмієш виводити/заводити гроші комфортно і без блоку.",
  },
  {
    label: "Модуль 07",
    title: "P2P через ФОП",
    art: "/images/program-module-07.webp",
    items: [
      "Як оформити ФОП",
      "Які банки найкращі",
      "Як не зловити блок",
      'Робоча модель "білого" прокруту через ФОП',
    ],
    additional: ["Гайд по відкриттю ФОП", "Приклади обороту через рахунок"],
    result: "Готовий працювати легально з великими сумами.",
  },
  {
    label: "Модуль 08",
    title: "Створення мерчанта",
    art: "/images/program-module-08.webp",
    items: [
      "Хто такий мерчант і чому це топ-рівень у P2P",
      "Як підготуватись до подачі заявки",
      "Як підвищити шанс проходження модерації",
    ],
    additional: [
      "Чек-лист для подачі",
      "PDF: переваги статусу",
      "Приклади успішного оформлення",
    ],
    result:
      "Зможеш оформити мерчанта на Binance чи інших біржа і вийти на новий рівень заробітку без зайвих дій.",
  },
];

const MODULES_EXTRA: ProgramModule[] = [
  {
    label: "Модуль 09",
    title: "Закордонні банки",
    items: [
      "Як працювати з Revolut, Wise, Paysera",
      "Що таке SEPA I SWIFT",
      "Прибуток на P2P з європейськими банками",
      "Юридичні та валютні обмеження",
    ],
    additional: ["Ліміти, швидкість, верифікація"],
    result: "Зможеш масштабуватись і вийти на закордонні банки.",
  },
  {
    label: "Модуль 10",
    title: "Робота з відгуками і довірою",
    items: [
      "Як видалити або приховати негативні коментарі",
      "Як відповідати грамотно на апеляції та фідбек",
      "Як підвищити рейтинг і довіру до акаунта",
      'Створення "бренду" в P2P',
    ],
    additional: ["Чек-лист для захисту акаунта"],
    result:
      "Побудуєш хорошу репутацію на біржі, яка підвищує продажі та захищає у спірних ситуаціях.",
  },
  {
    label: "Модуль 11",
    title: "Скам-схеми: як не втратити гроші",
    items: [
      "Реальні схеми шахраїв.",
      "Як себе вести при загрозі зливу",
      "Як не втратити ліміти, репутацію і крипту",
      "Що писати в апеляції, щоб повернути кошти",
    ],
    result: "Розумітимеш психологію шахрая і ніколи не потрапиш у скам.",
  },
  {
    label: "Модуль 12",
    title: "Масштабування до великих оборотів",
    items: [
      "Як масштабувати схеми та оборот",
      "Побудова команди",
      "Контроль фінансів і операцій",
      "Як з 1 кругу перейти до 20+/день",
    ],
    additional: ["Таблиця для обліку", "Покрокова модель по масштабуванню"],
    result: "Отримаєш системну модель, яку можна масштабувати до $10 000+ обороту/міс.",
  },
];

function ProgramModuleCard({
  module,
  iconIndex,
}: {
  module: ProgramModule;
  iconIndex: number;
}) {
  return (
    <article className="program_modul program-v2__card">
      <div className="program_modul_inside program-v2__inside">
        <div className="helvetica_ligt_17 opacity_30 program-v2__label">{module.label}</div>
        <div className="program-v2__body">
          <div className="program-v2__content">
            <div className="modul_icon_name program-v2__title-row">
              {module.art ? (
                <img
                  src={module.art}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={640}
                  alt=""
                  className="program-v2__art"
                />
              ) : (
                <img
                  src={PROGRAM_ICONS[iconIndex % PROGRAM_ICONS.length]}
                  loading="lazy"
                  alt=""
                  className="program_icon program-v2__icon"
                />
              )}
              <div className="unbounded_40 mobile-18 program-v2__module-title">
                {module.title}
              </div>
            </div>
            <div className="module_description program-v2__list">
              {module.items.map((item, i) => (
                <div key={i} className="modul_point">
                  <div className="modul_number program-v2__num">{i + 1}.</div>
                  <div className="gilroy_20 program-v2__item-text">{item}</div>
                </div>
              ))}
              {module.additional && module.additional.length > 0 && (
                <div className="modul_point program-v2__extra">
                  <div className="modul_number opacity-0">0.</div>
                  <div className="gilroy_20 program-v2__item-text">
                    <span className="program-v2__extra-label">Додатково:</span>
                    <ul className="program-v2__extra-list">
                      {module.additional.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <aside className="module-result program-v2__result">
            <div className="result-content program-v2__result-inner">
              <div className="unbounded_40 white program-v2__result-title">Результат:</div>
              <div className="gilroy_20 white program-v2__result-text">{module.result}</div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

export default function SectionProgram() {
  const [showMore, setShowMore] = useState(false);
  let iconCounter = 0;

  return (
    <section id="program" className="section_program program-v2">
      <div className="program-v2__surface">
        <div className="container">
          <div className="program">
            <div className="program-title-wrapper">
              <h2 className="unbounded_70 program-v2__heading">
                <span className="program-v2__heading-dark">Програма</span>{" "}
                <span className="program-v2__heading-light">курсу</span>
              </h2>
            </div>
            <div className="program_modules program-v2__modules">
              {MODULES_BEFORE_PRO.map((mod) => {
                const idx = iconCounter++;
                return <ProgramModuleCard key={mod.label} module={mod} iconIndex={idx} />;
              })}
              <p className="program-v2__divider unbounded_70">
                <span className="program-v2__divider-light">Тільки для </span>
                <span className="program-v2__divider-dark">PRO та P2P MASTER</span>
              </p>
              {MODULES_PRO.map((mod) => {
                const idx = iconCounter++;
                return <ProgramModuleCard key={mod.label} module={mod} iconIndex={idx} />;
              })}
              {showMore && (
                <div className="program-v2__more">
                  <p className="program-v2__divider program-v2__divider--spec unbounded_70">
                    <span className="program-v2__divider-light">Тільки для </span>
                    <span className="program-v2__divider-dark">PRO та P2P MASTER</span>
                  </p>
                  {MODULES_EXTRA.map((mod) => {
                    const idx = iconCounter++;
                    return <ProgramModuleCard key={mod.label} module={mod} iconIndex={idx} />;
                  })}
                </div>
              )}
            </div>
            <button
              type="button"
              className="button_stroke program-v2__cta w-button"
              onClick={() => setShowMore((open) => !open)}
              aria-expanded={showMore}
            >
              {showMore ? "Згорнути" : "Дізнатись детальніше"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
