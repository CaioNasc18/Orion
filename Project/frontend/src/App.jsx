import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import NIS2 from "./pages/NIS2";
import Sectors from "./pages/sectors";
import Methodology from "./pages/methodology";
import News from "./pages/news";
import Contact from "./pages/contact";
import ClientArea from "./pages/clientArea";
import Login from "./pages/login";
import AdminDashboard from "./pages/adminDashboard";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/NIS2" element={<NIS2 />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clientArea" element={<ClientArea />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;