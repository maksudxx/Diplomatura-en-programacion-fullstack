import Container from "react-bootstrap/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <Container fluid className={styles.footerContainer}>
      <div className={styles.contacto}>
        <i className={`${"bi bi-envelope"} ${styles.mail}`}></i>
        <span>INFO@HOMESLICEPIZZA.COM</span>
      </div>
      <div className={styles.logoFooter}>
      <img
            src="https://static.wixstatic.com/media/94dfda_44df25021a40444f9ecd9f360dca28ca~mv2.png/v1/fill/w_164,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/homeslice%20png.png"
            alt="Logo-pizzeria"
            className={styles.imgFooter}
          />
      </div>
      <div className={styles.redesSociales}>
      <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-instagram"></i>
      </div>
    </Container>
  );
};
