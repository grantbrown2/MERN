import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const PlayerStatus = () => {

    const [selected, setSelected] = useState(null);
    const handleClick = (link) => {
        setSelected(link);
    }
    const linkStyle = (link) => ({
        fontWeight: selected === link ? 'bolder' : 'normal'
    });

    return (
        <div className='status-navbar'>
            <Link to={'/players/list'} style={linkStyle('/players/list')} onClick={()=> handleClick('/players/list')}>
                List
            </Link>
            <Link to={'/players/add'} style={linkStyle('/players/add')} onClick={()=> handleClick('/players/add')}>
                Add Player
            </Link>
        </div>
    )
}

export default PlayerStatus