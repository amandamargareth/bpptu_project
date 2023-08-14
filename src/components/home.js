import React from "react";
import { Container } from "react-bootstrap";
import Stock from "./dashboard/stocks.dashboard";
import Navbar from "./navbar";
import Header from "./dashboard/header.dashboard";
import Contact from "./dashboard/contact";
import Footer from "./dashboard/footer.dashboard";




class Home extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    render() {
      return (
        <>
        <Navbar />
          <main ref="main">
            <section className="header">
                <Header />
            </section>
            <hr />
            <section className="stock">
              <Container>
                <Stock />
              </Container>
            </section>
            <section className="contact">
              <Container>
                <Contact />
              </Container>
            </section>
            <section className="footer">
              <Container>
                <Footer />
              </Container>
            </section>
      
           
          </main>
        </>
      );
    }
  }
  
  export default Home;