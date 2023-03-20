import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ListPlayers = () => {

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/players/list')
        .then((res)=> {
            setPlayer(res.data);
        })
        .catch((err) => console.log(err))
    }, [])

    const deletePlayer = (id) => {
        if (window.confirm("Are you sure you want to delete this player?")) {
            axios.delete(`http://localhost:8000/players/remove/${id}`)
                .then((res) => {removeFromDom(id)})
                .catch(err => console.log(err))
        }
    }

    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id !== playerId));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    player.map((player, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{player.playerName}</td>
                                <td>{player.role}</td>
                                <td><button onClick={(e) => {deletePlayer(player._id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ListPlayers