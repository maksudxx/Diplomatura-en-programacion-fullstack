import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className={styles.navbarContainer}>
        <Navbar.Brand href="#" className={styles.logo}>
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_del_C_A_River_Plate.svg/826px-Escudo_del_C_A_River_Plate.svg.png"
            alt="escudo-river" width={50}
          />{" "}
          <span>RIVER PLATE</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menuNavbar" />
        <Navbar.Collapse id="menuNavbar">
          <Nav className={`me-auto my-2 my-lg-0 ${styles.optionMenu}`}>
            <Nav.Link href="#action1">FUTBOL</Nav.Link>
            <Nav.Link href="#action2">SOCIOS</Nav.Link>
            <Nav.Link href="#">ENTRADAS</Nav.Link>
            <Nav.Link href="#">RIVER ID</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
