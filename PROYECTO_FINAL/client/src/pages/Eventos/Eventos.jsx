import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import styles from "./Eventos.module.css";
export const Eventos = () => {
  return (
    <>
      <Container fluid className={styles.container}>
        <div className={styles.formContainer}>
          <h4 className={styles.titleForm}>Cotiza tu evento!</h4>
          <div className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Nombre"
                className={styles.inputs}
              />
              <input
                type="text"
                placeholder="Apellido"
                className={styles.inputs}
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Email"
                className={styles.inputs}
              />
              <input
                type="text"
                placeholder="Teléfono"
                className={styles.inputs}
              />
            </div>
            <div className={styles.row}>
              <input
                type="date"
                placeholder="Fecha de evento"
                className={styles.inputs}
                id="fecha"
              />
              <label htmlFor="fecha"></label>

              <input
                type="text"
                placeholder="Hora de evento"
                className={styles.inputs}
              />
            </div>
            <div className={styles.row}>
              {" "}
              <input
                type="number"
                placeholder="Numero de personas"
                className={styles.inputs}
              />
              <select
                name=""
                id=""
                className={`${styles.inputs} ${styles.selectPaquete}`}
              >
                <option value="">Arma tu paquete</option>
              </select>
            </div>
          </div>
          <div className={styles.containerLastRow}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Comentarios"
            ></textarea>
            <Button variant="outline-warning" className={styles.sendButton}>
               Solicitud de presupuesto
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};
