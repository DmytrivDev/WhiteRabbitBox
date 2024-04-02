import { useState } from "react";

import Header from "../components/Header/Header";
import MainSection from "../components/MainSection/MainSection";
import Adventage from "../components/Adventage/Adventage";
import Feature from "../components/Feature/Feature";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Reviews from "../components/Reviews/Reviews";
import SeoBlock from "../components/SeoBlock/SeoBlock";
import Footer from "../components/Footer/Footer";

import dataBestsellers from "../../public/resource/bestsellers/bestsellers.json";
import dataLatest from "../../public/resource/latest/latest.json";
import dataReviews from "../../public/resource/reviews/reviews.json";
import dataSeo from "../../public/resource/seo/seo.json";

function Main({urlAPI}) {
  const [bestsellersJSON] = useState(dataBestsellers);
  const [latestJSON] = useState(dataLatest);
  const [reviewsJSON] = useState(dataReviews);
  const [seoJSON] = useState(dataSeo);
  const bestsellersEndpoint = "bestsellers";
  const latestEndpoint = "latest";
  const reviewsEndpoint = "reviews";
  const seoEndpoint = "seohome";

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
          <Reviews reviewsJSON={reviewsJSON} urlAPI={urlAPI} endpoint={reviewsEndpoint} />
        )}
        {seoJSON.enable && (
          <SeoBlock seoJSON={seoJSON} urlAPI={urlAPI} endpoint={seoEndpoint} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Main;
