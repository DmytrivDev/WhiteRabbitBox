import { useState } from "react";

import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Adventage from "../components/Adventage/Adventage";
import Feature from "../components/Feature/Feature";
import ProductsSection from "../components/ProductsSection/ProductsSection";

import dataBestsellers from "../../public/resource/bestsellers/bestsellers.json";

function Main() {
  const [bestsellersJSON] = useState(dataBestsellers);

  return (
    <>
      <Header />
      <div className="wrapper">
        <MainSection />
        <Adventage />
        <Feature />
        {bestsellersJSON.enable && (
          <ProductsSection bg={true} bestsellersJSON={bestsellersJSON} />
        )}
      </div>
    </>
  );
}

export default Main;
