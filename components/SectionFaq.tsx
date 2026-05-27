'use client';
import { useEffect } from 'react';

export default function SectionFaq() {
  useEffect(() => {
    const wraps = document.querySelectorAll<HTMLElement>('.section-faq .w-dropdown');
    const cleanups: Array<() => void> = [];
    wraps.forEach((wrap) => {
      const toggle = wrap.querySelector<HTMLElement>('.w-dropdown-toggle');
      const list = wrap.querySelector<HTMLElement>('.w-dropdown-list');
      const arrow = wrap.querySelector<HTMLElement>('.faq-arrow');
      if (!toggle || !list) return;

      list.style.height = '0px';
      list.style.overflow = 'hidden';
      list.style.transition = 'height 0.35s ease';
      if (arrow) {
        arrow.style.transition = 'transform 0.35s ease';
        arrow.style.transform = 'rotateZ(180deg)';
      }
      toggle.setAttribute('aria-expanded', 'false');
      toggle.style.cursor = 'pointer';

      const onClick = () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        if (open) {
          list.style.height = '0px';
          toggle.setAttribute('aria-expanded', 'false');
          if (arrow) arrow.style.transform = 'rotateZ(180deg)';
        } else {
          const target = list.scrollHeight + 'px';
          list.style.height = '0px';
          requestAnimationFrame(() => {
            list.style.height = target;
          });
          toggle.setAttribute('aria-expanded', 'true');
          if (arrow) arrow.style.transform = 'rotateZ(0deg)';
        }
      };
      toggle.addEventListener('click', onClick);
      cleanups.push(() => toggle.removeEventListener('click', onClick));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
    <div className="section-faq"><img src="/images/6704526a928a280bf93173dc_oskolok-faq.webp" loading="lazy" width="288" alt="" className="faq-decor-img" />
      <div className="container">
        <div className="faq_content">
          <div className="faq_2_line_text">
            <div className="unbounded_70 light-gradient-text">Залишились <span className="gradient_text">питання?</span>
            </div>
          </div>


          <div className="faq-wrapper">
            <div data-delay="0" data-hover="false" data-w-id="20ab7ef7-0bb0-e476-4ef7-3f7c16d941bc" className="dropdown w-dropdown">
              <div className="dropdown_up w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                <div className="dropdown-up">
                  <div style={{backgroundColor: 'rgb(54, 54, 54)'}} className="faq_icon_container"><img src="/images/670186946ac70f4e8a6991b0__.svg" loading="lazy" alt="" className="faq_icon" /></div>
                  <div className="faq_text_arrow">
                    <div className="helvetica_med_25 white">Який депозит мені потрібен для старту?</div>
                    <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="faq-arrow">
                      <div className="faq-line_left"></div>
                      <div className="faq-line_right"></div>
                    </div>
                  </div>
                </div>
                <div className="faq-line"></div>
              </div>
              <nav style={{height: '0px'}} className="dropdown-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                <div className="margin_30"></div>
                <div className="helvetica_21 white mobile_15">Починати можна навіть з $100. Головне - правильно
                  запуститись.
                  На курсі покажемо, як не злитись на старті та як краще крутити.</div>
                <div className="margin_50"></div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" data-w-id="77175abc-0d1b-fa71-4e59-4923a21bd98a" className="dropdown w-dropdown">
              <div className="dropdown_up w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                <div className="dropdown-up">
                  <div style={{backgroundColor: 'rgb(54, 54, 54)'}} className="faq_icon_container"><img src="/images/670186946ac70f4e8a6991b0__.svg" loading="lazy" alt="" className="faq_icon" /></div>
                  <div className="faq_text_arrow">
                    <div className="helvetica_med_25 white">Я повний навачок. Раніше не стикався з криптою. Мені підійде?
                    </div>
                    <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="faq-arrow">
                      <div className="faq-line_left"></div>
                      <div className="faq-line_right"></div>
                    </div>
                  </div>
                </div>
                <div className="faq-line"></div>
              </div>
              <nav style={{height: '0px'}} className="dropdown-list w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
                <div className="margin_30"></div>
                <div className="helvetica_21 white mobile_15">Абсолютно! Ми розбираємо все з нуля - від "як
                  зареєструватися"
                  до "як крутити першу зв'язку". Навіть якщо ти далекий від техніки - після уроків усе стане на
                  місця.
                </div>
                <div className="margin_50"></div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" data-w-id="c361034a-a837-dece-97f1-d6db87002cdd" className="dropdown w-dropdown">
              <div className="dropdown_up w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                <div className="dropdown-up">
                  <div style={{backgroundColor: 'rgb(54, 54, 54)'}} className="faq_icon_container"><img src="/images/670186946ac70f4e8a6991b0__.svg" loading="lazy" alt="" className="faq_icon" /></div>
                  <div className="faq_text_arrow">
                    <div className="helvetica_med_25 white">Як швидко я зможу окупити навчання?</div>
                    <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="faq-arrow">
                      <div className="faq-line_left"></div>
                      <div className="faq-line_right"></div>
                    </div>
                  </div>
                </div>
                <div className="faq-line"></div>
              </div>
              <nav style={{height: '0px'}} className="dropdown-list w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                <div className="margin_30"></div>
                <div className="helvetica_21 white mobile_15">Все залежить тільки від тебе. Хтось виходить в плюс на
                  3-й
                  день, хтось - за тиждень. Уроки максимально практичні: вчишся → пробуєш → отримуєш результат.
                </div>
                <div className="margin_50"></div>
              </nav>
            </div>
            <div data-delay="0" data-hover="false" data-w-id="04d9550f-48ee-b3b1-1de8-8eb778958322" className="dropdown w-dropdown">
              <div className="dropdown_up w-dropdown-toggle" id="w-dropdown-toggle-3" aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex={0}>
                <div className="dropdown-up">
                  <div style={{backgroundColor: 'rgb(54, 54, 54)'}} className="faq_icon_container"><img src="/images/670186946ac70f4e8a6991b0__.svg" loading="lazy" alt="" className="faq_icon" /></div>
                  <div className="faq_text_arrow">
                    <div className="helvetica_med_25 white">Скільки часу триває курс? Скільки треба виділяти щодня?
                    </div>
                    <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="faq-arrow">
                      <div className="faq-line_left"></div>
                      <div className="faq-line_right"></div>
                    </div>
                  </div>
                </div>
                <div className="faq-line"></div>
              </div>
              <nav style={{height: '0px'}} className="dropdown-list w-dropdown-list" id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3">
                <div className="margin_30"></div>
                <div className="helvetica_21 white mobile_15">Навчання розраховане на місяць активної практики. Можна проходити в своєму темпі, витрачаючи від 1 до 2 годин на день.</div>
                <div className="margin_50"></div>
              </nav>
            </div>
          </div>
          <div className="btn-faq-wrapper-mob"><a href="https://t.me/P2P_Mentoor" target="_blank" rel="noopener noreferrer" className="button-black w-button "><strong>Записатися на курс</strong></a></div>
        </div>
      </div>
    </div>

    </>
  );
}
