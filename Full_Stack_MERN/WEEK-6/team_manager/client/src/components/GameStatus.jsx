import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'

const GameStatus = () => {

    const [player, setPlayer] = useState([]);

    const [isPlaying, setIsPlaying] = useState(false);
    const toggleStatus = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/players/list')
        .then((res)=> {
            setPlayer(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    player.map((player, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{player.playerName}</td>
                                <td>
                                    <button className='buttons' style={{backgroundColor: isPlaying ? 'green' : ''}} onClick={toggleStatus}>Playing</button>
                                    <button className='buttons'>Not Playing</button>
                                    <button className='buttons'>Undecided</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default GameStatus