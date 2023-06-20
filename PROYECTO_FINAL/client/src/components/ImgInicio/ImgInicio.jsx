import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import imgPizza from "../../assets/img/img-inicio/pizza.jpg";
import textoImg from '../../assets/img/img-inicio/grafico_amamos.svg'
import styles from './ImgInicio.module.css'

export const ImgInicio = () => {
  return (
    <>
        <Container fluid className={styles.containerImg}>
        <Row>
          <img src={imgPizza} alt="img-amamos-la-pizza" className={styles.imgPizza} />
          <img src={textoImg} alt="texto-amamos-la-pizza" className={`${styles.pictureAbove} ${styles.center}`}/>
        </Row>
      </Container>
    </>
  )
}
