import PropTypes from 'prop-types'

const CardProductos = ({title, description, image}) => {
   
  return (
    <>
        <img src={image} alt="productos-recomendados" />
        <p>{title}</p>
        <p>{description}</p>
    </>
  )
}

CardProductos.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

CardProductos.defaultProps = {
    title: 'sin titulo',
    description: 'sin descripcion',
    image: "https://www.steaua-dunarii.ro/client/img/image-not-found.png"
}

export default CardProductos