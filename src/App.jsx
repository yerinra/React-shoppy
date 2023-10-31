import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/new" element={<NewProduct />}></Route>
        <Route path="/producs/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
