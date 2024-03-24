import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import css from "./Socials.module.scss";

function Socials() {
  const [openSocials, setOpenSocials] = useState(false);
  const ref = useRef(null)

  function hendleSocials(event) {
    event.preventDefault();
    
    setOpenSocials(!openSocials);
  }

  useOnClickOutside(ref, () => {
    setOpenSocials(false);
  });

  return (
    <div ref={ref} className={css.header__socvont}>
      <div onClick={hendleSocials} className={css.header__socctrl}>
        <img src="/src/assets/img/icons/hsoc_1.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_2.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_3.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_4.svg" alt="" />
      </div>
      {openSocials ? (
        <div className={css.header__soclist}>
          <a href="#" target="_blank">
            <img src="/src/assets/img/icons/hsoc_1.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/src/assets/img/icons/hsoc_2.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/src/assets/img/icons/hsoc_3.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/src/assets/img/icons/hsoc_4.svg" alt="" />
          </a>
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
