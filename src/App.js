import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/about" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
