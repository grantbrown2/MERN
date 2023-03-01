import React from 'react'
import '../App.css';
import SubContents from '../Components/SubContents';
import Advertisement from '../Components/Advertisement';

const Main = () => {
    return (
        <div className='Main'>
            <div className='container-2'>
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
            <Advertisement />
        </div>
    )
}

export default Main