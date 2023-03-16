import React, {useState} from 'react'
import axios from 'axios';
import '../App.css';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/product", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProduct([...product, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1>Product Manager III</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProductForm