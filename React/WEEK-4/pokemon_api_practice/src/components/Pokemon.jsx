import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response =>{setResponseData(response.data.results)})
        .catch(error => {
            console.log(error);
        });
    }, []);
    return (
        <div className='list'>
            <ul>
                {responseData.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon