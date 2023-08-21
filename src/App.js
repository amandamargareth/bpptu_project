import * as React from "react";

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import LoginForm from "./components/Login/LoginForm";
import PesananForm from "./components/Pesanan/PesananForm";
import Stock from "./components/dashboard/stocks.dashboard";
import Contact from "./components/dashboard/contact.dashboard";
import Footer from "./components/dashboard/footer.dashboard";

import Home from "./components/home";
import List from "./components/product/list.component";
import OrderList from "./components/admin/order.component";
import ListStock from "./components/admin/stock.admin";
import OrderAdmin from "./components/admin/order.admin"
import CreateProduct from "./components/product/create.component";
import EditForm from "./components/Pesanan/editform";
import "./App.css"






function App() {
  return (<Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/OrderForm" element={<PesananForm/>} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/product/list" element={<List />} />
            <Route path="/order/list" element={<OrderList />} />
            <Route path="/admin" element={<OrderAdmin />} />
            <Route path="/liststock" element={<ListStock />} />
            <Route path="/order/edit/:id" element={<EditForm />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route exact path='/login' element={<LoginForm />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/dashboard/contact.dashboard" element={<Contact />} />
            <Route path="/dashboard/footer.dashboard" element={<Footer />} />
            
            
            
           
          </Routes>
  </Router>);
}

export default App;