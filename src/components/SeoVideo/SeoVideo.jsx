import clsx from "clsx";

import css from "./SeoVideo.module.scss";

function SeoVideo(isAdventages) {
  return (
    <div className={clsx(css.seo__videoinner, {
      [css.adventages__video]: isAdventages
    })}>
      <video poster="/src/assets/img/content/product_2.jpg" className="cover">
        <source src="/src/assets/img/content/video.m4v" type="video/mp4" />
        <source src="/src/assets/img/content/video.mp4" type="video/mp4" />
      </video>
      <a href="#" className={css.video__play}></a>
    </div>
  );
}

export default SeoVideo;
