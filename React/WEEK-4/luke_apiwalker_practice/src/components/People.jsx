import React, {useState, useEffect} from 'react'
import axios from 'axios'

const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(()=> {
        axios
            .get("https://swapi.dev/api/people/:id")
            .then((res)=>{setPeople(res.data.results);})
            .catch((err)=> {console.log(err);});
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default People