import React from "react";

import { rhythm, scale } from "../utils/typography";

class Presenter extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div css={{ marginBottom: rhythm(1) }}>
        <img
          css={{
            height: rhythm(4),
            width: rhythm(4),
            marginBottom: 0,
            borderRadius: `100%`,
            border: `${rhythm(1 / 4)} solid white`,
          }}
          src={
            `http://cfp.connect-js.com/${this.props.person.node.avatar_path}`
          }
        />
        <div css={{ fontWeight: "bold" }}>
          {this.props.person.node.full_public_name}
        </div>
        {this.props.person.node.events.map(event => {
          return <div css={{ ...scale(-1 / 5) }}>{event.title}</div>;
        })}
      </div>
    );
  }
}

export default Presenter;
