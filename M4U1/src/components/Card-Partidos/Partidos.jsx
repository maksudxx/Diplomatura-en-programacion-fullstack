import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Partidos.module.css";
export const Partidos = () => {
  return (
    <Container>
      <Row className={styles.containerTitulos}>
        <p className={styles.titulo}>Partidos</p>
        <p className={`${styles.titulo} ${styles.rojo}`}>Ver calendario</p>
      </Row>
      <Row className={styles.partidosContainer}>
        <div className={styles.partido}>
          <p className={styles.tituloPartido}>
            <strong>Torneo LPF 2023</strong> - Dom. 14/05/23 - 21.30
          </p>
          <div className={styles.filaEquipos}>
            <img
              src="https://www.cariverplate.com.ar/imagenes/equipos/2021-10/61-ojdoa5cb_400x400.jpg"
              alt="Talleres"
            />
            <img
              src="https://www.cariverplate.com.ar/images/escudo-river.png?cache=a57"
              alt="River"
            />
            <div className={styles.partidoEquipos}>
              <span>Talleres (Córdoba) 2 VS</span> <br />
              <span>
                <strong>River Plate 1</strong>
              </span>
            </div>
          </div>
          <br />
          <p className={styles.detallePartido}>VER DETALLES DE PARTIDO</p>
        </div>
        <div className={styles.separador}></div>

        <div className={styles.partido}>
          <p className={styles.tituloPartido}>
            <strong>Torneo LPF 2023</strong> - Dom. 21/05/23 - 20.30
          </p>
          <div className={styles.filaEquipos}>
            <img
              src="https://www.cariverplate.com.ar/images/escudo-river.png?cache=a57"
              alt="River"
            />
            <img
              src="https://www.cariverplate.com.ar/imagenes/equipos/2021-02/115-escudo-platense.png"
              alt="Platense"
            />
            <div className={styles.partidoEquipos}>
              <span>
                <strong>River Plate 2</strong> VS
              </span>{" "}
              <br />
              <span>Platense 1</span>
            </div>
          </div>
          <br />
          <p className={styles.detallePartido}>VER DETALLES DE PARTIDO</p>
        </div>

        <div className={styles.separador}></div>

        <div className={styles.partido}>
          <p className={styles.tituloPartido}>
            <strong>CONMEBOL Libertadores</strong> - Jue. 25/05/23 - 21
          </p>
          <div className={styles.filaEquipos}>
            <img
              src="https://www.cariverplate.com.ar/imagenes/equipos/2017-04/75-escudo_club_sporting_cristal.png"
              alt="Cristal"
            />
            <img
              src="https://www.cariverplate.com.ar/images/escudo-river.png?cache=a57"
              alt="River"
            />
            <div className={styles.partidoEquipos}>
              <span>Sporting Cristal 1 VS</span> <br />
              <span>
                <strong>River Plate 1</strong>
              </span>
            </div>
          </div>
          <br />
          <p className={styles.detallePartido}>VER DETALLES DE PARTIDO</p>
        </div>
      </Row>
    </Container>
  );
};
