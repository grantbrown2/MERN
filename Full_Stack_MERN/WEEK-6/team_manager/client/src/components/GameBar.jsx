import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const GameBar = () => {

    const [selected, setSelected] = useState(null);
    const handleClick = (link) => {
        setSelected(link);
    }
    const linkStyle = (link) => ({
        fontWeight: selected === link ? 'bolder' : 'normal'
    });

    return (
        <div className='status-navbar'>
            <Link to={'/status/game/1'} style={linkStyle('/status/game/1')} onClick={()=> handleClick('/status/game/1')}>
                Game 1
            </Link>
            <Link to={'/status/game/2'} style={linkStyle('/status/game/2')} onClick={()=> handleClick('/status/game/2')}>
                Game 2
            </Link>
            <Link to={'/status/game/3'} style={linkStyle('/status/game/3')} onClick={()=> handleClick('/status/game/3')}>
                Game 3
            </Link>
        </div>
    )
}

export default GameBar