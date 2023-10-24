import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import NavProvider from "./context/navbarContext/NavProvider";
import CryptoProvider from "./context/cryptoContext/CryptoProvider";
import AnimateRoutes from "./component/animateRoute/AnimateRoutes";

function App() {
  return (
    <Router>
      <CryptoProvider>
        <NavProvider>
          <Navbar />
        </NavProvider>

        <AnimateRoutes />

        <Footer />
      </CryptoProvider>
    </Router>
  );
}

export default App;
