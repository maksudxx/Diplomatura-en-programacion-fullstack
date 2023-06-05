import Card from "react-bootstrap/Card";
import styles from "./CardNoticias.module.css";
export const CardNoticias = ({ titulo, contenido, imagen }) => {
  return (
    <Card className={styles.cardContainer}>
      <Card.Title className={styles.titleCard}>{titulo}</Card.Title>
      <Card.Img variant="top" src={imagen} className={styles.imgCard}/>
      <Card.Body className={styles.contentCard}>
        <Card.Text>{contenido}</Card.Text>
      </Card.Body>
      <div className={styles.separador}></div>
    </Card>
  );
};
