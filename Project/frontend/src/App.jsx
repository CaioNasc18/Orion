import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import NIS2 from "./pages/NIS2";
import Sectors from "./pages/sectors";
import Methodology from "./pages/methodology";
import News from "./pages/news";
import Contact from "./pages/contact";
import ClientArea from "./pages/clientArea";
//import Login from "./pages/login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/nis2" element={<NIS2 />} />
        <Route path="/setores" element={<Sectors />} />
        <Route path="/metodologia" element={<Methodology />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/area-cliente" element={<ClientArea />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;