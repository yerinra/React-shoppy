import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route index element={<Main />}></Route>
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route
              path="/products/new"
              element={
                <ProtectedRoute requireAdmin>
                  <NewProduct />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
