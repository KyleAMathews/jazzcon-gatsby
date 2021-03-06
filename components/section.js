import React from "react";

import { rhythm } from "../utils/typography";
import colors from "../utils/colors";

const sectionThemes = {
  golden: {
    background: colors.kournikova,
    "& h2, & h3": {
      borderBottomColor: colors.whiteSmoke,
    },
  },
  white: {
    background: colors.white,
  },
  gray: {
    background: colors.whiteSmoke,
  },
};

class Section extends React.Component {
  render() {
    const theme = this.props.theme;
    const props = { ...this.props };
    delete props.theme;
    return (
      <section
        css={{ ...sectionThemes[this.props.theme], overflow: `hidden` }}
        {...props}
      >
        <div
          css={{
            maxWidth: `1000px`,
            margin: `0 auto`,
            padding: rhythm(1),
            paddingTop: rhythm(3),
            paddingBottom: rhythm(3),
          }}
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
