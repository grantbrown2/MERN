import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';

const ListAuthors = () => {

    const [author, setAuthor] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/')
        .then((res) => {
            setAuthor(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/remove/${id}`)
            .then((res) => {removeFromDom(id)})
            .catch(err => console.log(err))
    }

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    return (
        <div className='table-wrapper'>
            <Link to={'/new'}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link className='edit-button' to={`/edit/${author._id}`}>Edit</Link>
                                        <button className='delete-button' onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAuthors