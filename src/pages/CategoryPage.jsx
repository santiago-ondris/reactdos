import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import productsData from '../JSON/products.json';

const CategoryPage = () => {
  const { category } = useParams();

  const filteredProducts = productsData.filter(product => product.category === category);

  return (
    <div>
      <h2 className="text-center mb-4">{category}</h2>
      <ItemListContainer products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;