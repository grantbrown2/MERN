import React from 'react'

const AddBox = ({color}) => {
    const style = {
        backgroundColor: color,
        width: "100px",
        height: "100px"
    };
    return (
        <div className='box' style={style}></div>
    )
}

export default AddBox