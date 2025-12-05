import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkPage } from "./pages/WorkPage";
import { ServiceDetail } from "./pages/ServiceDetail";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WorkDetailPage } from "./pages/WorkDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:id" element={<WorkDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}