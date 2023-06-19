import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <Navbar expand="lg" className="p-0">
      <Container fluid className={styles.containerNavbar}>
        <div className={styles.containerLogoMenu}>
        <Navbar.Brand href="/">
          <img
            src="https://static.wixstatic.com/media/94dfda_44df25021a40444f9ecd9f360dca28ca~mv2.png/v1/fill/w_164,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/homeslice%20png.png"
            alt="logo-pizzeria"
            className={styles.logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.menuResponsive}
        />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`${"me-auto my-2 my-lg-0"} ${styles.menu}`}>
            <Nav.Link href="#action1" className={styles.option}>
              INICIO
            </Nav.Link>
            <Nav.Link href="#action2" className={styles.option}>
              NOSOTROS
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.option}>
              PRODUCTOS
            </Nav.Link>
            <Nav.Link href="#action2" className={styles.option}>
              PIDE ONLINE
            </Nav.Link>
            <Nav.Link href="#" className={styles.option}>
              RESERVA ONLINE
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.option}>
              EVENTOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
