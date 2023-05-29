import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

import Sobre from "./pages/sobre";
import Home from "./pages/Home";
import Contato from "./pages/contato";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  );
}

export default App;
