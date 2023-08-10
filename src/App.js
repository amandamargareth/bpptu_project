import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";
import Header from "./components/dashboard/header.dashboard";
import Stock from "./components/dashboard/stocks.dashboard";

function App() {
  return (<Router>
     <nav id="nav-wrap">
     <Container>
          <ul id="nav" className="nav">
            <li className="current">
              <Link to={"/"} className="navbar-brand text-white">
                Home
             </Link>
            </li>
            <li className="current">
              <a className="navbar-brand text-white" href="#stock">
                Stock
              </a>

            </li>
            <li className="current">
              <Link to={"/"} className="navbar-brand text-white">
                Waiting List
             </Link>
            </li>
            <li className="current">
              <Link to={"/admin"} className="navbar-brand text-white">
                Admin
             </Link>
            </li>
          </ul>
      </Container>
      </nav>
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/admin' element={<ProductList />} />
            <Route exact path='/' element={<Header />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
          </Routes>
        </Col>
      </Row>
  </Router>);
}

export default App;