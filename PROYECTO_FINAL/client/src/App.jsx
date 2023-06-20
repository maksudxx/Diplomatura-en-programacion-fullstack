import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inicio } from "./pages/Inicio/Inicio";
// import { Nosotros } from "./pages/Nosotros";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Footer/>
      {/* <Nosotros/> */}
    </>
  );
}

export default App;
