import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../home/Home";
import Crypto from "../crypto/Crypto";
import CryptoDisplay from "../cryptodisplay/CryptoDisplay";
import { AnimatePresence } from "framer-motion";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/cryptos/:id" element={<CryptoDisplay />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
