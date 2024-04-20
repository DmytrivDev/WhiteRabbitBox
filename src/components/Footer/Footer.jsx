import { useState } from "react";
import clsx from "clsx";

import data from "../../../public/resource/footer/footer.json";

import css from "./Footer.module.scss";

function Footer() {
  const [dataJSON, setdataJSON] = useState(data);
  const {
    title_contacts,
    constacts,
    title_mess,
    mess,
    title_soc,
    socials,
    srcJSON,
  } = dataJSON;

  const currentYear = new Date().getFullYear();

  const createImg = (icon, name) => {
    const imgSrc = srcJSON + "socials/" + icon;
    return <img src={imgSrc} alt={name} />;
  };

  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__main}>
          {title_contacts && constacts && (
            <div className={css.footer__part}>
              <div className={css.footer__title}>{title_contacts}</div>
              <ul className="footer__list">
                {constacts.map((item, index) => {
                  const { text, url, name, icon } = item;
                  const imgSrc = srcJSON + icon;
                  return (
                    <li
                      key={index}
                      className={clsx(css.footwe__item, css.iconed)}
                    >
                      <a href={url}>
                        <img src={imgSrc} alt={name} />
                        <span>{text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {title_mess && mess && (
            <div className={css.footer__part}>
              <div className={css.footer__title}>{title_mess}</div>
              <ul className="footer__list">
                {mess.map((item, index) => {
                  const { text, url } = item;
                  return (
                    <li key={index} className={css.footwe__item}>
                      <a href={url}>
                        <span>{text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {title_soc && socials && (
            <div className={css.footer__part}>
              <div className={css.footer__title}>{title_soc}</div>
              <ul className="footer__list flex">
                {socials.map((item, index) => {
                  const { name, link, img } = item;
                  return (
                    <li key={index} className="footer__socitem">
                      <a href={link} target="_blank">
                        {createImg(img, name)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className={css.footer__copyright}>
          <span>
            @Created by White.Rabbit`s.Box 2021-{currentYear}. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
