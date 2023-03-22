import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UpdateAuthor = () => {

    const {id} = useParams();
    const [name, setName] = useState();
    const navigate = useNavigate();

    const [error, setError] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/${id}`)
            .then(res => {setName(res.data.name);})
            .catch(err => console.log(err))
    }, [id])

    const updatedAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/edit/${id}`, {name})
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                setError(err.response.data.error);
                console.log(err);
            });
    }

    return (
        <div className='author-list'>
            <Link to={'/'}>Home</Link>
            <p>Edit this author:</p>
            {error && <p>{error}</p>}
            <form onSubmit={updatedAuthor}>
                <label htmlFor="name">Name:</label>
                <input name='name' value={name} type="text" onChange={(e)=>{setName(e.target.value);}}/>
                <div className='button'>
                    <Link to={"/"} className='cancel-button'>Cancel</Link>
                    <input type="submit" value="Submit" className='submit-button' />
                </div>
            </form>
        </div>
    )
}

export default UpdateAuthor