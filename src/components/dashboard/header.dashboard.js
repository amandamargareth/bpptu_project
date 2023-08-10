import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">BPPT UNGGAS JATIWANGI</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>SISTEM INFORMASI PEMBELIAN DOC/DOD BPPTU</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <Link to="/formpsn/pesan" className="button btn project-btn">
                  <i className="fa fa-shopping-cart"></i>Pesan
                </Link>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;


