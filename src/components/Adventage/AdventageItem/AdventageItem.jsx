import css from "./AdventageItem.module.scss";

function AdventageItem() {
  return (
    <div className={css.adv__item}>
      <h3 className={css.adv__title}>Книжкові бокси на будь-який смак</h3>
      <p className={css.adv__text}>
        Книжкові бокси від Білого кролика – перший український сервіс, де ви
        збираєте бокс за власними вподобаннями.
      </p>
    </div>
  );
}

export default AdventageItem;
