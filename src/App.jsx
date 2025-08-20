import './App.css'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import AllProducts from './components/AllProducts';
import Collection from './pages/Collection';

function App() {
  return (
    <CartProvider>
      <Router>
        <Announcement />
        <Header />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/about" element={<About />} />
          <Route path="pages/contact" element={<Contact />} />
           <Route path="/collection/:category" element={<Collection />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
