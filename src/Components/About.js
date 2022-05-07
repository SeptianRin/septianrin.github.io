import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;    
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Septian Rinaldi R Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="twelve columns">
                  <footer>
                    <div className="row">
                      <Fade bottom>
                      <h2>Social Media</h2>
                        <div className="twelve columns">
                          <ul className="social-links">{networks}</ul>
                        </div>
                      </Fade>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
