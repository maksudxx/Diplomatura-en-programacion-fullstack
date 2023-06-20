import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import styles from "./CardProductos.module.css";
const CardProductos = ({ title, description, image }) => {
  return (
    <>
      <Card className={styles.containerCard}>
        <Card.Img variant="top" src={image} />
        <Card.Body className={styles.textCard}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

CardProductos.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

CardProductos.defaultProps = {
  title: "sin titulo",
  description: "sin descripcion",
  image: "https://www.steaua-dunarii.ro/client/img/image-not-found.png",
};

export default CardProductos;
