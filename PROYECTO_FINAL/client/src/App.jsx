import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inicio } from "./pages/Inicio/Inicio";
import { Nosotros } from "./pages/Nosotros/Nosotros";
import { Productos } from "./pages/Productos/Productos";
import { Eventos } from "./pages/Eventos/Eventos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
