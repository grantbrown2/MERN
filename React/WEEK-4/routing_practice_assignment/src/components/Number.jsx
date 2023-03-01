import React from 'react'
import { useParams } from "react-router-dom";

const Number = (props) => {
    const {number} = useParams();
    return (
        <div>The number is: {number}</div>
    )
}

export default Number