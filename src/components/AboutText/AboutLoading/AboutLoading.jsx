import { useMediaQuery } from "@react-hook/media-query";
import clsx from "clsx";

import css from "./AboutLoading.module.scss";

function AboutLoading() {
  const isBreikpointMb = useMediaQuery("(max-width: 760px)");

  return (
    <div className={clsx(css.about__loafing, "loadingAnimation")}>
      <p>
        {isBreikpointMb && (
          <>
            <span></span>
          </>
        )}
        <span></span>
      </p>
      <p>
        {isBreikpointMb && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        {isBreikpointMb && (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
        <span></span>
        <span></span>
      </p>
      <p>
        <span></span>
      </p>
      <p>
      {isBreikpointMb && (
          <>
            <span></span>
          </>
        )}
        <span></span>
      </p>
    </div>
  );
}

export default AboutLoading;
