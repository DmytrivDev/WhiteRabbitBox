import { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";

import SeoLoading from "./SeoLoading/SeoLoading";

import css from "./SeoBlock.module.scss";

function SeoBlock({ urlAPI, endpoint }) {
  const defaultSeoText = {
    col1: "",
    col2: "",
  };

  const [seoText, setSeoText] = useState(defaultSeoText);
  const [seoTextDefault, setSeoTextDefault] = useState(true);

  let { col1, col2 } = seoText;

  useEffect(() => {
    const fetchSeoText = async () => {
      try {
        const response = await axios.get(urlAPI + endpoint + "/");
        if (response.data) {
          setSeoText(response.data);
          setSeoTextDefault(false);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchSeoText();
  }, []);

  console.log(seoTextDefault)

  return (
    <section className={css.section__seo}>
      <div className="container">
        <div className={css.seo__content}>
          <div className={css.seo__video}>
            <div className="seo__videoinner videocont">
              <video
                poster="assets/img/content/product_2.jpg"
                className="cover"
              >
                <source src="assets/img/content/video.m4v" type="video/mp4" />
                <source src="assets/img/content/video.mp4" type="video/mp4" />
              </video>
              <a href="#" className={css.video__play}></a>
            </div>
          </div>
          {!seoTextDefault ? (
            <div className={clsx(css.seo__text, css.seoblock)}>
              {col1 && (
                <div
                  className={css.seo__part}
                  dangerouslySetInnerHTML={{ __html: col1 }}
                />
              )}
              {col2 && (
                <div
                  className={css.seo__part}
                  dangerouslySetInnerHTML={{ __html: col2 }}
                />
              )}
            </div>
          ) : (
            <div className={clsx(css.seo__text, css.seoblock)}>
              <SeoLoading />
              <SeoLoading />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SeoBlock;
