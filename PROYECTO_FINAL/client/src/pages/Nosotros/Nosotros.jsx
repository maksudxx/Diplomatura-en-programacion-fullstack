import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "./Nosotros.module.css";
export const Nosotros = () => {
  return (
    <Container fluid className={styles.nosotrosContainer}>
      <div className={styles.info}>
       <div>
       <h1 className={styles.titulo}>Desde 2022</h1>
        <p className={styles.descripcion}>
          Negocio que empezo como un emprendimiento familiar y que termino
          siendo una de las franquicias mas grandes de la zona. trabajamos con
          productos 100% seleccionados ofreciendole la mejor experiencia al
          cliente tanto en atencion como en sabor.
        </p>
       </div>
       <div className={styles.formulario}>
        <h2 className={styles.tituloForm}>Trabaja con nosotros</h2>
        <label htmlFor="">Nombre: </label>
        <input type="text" name="nombre" placeholder="su nombre..." />
        <label htmlFor="">Email: </label>
        <input type="email" name="email" placeholder="email@ejemplo.com" />
        <label htmlFor="">Celular: </label>
        <input type="number" name="celular" placeholder="+9999999999" />
        <label htmlFor="">Mensaje:</label>
        <textarea
          name="mensaje"
          id=""
          cols="40"
          rows="2"
          placeholder="dejar su mensaje aqui..."
          className={styles.comments}
        ></textarea>
        <Button variant="warning" className={styles.buttonEnviar}>
          Enviar
        </Button>
      </div>
      </div>
      
    </Container>
  );
};
