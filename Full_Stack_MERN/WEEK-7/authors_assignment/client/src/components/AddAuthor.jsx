import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';

const AddAuthor = () => {

    const [author, setAuthor] = useState([]);
    const [name, setName] = useState('');

    const[errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/new', {name})
            .then(res => {
                setAuthor([...author, res.data]);
                navigate('/');
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    const errorArr = Object.values(err.response.data.errors).map(val => val.message);
                    setErrors(errorArr);
                }
            });
    }

    return (
        <div className='author-list'>
            <Link to={'/'}>Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e)=>{setName(e.target.value);}}/>
                {errors.map((error, index) => (
                <div key={index} className='errors'>{error}</div>
                ))}
                <div className='button'>
                    <Link to={"/"} className='cancel-button'>Cancel</Link>
                    <input type="submit" value="Submit" className='submit-button' />
                </div>
            </form>
        </div>
    )
}

export default AddAuthor