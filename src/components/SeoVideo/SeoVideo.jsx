import { useState, useRef } from "react";
import clsx from "clsx";

import css from "./SeoVideo.module.scss";

function SeoVideo({ isAdventages, video_src, video_img, srcJSON }) {
  const videoSrc = srcJSON + video_src;
  const imgSrc = srcJSON + video_img;

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = (event) => {
    event.preventDefault();

    const video = event.target.nextElementSibling;

    vidRef.current.play();
    video.setAttribute("controls", true);
    setPlayVideo(true);
  };

  return (
    <div
      className={clsx(css.seo__videoinner, {
        [css.adventages__video]: isAdventages,
      })}
    >
      {!playVideo && (
        <button onClick={handlePlayVideo} className={css.video__play}></button>
      )}
      <video ref={vidRef} poster={imgSrc} className="cover">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default SeoVideo;
