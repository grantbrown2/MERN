import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const PersonList = (props) => {
    const {people, setPeople} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
            console.log(res.data);
            setPeople(res.data);
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [setPeople])
    
    return (
        <div>
            {
                people.map((person, index)=>{
                return (
                    <div key={index}>
                        <p>{person.lastName}</p>
                        <p>{person.firstName}</p>
                        <Link to={`/people/${person._id}`}>
                            {person.firstName}'s Page!
                        </Link>
                    </div>
                )})
            }
        </div>
    );
}
export default PersonList;

