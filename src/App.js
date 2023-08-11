import * as React from "react";

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import LoginForm from "./components/Login/LoginForm";
import PesananForm from "./components/Pesanan/PesananForm";
import Stock from "./components/dashboard/stocks.dashboard";
import Home from "./components/home"
import List from "./components/product/list.component";
import OrderList from "./components/Pesanan/order.component";
import CreateProduct from "./components/product/create.component";




function App() {
  return (<Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Pesanan/PesananForm" element={<PesananForm/>} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/product/list" element={<List />} />
            <Route path="/order/list" element={<OrderList />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route exact path='/Login/LoginForm' element={<LoginForm />} />
            <Route path="/stock" element={<Stock />} />
            
           
          </Routes>
  </Router>);
}

export default App;