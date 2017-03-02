import React from 'react'
import { Link } from 'react-router-dom'

export default () =>  (
    <div style={{ border: "1px solid black", margin: '5px', width: '400px', padding: '5px' }}>
        Header.js
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/increment">Increment</Link></li>
            <li><Link to="/UserClassContainer">UserClassContainer</Link></li>
            <li><Link to="/about">AboutPage</Link></li>
        </ul>
    </div>
)
