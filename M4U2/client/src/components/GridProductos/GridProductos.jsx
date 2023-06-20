import listaProductos from '../../utils/ListaProductos'
import CardProductos from '../CardProductos/CardProductos'

export const GridProductos = () => {
 
  return (
    <>
      {listaProductos.map((product, index)=>(
        <CardProductos key={index} title={product.title} description={product.description} image={product.image}/>
      ))}
    </>
  )
}
