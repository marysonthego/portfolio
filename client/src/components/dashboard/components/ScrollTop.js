import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "components/dashboard/helpers/AssetHelpers";

export function ScrollTop() {
  return (
      <div id="kt_scrolltop" className="scrolltop">
        <span className="svg-icon">
          <SVG src={toAbsoluteUrl("media/Up-2.svg")}></SVG>
        </span>{" "}
      </div>
  );
}
