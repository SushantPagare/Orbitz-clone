import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbars/Navbar";
import { Homepage } from "./components/Homepages/Homepage";
import { Footer } from "./components/Footers/Footer";
import { Flights } from "./components/Flights/Flights";
import { Product } from "./components/Product/Product";
import { Stays } from "./components/Stays/Stays";
import { Payment } from "./components/payment/payment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/stays" element={<Stays />}></Route>
        <Route path="/flights" element={<Flights />}></Route>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
