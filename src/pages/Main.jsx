import { useState } from "react";

import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Adventage from "../components/Adventage/Adventage";
import Feature from "../components/Feature/Feature";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Reviews from "../components/Reviews/Reviews";

import dataBestsellers from "../../public/resource/bestsellers/bestsellers.json";
import dataLatest from "../../public/resource/latest/latest.json";
import dataReviews from "../../../public/resource/reviews/reviews.json";

function Main({urlAPI}) {
  const [bestsellersJSON] = useState(dataBestsellers);
  const [latestJSON] = useState(dataLatest);
  const [reviewsJSON] = useState(dataReviews);
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
        {latestJSON.enable && (
          <ProductsSection bg={false} sectionJSON={latestJSON} urlAPI={urlAPI} endpoint={latestEndpoint} />
        )}
        {reviewsJSON.enable && (
          <Reviews sectionJSON={reviewsJSON} />
        )}
      </div>
    </>
  );
}

export default Main;
