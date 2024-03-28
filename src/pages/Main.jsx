import { useState } from "react";

import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Adventage from "../components/Adventage/Adventage";
import Feature from "../components/Feature/Feature";
import ProductsSection from "../components/ProductsSection/ProductsSection";

import dataBestsellers from "../../public/resource/bestsellers/bestsellers.json";

function Main({urlAPI}) {
  const [bestsellersJSON] = useState(dataBestsellers);
  const bestsellersEndpoint = "bestsellers";
  const latestEndpoint = "latest";

  return (
    <>
      <Header />
      <div className="wrapper">
        <MainSection />
        <Adventage />
        <Feature />
        {bestsellersJSON.enable && (
          <ProductsSection bg={true} sectionJSON={bestsellersJSON} urlAPI={urlAPI} endpoint={bestsellersEndpoint} />
        )}
        {bestsellersJSON.enable && (
          <ProductsSection bg={true} sectionJSON={bestsellersJSON} urlAPI={urlAPI} endpoint={latestEndpoint} />
        )}
      </div>
    </>
  );
}

export default Main;
