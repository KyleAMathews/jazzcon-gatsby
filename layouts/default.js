import React from "react";
import "typeface-titillium-web";
import "typeface-didact-gothic";
import "../utils/typography";
import "../fonts/chrysler.css";

class DefaultLayout extends React.Component {
  render() {
    return (
      <div css={{ backgroundColor: `#0093ba` }}>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
