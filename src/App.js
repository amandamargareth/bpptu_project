import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";
import Home from "./components/home";

function App() {
  return (<Router>
     
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/admin' element={<ProductList />} />
          </Routes>
        </Col>
      </Row>
  </Router>);
}

export default App;