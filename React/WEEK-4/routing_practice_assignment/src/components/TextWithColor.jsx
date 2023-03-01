import React from 'react'
import { useParams } from "react-router-dom";
import '../App.css';

const TextWithColor = (props) => {
    const {text, color, backColor} = useParams();
    const style = {
        color: color || 'black',
        backgroundColor: backColor || 'white'
    };
    return (
        <div className='container' style={style} >The word is: {text}</div>
    )
}

export default TextWithColor