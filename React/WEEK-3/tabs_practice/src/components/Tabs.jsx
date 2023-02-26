import React, { useState } from 'react'
import '../style.css'

const Tabs = ({items}) => { //taking the items variable from the app.js

    const [id, setId] = useState(0); //sets a tab to a unique id in state



    
    return (
        <div>
            <h1>Tabs Practice</h1>
            {items.map((item, idx) => ( //using map to render through all the tabs
                <button key={idx} 
                    className={`tab ${idx === id ? 'active' : ""}`} // we add the tab to "active" if its "idx" value matches the id passed into the component, if they don't match its set to nothing
                    onClick={() => setId(idx)}>
                    {item.label}
                </button>
            ))}
            <div className='message'>
                <span>{items[id].content}</span>
            </div>
        </div>
    )
}

export default Tabs