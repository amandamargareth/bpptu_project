import React from "react";
import { Container } from "react-bootstrap";
import Stock from "./dashboard/stocks.dashboard";
import Navbar from "./navbar";
import Header from "./dashboard/header.dashboard";

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
              <Container>
                <Header />
              </Container>
            </section>
            <section className="stock">
              <Container>
                <Stock />
              </Container>
            </section>
          </main>
        </>
      );
    }
  }
  
  export default Home;