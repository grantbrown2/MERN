import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { personId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
export default DeleteButton;

// what it might look like in the PersonList.jsx
// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import DeleteButton from './DeleteButton';
// const PersonList = (props) => {
//     const [people, setPeople] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/people')
//             .then(res => setPeople(res.data));
//     }, [])
//     const removeFromDom = personId => {
//         setPeople(people.filter(person => person._id !== personId))
//     }
//     return (
//         <div>
//             {people.map((person, idx) => {
//                 return (
//                     <p key={idx}>
//                         <Link to={"/people/" + person._id}>
//                             {person.lastName}, {person.firstName}
//                         </Link>
//                         |
//                         <Link to={"/people/" + person._id + "/edit"}>
//                             Edit
//                         </Link> 
//                         |
//                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
//                     </p>
//                 )
//             })}
//         </div>
//     )
// }
// export default PersonList;

/* <DeleteButton personId={person._id} successCallback={() => navigate("/")} /> */