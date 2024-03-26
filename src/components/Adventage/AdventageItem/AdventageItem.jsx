import css from "./AdventageItem.module.scss";

function AdventageItem({item}) {
  const {name, text} = item;
  
  return (
    <div className={css.adv__item}>
      {name && (<h3>{name}</h3>)}
      {text && (<p>{text}</p>)}
    </div>
  );
}

export default AdventageItem;
