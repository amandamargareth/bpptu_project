import React, { Component } from "react";
import Fade from "react-reveal";


class Footer extends Component {
  render() {
    return (
    
    <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
              &nbsp;
              &nbsp;
              <a href="https://instagram.com/dkpp_jabar"><i className="fa fa-instagram"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;

              <a href="https://www.facebook.com/dkpp.jawabarat"><i className="fa fa-facebook"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://twitter.com/dkpp_jabar"><i className="fa fa-twitter"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://youtube.com/@DKPPJABAR"><i className="fa fa-youtube"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://dkpp.jabarprov.go.id/"><i className="fa fa-globe"></i></a>
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://dkpp@jabarprov.go.id"><i className="fa fa-envelope"></i></a>
             
              
              
                </ul>

              <ul className="copyright">
                <li>&copy; Copyright 2023</li>
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
