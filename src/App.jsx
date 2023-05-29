import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </>
  );
}

export default App;
