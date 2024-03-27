import { useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';

import MainItems from "./MainItems/MainItems";
import FreeDelievery from "./FreeDelievery/FreeDelievery";

import data from '../../../public/resource/main-section/main-section.json';

import css from "./MainSection.module.scss";

function Header() {
  const isBreikpoint = useMediaQuery('(max-width: 960px)');

  const [dataJSON] = useState(data);
  
  return (
    <section className={css.section__main}>
      <div className="container">
        <div className={css.msin__container}>
          {dataJSON.parts.map((part, index) => {
            return <MainItems key={index} part={part} srcJSON={data.srcJSON} />;
          })}
          {isBreikpoint && (<FreeDelievery data={dataJSON.free_delievery} />)}
        </div>
      </div>
    </section>
  );
}

export default Header;
