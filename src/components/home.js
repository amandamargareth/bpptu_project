import React from "react";
import Stock from "../landingpage/Stock";
import NavBar from "../landingpage/NavBar";
import Banner from "../landingpage/Banner";
import Contact from "../landingpage/Contact";
import Footer from "../landingpage/Footer";
import "../App.css"




class Home extends React.Component {
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.main.scrollTop = 0;
    }
    render() {
      return (
        <>
        <NavBar />
          <main ref="main">
            <section className="header">
                <Banner />
            </section>
            <section className="stock">
                <Stock />
            </section>
            {/* <section className="contact">         
                <Contact />
            </section> */}
            <section className="footer">
                <Footer />
            </section>
      
           
          </main>
        </>
      );
    }
  }
  
  export default Home;