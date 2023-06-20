import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inicio } from "./pages/Inicio/Inicio";
import { Nosotros } from "./pages/Nosotros";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
       <Route path="/nosotros" element={<Nosotros />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
