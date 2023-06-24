import { useEffect, useRef } from 'react';
import Container from "react-bootstrap/Container";
import styles from "./Productos.module.css";
import menu from "../../utils/Menu";
import { CardMenu } from "../../components/CardMenu/CardMenu";
export const Productos = () => {
  const destinationRef = useRef(null);

  useEffect(() => {
    // Desplazamiento suave hacia la parte superior de la vista
    destinationRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Container fluid className={styles.container}  ref={destinationRef}>
      <div className={styles.carta}>
        <h1 className={styles.titulo}>Menu</h1>
        <div className={styles.containerMenu}>
          {menu.map((menu, index) => (
            <CardMenu
              key={index}
              nombre={menu.nombre}
              descripcion={menu.descripcion}
              precio={menu.precio}
              observacion={menu.observacion}
              categoria={menu.categoria}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
