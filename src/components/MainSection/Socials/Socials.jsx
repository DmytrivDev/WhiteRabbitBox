import css from "./Socials.module.scss";

function Socials() {
  return (
    <div className={css.header__socvont}>
      <div className={css.header__socctrl}>
        <img src="/src/assets/img/icons/hsoc_1.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_2.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_3.svg" alt="" />
        <img src="/src/assets/img/icons/hsoc_4.svg" alt="" />
      </div>
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
        <a href="#" className="headersoc__close"></a>
      </div>
    </div>
  );
}

export default Socials;
