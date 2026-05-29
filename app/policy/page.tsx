import type { Metadata } from 'next';
import Link from 'next/link';
import '../offer.css';

export const metadata: Metadata = {
  title: 'Політика конфіденційності — Franklin P2P Education',
  description: 'Політика конфіденційності ФОП Ремаренка Михайла Петровича щодо обробки персональних даних.',
};

export default function PolicyPage() {
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
          <h1 className="offer-page__title">Політика конфіденційності</h1>
          <p className="offer-page__intro">
            <strong>ФОП Ремаренко Михайло Петрович</strong>
          </p>
        </header>

        <div className="offer-page__body">

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">1</span>
              Відповідальність за персональні дані
            </h2>
            <p style={{ marginBottom: '14px' }}>
              У разі втрати або розголошення персональних даних, Адміністрація вебсайту не несе
              відповідальності, якщо такі дані:
            </p>
            <ul className="offer-list">
              <li>вже були загальнодоступними на момент втрати або розголошення;</li>
              <li>були отримані від третьої сторони до моменту їх отримання Адміністрацією;</li>
              <li>були розголошені за згодою самого Споживача.</li>
            </ul>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">2</span>
              Порядок вирішення спорів
            </h2>
            <p style={{ marginBottom: '14px' }}>
              Усі суперечки та розбіжності, що виникають у зв&apos;язку з виконанням цієї Політики
              конфіденційності, вирішуються шляхом переговорів між Споживачем і Адміністрацією вебсайту.
            </p>
            <p>
              У випадку неможливості дійти згоди, спір вирішується у судовому порядку за місцезнаходженням
              Виконавця.
            </p>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">3</span>
              Прикінцеві положення
            </h2>
            <ul className="offer-list">
              <li>
                Ця Політика конфіденційності розміщена на вебсайті:{' '}
                <a href="https://mini-franklinp2p.com" target="_blank" rel="noopener noreferrer" className="offer-link">
                  mini-franklinp2p.com
                </a>
              </li>
              <li>
                Адміністрація має право змінювати положення цієї Політики без попереднього погодження або
                повідомлення Споживача, якщо інше не передбачено законом або умовами цієї Політики.
              </li>
              <li>
                Нова редакція Політики набирає чинності з моменту її оприлюднення на сайті, якщо інше не вказано.
              </li>
              <li>
                Будь-які форми згоди, повідомлення про обробку cookies, спливаючі повідомлення або текстові
                інформери, що стосуються збору і обробки персональних даних, є невід&apos;ємними частинами
                цієї Політики конфіденційності.
              </li>
              <li>Текст викладено українською мовою.</li>
            </ul>
          </section>

          <section className="offer-section">
            <h2 className="offer-section__title">
              <span className="offer-section__num">4</span>
              Реквізити адміністрації вебсайту
            </h2>

            <div className="offer-contacts">
              <div className="offer-contacts__card" style={{ gridColumn: '1 / -1' }}>
                <div className="offer-contacts__card-title">Фізична особа-підприємець</div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Найменування:</span>
                  <span>Ремаренко Михайло Петрович</span>
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
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">IBAN:</span>
                  <span className="offer-contacts__mono">UA05325365000002600501207278 5</span>
                </div>
                <div className="offer-contacts__row">
                  <span className="offer-contacts__label">Банк:</span>
                  <span>АТ «КРЕДОБАНК», МФО: 325365</span>
                </div>
              </div>
            </div>
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
