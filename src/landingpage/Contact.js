import React, { useRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';
import { Container } from "react-bootstrap";

function Contact (){
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p0jvmjq', 'template_kswwsqm', form.current, 'TKXCdCht69vR_Q5_i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
      <>
      <section className="contact" id="contact">
        <Container>
      <Slide left duration={1300}>
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Hubungi Kami</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead"></p>
            </div>
          </div>
        </Fade>
        </Slide>

                
                <form ref={form} onSubmit={sendEmail} name="contactForm">
                    <fieldset>
                    <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"/>
                  
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
                      name="contactEmail"/>
                      </div>
                    <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"/>
                      </div>
                      <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="40"
                      rows="12"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                    </div>
                    <div>
                    <button className="submit">Submit</button>
                    
                  </div>
                  </fieldset>
              </form>
              
    </Container>
      </section>
      </>
      
    );
  }

export default Contact;