import { ButtonProductos } from "../../components/ButtonProductos/ButtonProductos";
import { GridProductos } from "../../components/GridProductos/GridProductos";
import { ImgInicio } from "../../components/ImgInicio/ImgInicio";
import styles from './Inicio.module.css'
export const Inicio = () => {
  return (
    <div className={styles.container}>
      <ImgInicio />
      <GridProductos />
      <ButtonProductos text="VER MAS PRODUCTOS"/>
    </div>
  );
};
