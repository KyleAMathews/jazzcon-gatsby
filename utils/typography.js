import Typography from "typography";
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from "typography-breakpoint-constants";

import colors from "./colors";

const options = {
  baseFontSize: `24px`,
  baseLineHeight: `1.45`,
  headerFontFamily: [`Chrysler`],
  bodyFontFamily: [`Didact Gothic`],
  scaleRatio: 3.5,
  overrideStyles: ({ rhythm }) => {
    return {
      body: {
        textAlign: `center`,
      },
      "h1,h2,h3": {
        display: `inline-block`,
        paddingBottom: rhythm(1 / 8),
        borderBottom: `${rhythm(1 / 4)} solid ${colors.kournikova}`,
      },
    };
  },
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

module.exports = typography;
