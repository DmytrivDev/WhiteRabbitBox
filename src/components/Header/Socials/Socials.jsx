import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import css from "./Socials.module.scss";

function Socials({ data, srcJSON }) {
  const [openSocials, setOpenSocials] = useState(false);
  const ref = useRef(null);

  function hendleSocials(event) {
    event.preventDefault();

    setOpenSocials(!openSocials);
  }

  useOnClickOutside(ref, () => {
    setOpenSocials(false);
  });

  const createImg = (imgName, img, index) => {
    const imgSrc = srcJSON + "socials/" + img;
    return <img key={index} src={imgSrc} alt={imgName} />;
  };

  return (
    <div ref={ref} className={css.header__socvont}>
      <div onClick={hendleSocials} className={css.header__socctrl}>
        {data.slice(0, 4).map((item, index) => {
          const { name, img } = item;
          return createImg(name, img, index);
        })}
      </div>
      {openSocials ? (
        <div className={css.header__soclist}>
          {data.map((item, index) => {
            const { name, link, img } = item;
            return (
              <a key={index} href={link} target="_blank">
                {createImg(name, img, index)}
              </a>
            );
          })}
          <button
            onClick={hendleSocials}
            className={css.headersoc__close}
          ></button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Socials;
