import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Suggestion from "./pages/Suggestion";
import Navbar from "./components/Navbar";  
import Order from "./pages/Order";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Common Navigation (will always show) */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/menu" element={<Menu />} />      
          <Route path="/about" element={<AboutUs />} />      
          <Route path="/suggestion" element={<Suggestion />} />    
          <Route path="/orders" element={<Order />} />  
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;