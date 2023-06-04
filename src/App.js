import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Crypto from "./component/crypto/Crypto";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import NavProvider from "./context/navbarContext/NavProvider";
import CryptoDisplay from "./component/cryptodisplay/CryptoDisplay";
import CryptoProvider from "./context/cryptoContext/CryptoProvider";

function App() {
  return (
    <CryptoProvider>
      <Router>
        <NavProvider>
          <Navbar />
        </NavProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/cryptos/:id" element={<CryptoDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </CryptoProvider>
  );
}

export default App;
