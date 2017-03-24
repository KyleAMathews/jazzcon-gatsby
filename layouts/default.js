import React from "react";

// Add our typefaces
import "typeface-titillium-web";
import "typeface-didact-gothic";
import "../fonts/chrysler.css";

import { rhythm } from "../utils/typography";
import colors from "../utils/colors";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div
        css={{
          background: colors.bondiBlue,
          padding: rhythm(1 / 4),
          paddingTop: 0,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
