import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import UndermaintenancePage from "./pages/UndermaintenancePage";
import AboutUsPage from "./pages/AboutUsPage";
import SerciceProductPage from "./pages/ServiceProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<UndermaintenancePage />} /> */}
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/serviceproducts" element={<SerciceProductPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
