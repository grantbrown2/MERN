import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const APIForm = () => {
    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState('');

    const navigate = useNavigate();
    // const url = selectedId ? `/${search}/${selectedId}` : `/${search}`;

    const Submit = (e) => {
        e.preventDefault();
        let url = `/${search}`;
        if (selectedId) {
            url += `/${selectedId}`;
        }
        navigate(url);
    };

    return (
        <div>
            <form onSubmit={Submit}>
                <label>Search for: </label>
                <select onChange={(e)=>setSearch(e.target.value)}>
                    <option value=""></option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type="number" onChange={(e)=>setSelectedId(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default APIForm;