import React from "react";
import DocumentTitle from "react-document-title";

import { TypographyStyle } from "react-typography";
// import typography from "./utils/typography";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require("!raw-loader!./public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

module.exports = React.createClass({
  render() {
    const title = DocumentTitle.rewind();
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>JazzCon</title>
          {css}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  },
});
