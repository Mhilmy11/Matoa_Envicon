import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import UndermaintenancePage from "./pages/UndermaintenancePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServiceProductPage from "./pages/ServiceProductPage";
import ArticlePage from "./pages/ArticlePage";
import DetailServicePage from "./pages/DetailServicePage";
import DetailArticlePage from "./pages/DetailArticlePage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<UndermaintenancePage />} /> */}
          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/serviceproducts" element={<ServiceProductPage />} />
          <Route
            path="/serviceproducts/detail-service"
            element={<DetailServicePage />}
          />

          <Route path="/article" element={<ArticlePage />} />
          <Route
            path="/article/detail-article"
            element={<DetailArticlePage />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
