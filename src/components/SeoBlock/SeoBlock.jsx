import { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "@react-hook/media-query";
import clsx from "clsx";

import SeoLoading from "./SeoLoading/SeoLoading";
import SeoVideo from "../SeoVideo/SeoVideo";

import css from "./SeoBlock.module.scss";

function SeoBlock({ seoJSON, urlAPI, endpoint }) {
  const { video, srcJSON } = seoJSON;
  const { video_src, video_img } = video;

  const defaultSeoText = {
    col1: "",
    col2: "",
  };

  const isBreikpointPt = useMediaQuery("(max-width: 960px)");
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

  return (
    <section className={css.section__seo}>
      <div className="container">
        <div className={css.seo__content}>
          {video_src && video_img && isBreikpointPt && (
            <div className={css.seo__video}>
              <SeoVideo
                isAdventages={false}
                video_src={video_src}
                video_img={video_img}
                srcJSON={srcJSON}
              />
            </div>
          )}
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
