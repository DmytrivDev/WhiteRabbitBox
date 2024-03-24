import css from "./Hamburger.module.scss";

function Hamburger({hendleNav}) {
  return (
    <button onClick={hendleNav} className={css.hamburger}>
      <span></span> 
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
