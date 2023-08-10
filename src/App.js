import * as React from "react";

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";
import Stock from "./components/dashboard/stocks.dashboard";
import Home from "./components/home"

function App() {
  return (<Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/admin' element={<ProductList />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
  </Router>);
}

export default App;