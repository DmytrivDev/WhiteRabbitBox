import css from "./HeaderCart.module.scss";

function HeaderCart() {
  return (
    <a href="#" className={css.header__cart}>
      <span className={css.cartCount}>0</span>
      <span className={css.cart__info}>
        <span className={css.cartT}>Сума</span>
        <span className={css.cartS}>1 200 грн</span>
      </span>
    </a>
  );
}

export default HeaderCart;
