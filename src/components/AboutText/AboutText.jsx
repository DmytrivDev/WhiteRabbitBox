import { useMediaQuery } from "@react-hook/media-query"
import clsx from "clsx";

import SeoVideo from "../SeoVideo/SeoVideo";
import AboutLoading from "./AboutLoading/AboutLoading";

import css from "./AboutText.module.scss";

function AboutText({ data, aboutObj }) {
  const { video, srcJSON } = data;
  const { video_src, video_img } = video;

  const isBreikpointPt = useMediaQuery("(max-width: 960px)");

  return (
    <section className={clsx(css.section__seo, css.section__about)}>
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
          {aboutObj ? (
            <div className={clsx(css.seo__text)} dangerouslySetInnerHTML={{ __html: aboutObj }}></div>
          ) : (
            <div className={clsx(css.seo__text)}>
              <AboutLoading />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutText;
