import { Route, Routes } from 'react-router-dom';
import './App.css';
import "animate.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
