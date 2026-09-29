export default function SectionWho() {
  return (
    <section id="for-who" className="section-who who-v2">
      <div className="container">
        <div className="who-content">
          <div className="who-left">
            <h2 className="unbounded_70 who-v2__title">
              курс <span className="about-v2__gradient">підійде для:</span>
            </h2>
          </div>
          <div className="who-center who-v2__panel">
            <div className="who-center-point">
              <div className="who-v2__card-top">
                <span className="who-v2__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="m14.8 8.2-1.7 4.9-4.9 1.7 1.7-4.9 4.9-1.7Z" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </span>
                <span className="manrope_10 who-v2__num">01</span>
              </div>
              <div className="who-v2__point-text">
                <h3 className="who-v2__card-title">Новачкам</h3>
                <p className="helvetica_18 who-v2__card-copy">
                  Які ніколи не відкривали біржу, але хочуть зрозуміти, як працює P2P і заробити з
                  нуля — без досвіду, офісу та складної термінології.
                </p>
              </div>
            </div>
            <div className="who-center-point">
              <div className="who-v2__card-top">
                <span className="who-v2__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 19V9M12 19V5M19 19v-7" />
                    <path d="M3 15.5 8.2 11l4 2.6L21 6" />
                    <path d="M17.5 6H21v3.5" />
                  </svg>
                </span>
                <span className="manrope_10 who-v2__num">02</span>
              </div>
              <div className="who-v2__point-text">
                <h3 className="who-v2__card-title">Тим, хто вже працював із P2P</h3>
                <p className="helvetica_18 who-v2__card-copy">
                  Але не отримав результату — тут ви зможете розкласти все по поличках і зрозуміти,
                  як уникати помилок на старті.
                </p>
              </div>
            </div>
            <div className="who-center-point">
              <div className="who-v2__card-top">
                <span className="who-v2__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5h16" />
                    <path d="m5 16 4.2-4.2 3.2 2.8L19 7.5" />
                    <path d="M15.5 7.5H19V11" />
                    <path d="M5 19.5V6" />
                  </svg>
                </span>
                <span className="manrope_10 who-v2__num">03</span>
              </div>
              <div className="who-v2__point-text">
                <h3 className="who-v2__card-title">Тим, хто хоче «піти з роботи»</h3>
                <p className="helvetica_18 who-v2__card-copy">
                  І замість постійної гонки за зарплатою побудувати стабільний контрольований
                  прибуток.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
