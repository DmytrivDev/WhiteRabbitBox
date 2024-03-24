import css from "./MobileNav.module.scss";

function MobileNav() {
  return (
    <>
      <div className={css.mobile__nav}>
        <div className={css.mobilenav__inner}>
          <ul className={css.mob__nav}>
            <li>
              <a href="products.html">Наші бокси</a>
            </li>
            <li>
              <a href="constructor.html">Зберіть свій бокс</a>
            </li>
            <li>
              <a href="collections.html">Книжкові добірки</a>
            </li>
            <li>
              <a href="sertificates.html">Сертифікати</a>
            </li>
            <li>
              <a href="about.html">Про нас</a>
            </li>
            <li>
              <a href="delievery.html">Доставка і оплата</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
          </ul>
          <div className={css.mobnav__test}>
            <div className={css.mobnav__testtitle}>Тести:</div>
            <ul className={css.mobtest__nav}>
              <li>
                <a href="#">В яких стосунках ви з книжками?</a>
              </li>
              <li>
                <a href="#">Твоя книжкова мова любові</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.mobnav__underlay}></div>
    </>
  );
}

export default MobileNav;
