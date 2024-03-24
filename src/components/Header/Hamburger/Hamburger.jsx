import css from "./Hamburger.module.scss";

function Hamburger() {
  return (
    <a href="#" className={css.hamburger}>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
}

export default Hamburger;
