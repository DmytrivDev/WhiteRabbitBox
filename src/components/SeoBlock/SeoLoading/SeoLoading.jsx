import { useMediaQuery } from "@react-hook/media-query";
import clsx from "clsx";

import css from "./SeoLoading.module.scss";

function SeoLoading() {
  const isBreikpointMb = useMediaQuery("(max-width: 760px)");

  return (
    <div className={clsx(css.seo__part, "loadingAnimation")}>
      <p>
        {isBreikpointMb && (
          <>
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
          </>
        )}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        {isBreikpointMb && (
          <>
            <span></span>
          </>
        )}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>
  );
}

export default SeoLoading;
