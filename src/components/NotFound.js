import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="notfound">
        <div className="noise"/>
        <div className="overlay"/>
        <div className="terminal">
            <h1>Error <span className="code">404</span></h1>
            <p className="output">The page you are looking for might have been removed, had its name changed or is
                temporarily unavailable.</p>
            <p className="output">Please try to <Link to="/">return to the homepage</Link>.</p>
            <p className="output">Good luck.</p>
        </div>
    </div>
)

export default NotFound
