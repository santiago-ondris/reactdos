import ItemListContainer from '../components/ItemListContainer'
import productsData from '../JSON/products.json';

const Inicio = () => {
    return (
        <div>
            <ItemListContainer products={productsData}/>
        </div>
    )
}

export default Inicio;