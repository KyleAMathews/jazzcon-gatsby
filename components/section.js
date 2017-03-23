import React from "react";

import { rhythm } from "../utils/typography";

const sectionThemes = {
  gray: {
    backgroundColor: `#efefef`,
  },
  white: {
    backgroundColor: `#fff`,
  },
  golden: {
    backgroundColor: `#fac552`,
  },
};

class Section extends React.Component {
  render() {
    const theme = this.props.theme;
    const props = { ...this.props };
    delete props.theme;
    return (
      <section
        css={{
          ...sectionThemes[theme],
          overflow: `hidden`,
          paddingTop: rhythm(3),
          paddingBottom: rhythm(3),
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
        {...props}
      >
        <div
          css={{
            maxWidth: rhythm(32),
            margin: `0 auto`,
          }}
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
