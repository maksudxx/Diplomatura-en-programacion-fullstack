import Button from "react-bootstrap/Button";
import styles from './ButtonProductos.module.css'
export const ButtonProductos = ({ text }) => {
  return (
    <>
      <Button variant="outline-warning" className={styles.boton}>{text}</Button>{" "}
    </>
  );
};
