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
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }

    return (
        <div className='author-list'>
            <Link to={'/'}>Home</Link>
            <p>Add a new author:</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={(e)=>{setName(e.target.value);}}/>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='button'>
                    <Link to={"/"} className='cancel-button'>Cancel</Link>
                    <input type="submit" value="Submit" className='submit-button' />
                </div>
            </form>
        </div>
    )
}

export default AddAuthor