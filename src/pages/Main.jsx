import { useState } from "react";

import MainSection from "../components/MainSection/MainSection";
import Adventage from "../components/Adventage/Adventage";
import Feature from "../components/Feature/Feature";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Reviews from "../components/Reviews/Reviews";
import SeoBlock from "../components/SeoBlock/SeoBlock";

import dataBestsellers from "../../public/resource/bestsellers/bestsellers.json";
import dataLatest from "../../public/resource/latest/latest.json";
import dataReviews from "../../public/resource/reviews/reviews.json";
import dataSeo from "../../public/resource/seo/seo.json";

import {
  bestsellersEndpoint,
  latestEndpoint,
  reviewsEndpoint,
  seoEndpoint,
} from "../constants";

function Main({}) {
  return (
    <div className="wrapper">
      <MainSection />
      <Adventage />
      <Feature />
      {dataBestsellers.enable && (
        <ProductsSection
          bg={true}
          sectionJSON={dataBestsellers}
          endpoint={bestsellersEndpoint}
        />
      )}
      {dataReviews.enable && (
        <ProductsSection
          bg={false}
          sectionJSON={dataLatest}
          endpoint={latestEndpoint}
        />
      )}
      {dataReviews.enable && (
        <Reviews reviewsJSON={dataReviews} endpoint={reviewsEndpoint} />
      )}
      {dataSeo.enable && <SeoBlock seoJSON={dataSeo} endpoint={seoEndpoint} />}
    </div>
  );
}

export default Main;
