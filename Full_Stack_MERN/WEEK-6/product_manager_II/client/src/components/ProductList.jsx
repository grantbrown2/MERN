import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../App.css';

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(()=> {
        axios.get("http://localhost:8000/product")
        .then((res)=> {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])

    return (
        <div className='container-2'>
            {
                product.map((product, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/product/${product._id}`}>
                                {product.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList