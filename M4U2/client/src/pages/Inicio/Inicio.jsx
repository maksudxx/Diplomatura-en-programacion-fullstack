import { ButtonProductos } from "../../components/ButtonProductos/ButtonProductos";
import { GridProductos } from "../../components/GridProductos/GridProductos";
import { ImgInicio } from "../../components/ImgInicio/ImgInicio";

export const Inicio = () => {
  return (
    <>
      <ImgInicio />
      <GridProductos />
      <ButtonProductos text="VER MAS PRODUCTOS"/>
    </>
  );
};
