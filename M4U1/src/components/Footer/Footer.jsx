import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.separador}></div>
      <Container>
        <Row>
          <Col lg={6} md={3} className={styles.responsiveFooter}>
            <img
              src="https://www.cariverplate.com.ar/images/logo-river-foot.png?cache=a57"
              alt="Escudo"
            />
          </Col>
          <Col lg={6} md={9}>
            <ul className={styles.containerIcons}>
              <li className={styles.estilosIcons}>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className={styles.separador}></div>
    </div>
  );
};
