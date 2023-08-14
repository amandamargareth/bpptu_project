import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
    
    <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
              <a href="https://instagram.com/dkpp_jabar"><i className="fa fa-instagram"></i></a>
              &nbsp;
              &nbsp;
              <a href="https://www.facebook.com/dkpp.jawabarat"><i className="fa fa-facebook"></i></a>
              &nbsp;
              &nbsp;
              <a href="https://twitter.com/dkpp_jabar"><i className="fa fa-twitter"></i></a>
              &nbsp;
              &nbsp;
              <a href="https://youtube.com/@DKPPJABAR"><i className="fa fa-youtube"></i></a>
              &nbsp;
              &nbsp;
              <a href="https://dkpp.jabarprov.go.id/"><i className="fa fa-globe"></i></a>
             
              
              
                </ul>

              <ul className="copyright">
                <li>&copy; Copyright 2023</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
