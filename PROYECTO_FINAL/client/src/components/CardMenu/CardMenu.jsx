import styles from "./CardMenu.module.css";
import PropTypes from "prop-types";
export const CardMenu = ({ nombre, descripcion, precio, observacion }) => {
  const cat =
    observacion != "" ? (
      observacion == "Vegetariano" ? (
        <p className={styles.vegetarian}>VG</p>
      ) : (
        <p className={styles.picante}>PC</p>
      )
    ) : null;
  return (
    <>
      <div className={styles.card}>
        <p className={styles.title}>{nombre}</p>
        <p>{descripcion}</p>
        <div className={styles.containerCard}>
          <p>${precio}</p>
          <p>{cat}</p>
        </div>
      </div>
    </>
  );
};

CardMenu.PropTypes = {
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  precio: PropTypes.number,
  observacion: PropTypes.string,
};

CardMenu.defaultProps = {
  nombre: "sin nombre",
  descripcion: "sin descripcion",
  precio: 0,
  observacion: "error",
};
