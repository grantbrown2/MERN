import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'
import {useNavigate} from 'react-router-dom';

const AddPlayer = () => {

    const [player, setPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [role, setRole] = useState('');

    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/players/add', {
            playerName,
            role
        })
            .then(res => {
                setPlayer([...player, res.data]);
                navigate('/players/list');
            })
            .catch(err => console.log(err))
    }

    const validation = () => {
        if (playerName.length >= 2) {
            setIsValid(true);
            setErrorMessage('');
        } else {
            setIsValid(false);
            setErrorMessage('Player name must be at least 2 characters long!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <label htmlFor="playerName">Name: </label>
                <input type="text" onChange={(e) => {
                    setPlayerName(e.target.value);
                    validation();
                }}/>
                {errorMessage && <span className='error'>{errorMessage}</span>}
            </div>
            <div className='form-container'>
                <label htmlFor="role">Preferred Position: </label>
                <input type="text" onChange={(e) => {
                    setRole(e.target.value);
                    validation();
                }}/>
            </div>
            <input type="submit" value='Add'disabled={!isValid}/>
        </form>
    )
}

export default AddPlayer