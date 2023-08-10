import React, { Component } from "react";
import Slide from "react-reveal";

class About extends Component {
  render() {

    return (
      <section id="stock">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Persediaan</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <p>DOC Ayam Sentul : 2000 Ekor</p>
                <p>DOD Itik Rambon : 700 Ekor</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default About;
