import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardNoticias } from '../Card-Noticias/CardNoticias';
import noticias from "../../utils/NoticiasUtil"
import styles from './Principal.module.css'
import { NoticiasPrincipales } from '../Noticias-principales/NoticiasPrincipales';
import { Partidos } from '../Card-Partidos/Partidos';

export const Principal = () => {

   
  return (
    <Container>
        <Row>
            <Col lg={2} md={4}>
                <p className={styles.titleContainer}>Noticias del club</p>
                <div>
                    {noticias.map((noticia, key)=>(
                        <CardNoticias key={key} titulo={noticia.titulo} contenido={noticia.contenido} imagen={noticia.imagen}/>
                    ))}
                </div>
            </Col>
            <Col lg={7} md={8}>
                <NoticiasPrincipales/>
            </Col>
            <Col lg={3} md={12}><Partidos/></Col>
        </Row>
        
    </Container>
  )
};
