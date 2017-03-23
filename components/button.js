import React from "react";
import Link from "gatsby-link";
import presets from "glamor-media-query-presets";

import { rhythm } from "../utils/typography";

class Button extends React.Component {
  render() {
    const button = (
      <button
        css={{
          display: `inline-block`,
          border: `1px solid transparent`,
          fontSize: `16px`,
          fontWeight: `bold`,
          textTransform: `uppercase`,
          borderRadius: `2px`,
          transition: `all .2s`,
          backgroundColor: `#0093cf`,
          color: `#fff`,
          padding: `${rhythm(1 / 3)} ${rhythm(1)}`,
          touchAction: `manipulation`,
          outline: 0,
          lineHeight: 1.3,
          cursor: `pointer`,
          textAlign: `center`,
          verticalAlign: `middle`,
          whiteSpace: `inherit`,
          ":hover, :focus": {
            backgroundColor: `#2a3940`,
          },
          ":active": {
            boxShadow: `inset 0 3px 5px rgba(255,255,255,.125)`,
          },
          ["@media (min-width: 600px)"]: {
            whiteSpace: `nowrap`,
          },
        }}
      >
        {this.props.children}
      </button>
    );

    if (this.props.to) {
      return <Link to={this.props.to}>{button}</Link>;
    } else {
      return button;
    }
  }
}

export default Button;