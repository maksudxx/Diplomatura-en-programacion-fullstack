import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/monumental-nuevo-slider.jpg";
import img2 from "../../assets/escudo.jpg";
import img3 from "../../assets/equipo-river.webp";
import styles from "./Carousel.module.css"

export const CarouselComponent = () => {
  return (
    <Carousel className={styles.carouselContainer}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={img1} alt="estadio-monumental" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={img2} alt="122-anios-river" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="primer-equipo-river-plate" />
      </Carousel.Item>
    </Carousel>
  );
};
