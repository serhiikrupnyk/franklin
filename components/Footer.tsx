export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__legal">
          <div className="site-footer__entity">ФОП Ремаренко Михайло Петрович</div>
          <div className="site-footer__meta">
            <span className="site-footer__meta-label">IBAN:</span>
            <span className="site-footer__meta-value">UA513005280000026003000049833</span>
          </div>
          <div className="site-footer__meta">
            <span className="site-footer__meta-label">ЄДРПОУ:</span>
            <span className="site-footer__meta-value">3695409437</span>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Документи">
          <a href="/policy" className="site-footer__link">
            Політика конфіденційності
          </a>
          <span className="site-footer__sep" aria-hidden="true" />
          <a href="/offer" className="site-footer__link">
            Договір оферти
          </a>
        </nav>
      </div>

      <div className="site-footer__copyright">
        © {new Date().getFullYear()} Franklin P2P Education. Усі права захищені.
      </div>
    </footer>
  );
}
