import React from "react";
import presets from "glamor-media-query-presets";

import Section from "../components/section";
import Button from "../components/button";
import { rhythm, scale, options } from "../utils/typography";

// Sponsors
import automatticImg from "../assets/automattic.png";
import huiImg from "../assets/hui.png";
import witnolaImg from "../assets/witnola.png";

class Index extends React.Component {
  render() {
    console.log(this.props);
    const topImage = this.props.data.topImage.children[0].responsiveSizes;
    const bandImg = this.props.data.bandImg.children[0].responsiveSizes;
    const jazzImg = this.props.data.jazzImg.children[0].responsiveSizes;
    const mapImg = this.props.data.mapImg.children[0].responsiveSizes;
    return (
      <div css={{ padding: rhythm(1 / 4) }}>
        <img
          css={{ margin: 0, verticalAlign: `bottom` }}
          src={topImage.src}
          srcSet={topImage.srcSet}
          sizes="100vw"
        />
        <Section theme="gray">
          <h2>Music. Food. Code.</h2>
          <p css={{ ...scale(1 / 5), lineHeight: options.baseLineHeight }}>
            Join us in New Orleans for a 3 day event, March 22-24, on Web & JavaScript Development! All tickets include workshop day, and there will be 4 concurrent tracks. Workshops and sessions include:
          </p>
          <p css={{ ...scale(3 / 5), lineHeight: 1.25 }}>
            Angular, React, JavaScript, JS Frameworks, HTML5, CSS3, tools, techniques, and more!
          </p>
          <p css={{ ...scale(1 / 5), lineHeight: options.baseLineHeight }}>
            Brought to you by the organizers of another world-class conference, Connect.Tech, JazzCon.Tech will bring the energy and community spirit of our previous events to New Orleans for three days of learning and networking. Check out the speakers and presentations from our previous confs at the link above. We invite you to join us March 2017 for this unique experience!
          </p>
          <p css={{ ...scale(1 / 5), lineHeight: options.baseLineHeight }}>
            Regular price are available now, use code MFC2017 to get $50 off! Get the best possible price now before it goes up!
          </p>
          <Button>CLICK HERE TO REGISTER</Button>
        </Section>
        <Section
          theme="golden"
          css={{
            textAlign: `left`,
          }}
        >
          <img
            css={{
              verticalAlign: `bottom`,
              width: `100%`,
              [presets.Tablet]: {
                float: `left`,
                marginTop: rhythm(1 / 4),
                paddingRight: rhythm(2),
                width: `60%`,
              },
            }}
            src={bandImg.src}
            srcSet={bandImg.srcSet}
            sizes="(min-width: 960px) 600px, 60vw"
          />
          <div
            css={{
              [presets.Tablet]: {
                float: `right`,
                textAlign: `left`,
                width: `40%`,
              },
            }}
          >
            <h2 css={{ borderBottomColor: `#efefef` }}>Join the band!</h2>
            <p>CFP NOW CLOSED</p>
            <p>
              All tickets include access to a full day of workshops on March 22! Workshops include:
            </p>
            <ul>
              <li>Full Day Angular 2 workshop</li>
              <li>Redux workshop</li>
              <li>Advanced React workshop</li>
              <li>Design for Developer workshop</li>
              <li>Functional Web Dev with Elm workshop</li>
              <li>Building Alexa Apps with JavaScript workshop</li>
            </ul>
          </div>
        </Section>
        <Section theme="white" css={{ textAlign: `left` }}>
          <h2>REGISTRATION</h2>
          <p css={{ ...scale(2 / 5), lineHeight: options.baseLineHeight }}>
            Rate of $795 good until February 27, use code MFC2017 to get $50 off! Buy now!
          </p>
          <p css={{ ...scale(2 / 5), lineHeight: options.baseLineHeight }}>
            All tickets include access to a full day of workshops on March 22!
          </p>
          <h3>INDIVIDUAL</h3>
          <p>
            Ticket includes workshop day (workshop space is on a first-come basis), March 22 and main conference March 23-24.
          </p>

          <h3>GROUP</h3>
          <p>
            Ticket includes workshop day (workshop space is on a first-come basis), March 22 and main conference March 23-24.
          </p>

          <h3>two conference combo</h3>
          <p>
            Get a free ticket to Connect.Tech (September 20-22, Atlanta) when you buy a JazzCon.Tech ticket! (no other discounts on this ticket, must also buy conf hotel ticket during registration)
          </p>
        </Section>
        <Section theme="gray">
          <h2>Schedule</h2>
        </Section>
        <Section theme="golden">
          <h2 css={{ borderBottomColor: `#efefef` }}>Sessions & Workshops</h2>
          <br />
          <h3 css={{ borderBottomColor: `#efefef` }}>
            Workshops on Wednesday March 22 on first-come basis
          </h3>
        </Section>
        <Section theme="gray">
          <img
            css={{
              verticalAlign: `bottom`,
              width: `100%`,
              [presets.Tablet]: {
                float: `left`,
                marginTop: rhythm(1 / 4),
                paddingRight: rhythm(2),
                width: `60%`,
              },
            }}
            src={jazzImg.src}
            srcSet={jazzImg.srcSet}
            sizes="(min-width: 960px) 600px, 60vw"
          />
          <div
            css={{
              [presets.Tablet]: {
                float: `right`,
                textAlign: `left`,
                width: `40%`,
              },
            }}
          >
            <h2>Bring the band! </h2>
            <p>
              Bring your whole team for an offsite the day before, Tuesday, March 21! Contact us and we'll make the arrangements for a conference room, food, etc. Contact us at:
            </p>
            <p>
              <a href="mailto:hello@jazzcon.tech">hello@jazzcon.tech</a>
            </p>
          </div>
        </Section>
        <Section theme="golden">
          <h2 css={{ borderBottomColor: `#efefef` }}>Location</h2>
          <p>
            JazzCon.Tech will take place in the heart of historic New Orleans, within walking distance of the best food, music, and culture the city has to offer.
          </p>
          <p>
            We have a special rate at the conference hotel: the New Orleans Downtown Marriott at the Convention Center
          </p>
          <Button>
            CLICK HERE TO GET GREATLY REDUCED CONFERENCE-ONLY RATES!
          </Button>
          <img
            css={{
              marginBottom: 0,
              marginTop: rhythm(1),
              verticalAlign: `bottom`,
              width: `100%`,
            }}
            src={mapImg.src}
            srcSet={mapImg.srcSet}
            sizes="(min-width: 960px) 90vw, 60vw"
          />
        </Section>
        <Section>
          <h2>Sponsors</h2>
          <br />
          <img css={{ width: 458, maxWidth: `100%` }} src={automatticImg} />
          <img
            css={{ width: 458, maxWidth: `100%`, background: `white` }}
            src={huiImg}
          />
          <img css={{ width: 458, maxWidth: `100%` }} src={witnolaImg} />
        </Section>
        <Section theme="gray">
          <h2>Code Of Conduct</h2>
          <p>
            JazzCon.Tech is dedicated to providing an outstanding conference experience for all attendees, speakers, sponsors, volunteers and organizers (JazzCon.Tech participants) regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion, financial status, hair color (or hair amount), platform preference, or text editor of choice. We do not tolerate harassment of JazzCon.Tech participants in any form. Please treat your fellow JazzCon.Tech participants with respect, regardless of the context you’re interacting with them.
          </p>
          <Button to="/code-of-conduct/">SEE COMPLETE CODE OF CONDUCT</Button>
        </Section>
        <Section
          css={{
            color: `#ccc`,
          }}
        >
          <h4 css={{ borderBottom: `none`, paddingBottom: 0, color: `#ccc` }}>
            JazzCon.Tech
          </h4>
          <p>FACEBOOK ICON|TWITTER ICON</p>
          <p>
            <small>Copyright {new Date().getFullYear()} JazzCon.Tech</small>
          </p>
          CFP Link
        </Section>
      </div>
    );
  }
}

export default Index;

export const pageQuery = `
{
  topImage: file(relativePath: {eq: "jazzcon_logo_background3.png"}) {
    children {
      ...on ImageSharp {
        responsiveSizes(maxWidth: 1280) {
          src
          srcSet
        }
      }
    }
  }
  bandImg: file(relativePath: {eq: "location-placeholder.png"}) {
    children {
      ...on ImageSharp {
        responsiveSizes(maxWidth: 600) {
          src
          srcSet
        }
      }
    }
  }
  jazzImg: file(relativePath: {eq: "jazz.png"}) {
    children {
      ...on ImageSharp {
        responsiveSizes(maxWidth: 600) {
          src
          srcSet
        }
      }
    }
  }
  mapImg: file(relativePath: {eq: "map4.png"}) {
    children {
      ...on ImageSharp {
        responsiveSizes(maxWidth: 1000) {
          src
          srcSet
        }
      }
    }
  }
}

`;
