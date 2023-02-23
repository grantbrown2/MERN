import React, {useState} from 'react'
import AddBox from './AddBox';
import '../Style.css';


const Form = () => {

    const [boxColor, setBoxColor] = useState("");
    const [colors, setColors] = useState("");

    const generateBox = (e) => {
        e.preventDefault();
        setColors([...colors, boxColor]);
        setBoxColor('');
    }

    return (
        <div>
            <form onSubmit={generateBox}>
                <div>
                    <label htmlFor="boxColor">Choose a color!</label>
                    <input type="color" name="boxColor" value={boxColor} onChange={(e) => setBoxColor(e.target.value)}/>
                    <input type="submit" value="Add"/>
                </div>
            </form>
            <div className="boxes">
                {colors.length > 0 &&
                colors.map((color, index) => <AddBox key={index} color={color} />)}
            </div>
        </div>
    )
}

export default Form