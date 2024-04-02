import clsx from "clsx";

import css from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__main}>
          <div className={css.footer__part}>
            <div className={css.footer__title}>Зв’язатись з нами</div>
            <ul className="footer__list">
              <li className={clsx(css.footwe__item, css.iconed)}>
                <a href="tel:380931775152">
                  <img src="assets/img/icons/ficon_1.svg" alt="" />
                  <span>+38 093 177 5152</span>
                </a>
              </li>
              <li className={clsx(css.footwe__item, css.iconed)}>
                <a href="mailto:sales@kashalot.gift">
                  <img src="assets/img/icons/ficon_2.svg" alt="" />
                  <span>sales@kashalot.gift</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.footer__part}>
            <div className={css.footer__title}>Зв’язатись з нами</div>
            <ul className="footer__list">
              <li className={css.footwe__item}>
                <a href="https://t.me/whiterabbitsbox">
                  <span>Telegram: @whiterabbitsbox</span>
                </a>
              </li>
              <li className={css.footwe__item}>
                <a href="viber://contact?number=%380931775152">
                  <span>Viber: 380931775152</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={css.footer__part}>
            <div className={css.footer__title}>Ми в соціальних мережах</div>
            <ul className="footer__list flex">
              <li className="footer__socitem">
                <a href="#" target="_blank">
                  <img src="assets/img/icons/fsoc_3.svg" alt="" />
                </a>
              </li>
              <li className="footer__socitem">
                <a href="#" target="_blank">
                  <img src="assets/img/icons/fsoc_4.svg" alt="" />
                </a>
              </li>
              <li className="footer__socitem">
                <a href="#" target="_blank">
                  <img src="assets/img/icons/fsoc_1.svg" alt="" />
                </a>
              </li>
              <li className="footer__socitem">
                <a href="#" target="_blank">
                  <img src="assets/img/icons/fsoc_2.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.footer__copyright}>
          <span>
            @Created by White.Rabbit`s.Box 2021-2023. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
