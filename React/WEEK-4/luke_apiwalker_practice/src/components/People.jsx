import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import '../App.css';

const People = () => {

    const [people, setPeople] = useState({});
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            axios
                .get(`https://swapi.dev/api/people/${id}`)
                .then((res) => {setPeople(res.data);})
                .catch((err) => {console.log(err);});
        }
    }, [id]);

    return (
        <div>
            <h2>{people.name}</h2>
            <ul>
                <li>Home Planet: {people.homeworld}</li>
                <li>Starships: {people.starships}</li>
                <li>Height: {people.height}</li>
                <li>Species: {people.species}</li>
            </ul>
        </div>
    )
}

export default People