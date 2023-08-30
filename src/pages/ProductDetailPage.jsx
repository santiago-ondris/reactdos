import { useParams } from 'react-router-dom';
import productsData from '../JSON/products.json';
import ItemDetail from '../components/ItemDetail';

function ProductDetailPage() {
  const { id } = useParams();
  const productId = parseInt(id); //Parseo el id del url para que se compare como un numero y no como cadena de texto
  const product = productsData.find(product => product.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ProductDetailPage;
