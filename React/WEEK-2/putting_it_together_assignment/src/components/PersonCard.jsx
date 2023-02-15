import React, {useState} from 'react'

const PersonCard = (props) => {
    const [age, setAge] = useState(props.initialAge);
  return (
    <div className='block'>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={ () => setAge(age + 1)}>Birthday button for {props.firstName + " " + props.lastName}</button>
        {/* <button onClick={ () => setAge(age - 1)}>Remove a number *TEST*</button> */}
    </div>
  )
}

export default PersonCard