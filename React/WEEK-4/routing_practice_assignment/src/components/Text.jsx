import React from 'react'
import { useParams } from "react-router-dom";

const Text = (props) => {
    const {text} = useParams();
    return (
        <div>The word is: {text}</div>
    )
}

export default Text