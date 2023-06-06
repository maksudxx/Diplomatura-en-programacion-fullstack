import img1 from "../../assets/imagenes-noticias/noticias-partido.png";
import img2 from "../../assets/imagenes-noticias/semillero-river.png";
import styles from './NoticiasPrincipales.module.css'
export const NoticiasPrincipales = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          Noticias Principales<span>VER TODAS LAS NOTICIAS</span>
        </p>
      </div>
      <div className={styles.noticiasContainer}>
        <div className={styles.noticiaCard}>
          <img src={img1} alt="venta-de-entradas" className={styles.imageNoticia}/>
          <h3 className={styles.noticiaTitle}>
            Venta de entradas - River vs. Fluminense {`"`}CONMEBOL Libertadores
            2023{`"`}
          </h3>
        </div>
        <div className={styles.separador}></div>
        <div className={styles.noticiaCard}>
          <img src={img2} alt="semillero-river" className={styles.imageNoticia}/>
          <h3 className={styles.noticiaTitle}>El semillero de River, presente en las finales europeas</h3>
        </div>
      </div>
    </div>
  );
};
