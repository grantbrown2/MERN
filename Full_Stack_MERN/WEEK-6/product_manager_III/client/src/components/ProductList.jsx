import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../App.css';

const ProductList = (props) => {
    const {removeFromDom, product, setProduct} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/product")
        .then((res)=> {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [setProduct])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/product/${id}`)
            .then((res) => {removeFromDom(id)})
            .catch(err => console.log(err))
    }

    return (
        <div className='container-2'>
            {
                product.map((product, idx) => {
                    return (
                        <div key={idx} className="product-container">
                            <Link to={`/product/${product._id}`}>
                                {product.title}
                            </Link>
                            <Link to={`/product/edit/${product._id}`}>
                                Edit
                            </Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>
                                Delete
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList