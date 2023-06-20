import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Inicio } from "./pages/Inicio/Inicio";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Footer/>
    </>
  );
}

export default App;
