import listaProductos from "../../utils/ListaProductos";
import CardProductos from "../CardProductos/CardProductos";

import styles from "./GridProductos.module.css";
export const GridProductos = () => {
  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.productsTitle}>RECOMENDACIONES DE LA CASA</h1>
      <div>
        {listaProductos.map((product, index) => (
          <CardProductos
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
