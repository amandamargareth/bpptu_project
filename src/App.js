import * as React from "react";

import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import LoginForm from "./components/Login/LoginForm";
import PesananForm from "./components/Pesanan/PesananForm";
import Stock from "./components/dashboard/stocks.dashboard";
import Home from "./components/home";
import Contact from "./components/dashboard/contact";




function App() {
  return (<Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Pesanan/PesananForm" element={<PesananForm/>} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route exact path='/Login/LoginForm' element={<LoginForm />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/dashboard/contact" element={<Contact />} />
            
           
          </Routes>
  </Router>);
}

export default App;