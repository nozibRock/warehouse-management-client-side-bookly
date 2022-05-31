import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import RequireAuth from "./components/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/products"
          element={
            <RequireAuth>
              <AllProducts />
            </RequireAuth>
          }
        />

        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetail />
            </RequireAuth>
          }
        />

        <Route path="/addBook"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About></About>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
