import React from "react";
import { Container } from "react-bootstrap";
import Stock from "./dashboard/stocks.dashboard";
import Navbar from "./navbar";
import Header from "./dashboard/header.dashboard";
import Contact from "./dashboard/contact.dashboard";
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
            <section className="stock">
                <Stock />
            </section>
            <section className="contact">         
                <Contact />
            </section>
            <section className="footer">
                <Footer />
            </section>
      
           
          </main>
        </>
      );
    }
  }
  
  export default Home;