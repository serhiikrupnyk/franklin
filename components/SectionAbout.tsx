export default function SectionAbout() {
  return (
    <section className="section-about about-v2">
      <img
        src="/images/6706e3d30edb2c8ac2ded551_oskolok%20about-mob.webp"
        loading="lazy"
        width={65}
        alt=""
        className="about-decor-img-mob"
      />
      <div className="container">
        <div className="about-content">
          <div className="about-content-up">
            <div className="about-title-wrapper">
              <h2 className="unbounded_60 about-v2__title">
                <span className="about-v2__gradient">FRANKLIN P2P EDUCATION – НАВЧИСЯ</span>{" "}
                ЗАРОБЛЯТИ НА P2P ТОРГІВЛІ ВІД 800$ ВСЬОГО ЗА МІСЯЦЬ
              </h2>
            </div>
            <img
              src="/images/67029c4837e52c66c08f034a_3D%20Black%20Chrome%20Shape%20%2814%29.webp"
              loading="lazy"
              alt=""
              className="about-img"
            />
            <div className="about-task-wrapper">
              <p className="helvetica_20 about-v2__task">
                <span className="about-v2__gradient">Його завдання —</span> дати чітке розуміння P2P
                торгівлі, щоб після курсу ти знав, як правильно стартувати в P2P, не злитися на
                помилках і стабільно заробляти.
              </p>
            </div>
          </div>
          <div className="about-content-down">
            <div className="advantage advantage--sm">
              <div className="advantage-icon-wrapper">
                <img
                  src="/images/advantage-1.svg"
                  loading="lazy"
                  alt=""
                  className="advantage-icon"
                />
              </div>
              <div className="about-v2__card-body">
                <p className="helvetica_21 about-v2__card-text">
                  <span className="about-v2__gradient">На «ти»</span>
                  <br />
                  з аналізом
                </p>
              </div>
            </div>
            <div className="advantage advantage--sm">
              <div className="advantage-icon-wrapper">
                <img
                  src="/images/advantage-2.svg"
                  loading="lazy"
                  alt=""
                  className="advantage-icon"
                />
              </div>
              <div className="about-v2__card-body">
                <p className="helvetica_21 about-v2__card-text">
                  <span className="about-v2__gradient">Дружить</span>
                  <br />
                  з трендами
                </p>
              </div>
            </div>
            <div className="advantage advantage--md">
              <div className="advantage-icon-wrapper">
                <img
                  src="/images/advantage-3.svg"
                  loading="lazy"
                  alt=""
                  className="advantage-icon"
                />
              </div>
              <p className="helvetica_21 about-v2__card-text">
                <span className="about-v2__gradient">Тестує нові формати</span> прокрутів, біржі,
                банківські рішення та нестандартні схеми з дропами.
              </p>
            </div>
            <div className="advantage advantage--lg">
              <div className="advantage-icon-wrapper">
                <img
                  src="/images/advantage-3-1.svg"
                  loading="lazy"
                  alt=""
                  className="advantage-icon"
                />
              </div>
              <p className="helvetica_21 about-v2__card-text">
                <span className="about-v2__gradient">І що найголовніше,</span> як побудувати систему
                P2P під себе — так, щоб вона працювала стабільно і приносила прибуток щодня.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
