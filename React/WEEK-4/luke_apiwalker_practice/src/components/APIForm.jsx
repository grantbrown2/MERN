import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const APIForm = () => {
    const [search, setSearch] = useState('');

    const Submit = (e) => {
        e.prevent.default();
        useNavigate(`/${search}`);
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
                <input type="number" />
            </form>
        </div>
    );
};

export default APIForm;