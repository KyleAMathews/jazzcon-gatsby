import React from "react";
import "typeface-titillium-web";
import "typeface-didact-gothic";
import "../utils/typography";
import colors from "../utils/colors";
import "../fonts/chrysler.css";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div css={{ backgroundColor: colors.bondiBlue }}>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
