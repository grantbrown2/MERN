import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/product/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='container-3'>
            <span>Title: {product.title}</span>
            <span>Price: {product.price}</span>
            <span>Description: {product.description}</span>
            <Link to={'/'}>
                Back
            </Link>
        </div>
    );
}

export default OneProduct;