import React, { useRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';
import { Container } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h55xidl', 'template_b14q5gc', form.current, 'NNQKLwBbAIMKZYNiV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
      <>
      <section id="contact">
        <Container>
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                Hubungi Kami
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead"></p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
            <form ref={form} onSubmit={sendEmail} name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Nama <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subjek</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Pesan <span className="required">*</span>
                    </label>
                    <textarea
                      cols="350"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="fa fa-map-marker">Latest Tweets</h4>
                <ul id="twitter">
                <li>
                <a href="https://goo.gl/maps/fZgCqqbWj9p6KRnF6" className="button btn project-btn">
                  <i className="fa fa-map-marker"> Jl. Kawaluyaan Indah Raya No.6 Bandung. </i>
                  </a>
                  </li>
                    
                  <li>
                  <a href="https://goo.gl/maps/fZgCqqbWj9p6KRnF6" className="button btn project-btn">
                  <i className="fa fa-phone"> 022-87327711 </i>
                  </a>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
        </Container>
      </section>
      </>
      
    );
  }


export default Contact;
