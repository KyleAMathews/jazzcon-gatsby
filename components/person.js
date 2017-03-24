import React from "react";
import Popover from "react-popover";

import { rhythm, scale } from "../utils/typography";

class PopoverBody extends React.Component {
  render() {
    return <div>Yo boys</div>;
  }
}

class Person extends React.Component {
  render() {
    console.log(this.props);
    const { person } = this.props;
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
          src={`http://cfp.connect-js.com/${person.avatar_path}`}
        />
        <div css={{ margin: 0, fontWeight: `bold` }}>
          {person.full_public_name}
        </div>
        {person.events.map(event => {
          return (
            <Popover isOpen={true} body={<PopoverBody />}>
              <div css={{ ...scale(-1 / 5) }}>{event.title}</div>
            </Popover>
          );
        })}
      </div>
    );
  }
}

export default Person;
