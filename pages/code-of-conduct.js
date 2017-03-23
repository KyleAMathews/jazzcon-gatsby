import React from "react";
import { rhythm } from "../utils/typography";

class CodeOfConduct extends React.Component {
  render() {
    return (
      <div
        css={{
          background: `white`,
          padding: `${rhythm(3 / 4)} ${rhythm(1.5)}`,
          maxWidth: rhythm(30),
          margin: `0 auto`,
          textAlign: `left`,
        }}
      >
        <h1>Code Of Conduct</h1>
        <p>
          JazzCon.Tech is dedicated to providing an outstanding conference experience for all attendees, speakers, sponsors, volunteers and organizers (JazzCon.Tech participants) regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion, financial status, hair color (or hair amount), platform preference, or text editor of choice. We do not tolerate harassment of JazzCon.Tech participants in any form. Please treat your fellow JazzCon.Tech participants with respect, regardless of the context you’re interacting with them.
        </p>

        <p>
          Harassment is not appropriate for any conference venue. We expect all JazzCon.Tech participants to follow the Code of Conduct during the conference. This includes conference-related social events at off-site locations, and in related online communities and social media. Participants asked to stop any harassing behavior are expected to comply immediately. Conference participants violating this Code of Conduct may be expelled from the conference without a refund, and/or banned from future JazzCon.Tech events, at the discretion of JazzCon.Tech
        </p>

        <p>
          Examples of harassment include offensive comments, verbal threats or demands, sexualized images in public spaces, intimidation, stalking, harassing photography or recording, sustained disruption of sessions or events, and unwelcome physical contact or sexual attention. Speaker presentations fall under this category and should not use images or examples that would violate the code of conduct.
        </p>

        <p>
          JazzCon.Tech participants must remember that JazzCon.Tech organizers and volunteers are not trained conflict resolution specialists, nor are they security or law enforcement. JazzCon.Tech organizers and volunteers will immediately escalate issues around safety, violence, or similar situations to Cobb Galleria staff or law enforcement.
        </p>

        <p>
          For the protection of JazzCon.Tech participants, JazzCon.Tech will never put its organizers or volunteers in the position of trying to assess whether or not an incident merits escalation. If there is any doubt, we will escalate incidents to the appropriate agency immediately.
        </p>

        <p>Incident Resolution</p>

        <ul>
          <li>
            All JazzCon.Tech participants agree to treat each other with respect, regardless of whether you are in a session room or at  the Cobb Galleria facilities.
          </li>
          <li>
            Simple disagreements should be resolved between the individuals concerned.
          </li>
          <li>
            Harassment or more serious issues should be escalated to a JazzCon.Tech organizer or volunteer. That person will immediately contact a JazzCon.Tech Board member who has the responsibility to assist in resolution.
          </li>
          <li>
            JazzCon.Tech participants suffering outright assault or extreme harassment should contact the Cobb Galleria staff immediately, or a JazzCon.Tech organizer if they're nearby. That person will immediately escalate the issue to the Cobb Galleria staff or law enforcement as appropriate.
          </li>
        </ul>
      </div>
    );
  }
}

export default CodeOfConduct;
