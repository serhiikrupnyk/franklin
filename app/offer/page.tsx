import type { Metadata } from 'next';
import Link from 'next/link';
import '../offer.css';

export const metadata: Metadata = {
  title: 'Договір публічної оферти — Franklin P2P Education',
  description: 'Офіційний договір публічної оферти ФОП Ремаренка Михайла Петровича щодо надання доступу до навчальних матеріалів.',
};

export default function OfferPage() {
  return (
    <div className="offer-page">
      <div className="offer-page__bg" aria-hidden="true" />

      <div className="offer-page__container">
        <Link href="/" className="offer-page__back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          На головну
        </Link>

        <header className="offer-page__header">
          <div className="offer-page__label">Юридичний документ</div>
          <h1 className="offer-page__title">Договір публічної оферти</h1>
          <p className="offer-page__intro">
            Цей документ є офіційною публічною офертою фізичної особи-підприємця{' '}
            <strong>Ремаренка Михайла Петровича</strong>, ІПН: 3695409437, надалі — «Виконавець»,
            і містить всі істотні умови надання доступу до навчальних матеріалів у форматі
            онлайн-курсу через Telegram-канал.
          </p>
        </header>

        <div className="offer-page__body">

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">1</span>
              Предмет договору
            </h2>
            <p>
              Виконавець надає Споживачу доступ до навчального матеріалу у вигляді відеоуроків,
              розміщених у Telegram-каналі, після здійснення повної оплати за один з навчальних
              міні-курсів з P2P-торгівлі.
            </p>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">2</span>
              Порядок укладення договору
            </h2>
            <p>
              Укладення цього Договору відбувається шляхом акцепту — факту оплати курсу через сайт.
              Це означає повну згоду Споживача з усіма умовами, викладеними у цьому документі.
            </p>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">3</span>
              Формат надання послуг
            </h2>
            <ul className="offer-list">
              <li>Весь доступ до навчального контенту надається через Telegram-канал.</li>
              <li>Після підтвердження платежу доступ надсилається автоматично або протягом 1–3 годин.</li>
            </ul>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">4</span>
              Ціна і оплата
            </h2>
            <ul className="offer-list">
              <li>Ціна курсу вказана на сайті у момент оформлення замовлення.</li>
              <li>Оплата здійснюється онлайн через платіжну систему WayForPay або інші доступні сервіси.</li>
            </ul>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">5</span>
              Повернення коштів
            </h2>
            <p>
              Оскільки доступ до матеріалів надається відразу після оплати, повернення коштів
              не передбачене. Просимо уважно ознайомитися з описом курсу перед оформленням замовлення.
            </p>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">6</span>
              Права та обов&apos;язки сторін
            </h2>

            <div className="offer-rights">
              <div className="offer-rights__block">
                <div className="offer-rights__subtitle">Споживач має право:</div>
                <ul className="offer-list">
                  <li>Отримати доступ до курсу після оплати.</li>
                  <li>
                    Звертатися з технічними або загальними запитаннями на електронну пошту{' '}
                    <a href="mailto:remarenkom255@gmail.com" className="offer-link">remarenkom255@gmail.com</a>{' '}
                    або за номером{' '}
                    <a href="tel:+380938600879" className="offer-link">+380938600879</a>.
                  </li>
                </ul>
              </div>

              <div className="offer-rights__block">
                <div className="offer-rights__subtitle">Споживач зобов&apos;язаний:</div>
                <ul className="offer-list">
                  <li>Не передавати доступ третім особам.</li>
                  <li>Не копіювати, не поширювати матеріали без письмової згоди Виконавця.</li>
                </ul>
              </div>

              <div className="offer-rights__block">
                <div className="offer-rights__subtitle">Виконавець має право:</div>
                <ul className="offer-list">
                  <li>Оновлювати матеріали без попередження.</li>
                  <li>Обмежити доступ у разі порушення умов договору (наприклад, поширення контенту).</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">7</span>
              Контактна інформація
            </h2>

            <div className="offer-contacts">
              <div className="offer-contacts__card">
                <div className="offer-contacts__card-title">Отримувач платежів</div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Найменування:</span>
                  <span>ФОП Ремаренко Михайло Петрович</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">ІПН:</span>
                  <span>3695409437</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Адреса:</span>
                  <span>м. Вінниця, вул. Київська, 106</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Email:</span>
                  <a href="mailto:remarenkom255@gmail.com" className="offer-link">remarenkom255@gmail.com</a>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Телефон:</span>
                  <a href="tel:+380938600879" className="offer-link">+380938600879</a>
                </div>
              </div>

              <div className="offer-contacts__card">
                <div className="offer-contacts__card-title">Реквізити рахунку</div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">IBAN:</span>
                  <span className="offer-contacts__mono">UA513005280000026003000049833</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Банк:</span>
                  <span>АТ &quot;ОТП БАНК&quot;</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">МФО:</span>
                  <span>300528</span>
                </div>
              </div>
            </div>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">8</span>
              Прикінцеві положення
            </h2>
            <ul className="offer-list">
              <li>Договір набирає чинності з моменту оплати.</li>
              <li>Доступ надається на строк, вказаний у курсі (наприклад, 6 місяців).</li>
              <li>Усі спори вирішуються шляхом переговорів або у законному порядку за місцем реєстрації Виконавця.</li>
            </ul>
          </section>

        </div>

        <footer className="offer-page__footer">
          <Link href="/" className="offer-page__back offer-page__back--bottom">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Повернутися на головну
          </Link>
          <span className="offer-page__copy">© {new Date().getFullYear()} Franklin P2P Education</span>
        </footer>
      </div>
    </div>
  );
}
