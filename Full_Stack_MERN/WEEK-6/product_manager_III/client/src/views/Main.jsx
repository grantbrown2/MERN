import React, {useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {

    const [product, setProduct] = useState([]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <br />
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main;