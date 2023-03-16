import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => { // this gathers the values for the specified product so it auto fills the form
        axios.get(`http://localhost:8000/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const updatedProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/product/edit/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={updatedProduct}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name='description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default UpdateProduct