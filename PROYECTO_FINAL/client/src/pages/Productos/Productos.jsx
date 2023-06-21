import Container from "react-bootstrap/Container";
import styles from "./Productos.module.css";
import menu from "../../utils/Menu";
import { CardMenu } from "../../components/CardMenu/CardMenu";
export const Productos = () => {
  return (
    <Container fluid className={styles.container}>
      <div className={styles.containerMenu}>
        <h1>Menu</h1>
        {menu.map((menu, index) => (
          <CardMenu
            key={index}
            nombre={menu.nombre}
            descripcion={menu.descripcion}
            precio={menu.precio}
            observacion={menu.observacion}
          />
        ))}
      </div>
    </Container>
  );
};
