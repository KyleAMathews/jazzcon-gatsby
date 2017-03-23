import Typography from "typography";
import {
  TABLET_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
} from "typography-breakpoint-constants";

import colors from "./colors";

const options = {
  baseFontSize: `20px`,
  baseLineHeight: 1.35,
  headerColor: `hsla(0,0%,0%,0.8)`,
  bodyColor: `hsla(0,0%,0%,0.7)`,
  scaleRatio: 3,
  headerFontFamily: [`Chrysler`, `sans-serif`],
  bodyFontFamily: [`Didact Gothic`, `sans-serif`],
  overrideStyles: ({ scale, rhythm }) => ({
    body: {
      textAlign: `center`,
    },
    h2: {
      ...scale(1),
    },
    "h1,h2,h3,h4,h5,h6": {
      display: `inline-block`,
      lineHeight: 1.1,
      borderBottom: `${rhythm(1 / 4)} solid ${colors.kournikova}`,
      paddingBottom: rhythm(1 / 8),
    },
    a: {
      color: colors.cornflowBlue,
    },
    "section div *:last-child": {
      marginBottom: 0,
    },
    [TABLET_MEDIA_QUERY]: {
      // Make baseFontSize on tablets 18px.
      html: {
        fontSize: `${18 / 16 * 100}%`,
      },
    },
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 15px.
      html: {
        fontSize: `${15 / 16 * 100}%`,
      },
    },
  }),
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

module.exports = typography;
