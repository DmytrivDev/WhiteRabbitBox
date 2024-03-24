import AdventageItem from "./AdventageItem/AdventageItem";
import SeoVideo from "../SeoVideo/SeoVideo";

import css from "./Adventage.module.scss";

function Adventage() {
  return (
    <section className={css.section__adventage}>
      <div className="container">
        <h2 className="section__title">Любимо тe, чим ми займаємось</h2>
        <p className="section__undertitle">
          Унікальні пропозиції нашим клієнтам
        </p>
        <div className={css.adventage__content}>
          <div className={css.adv__carousel}>
            <AdventageItem />
            <AdventageItem />
            <AdventageItem />
            <AdventageItem />
            <AdventageItem />
            <AdventageItem />
          </div>
          <SeoVideo isAdventages={true} />
        </div>
      </div>
    </section>
  );
}

export default Adventage;
