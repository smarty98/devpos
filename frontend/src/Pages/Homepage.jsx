import React from 'react';
import {Link} from 'react-router-dom'

function Homepage() {
    return (
        <div>
            <header>
                    <nav class="navbar navbar-light bg-primary">
        <div class="container">
            <Link to="/" class="navbar-brand" >DEVPOS</Link>
        </div>
        </nav>
            </header>
            <main>
            <div className="container mt-3">
            <div className="bg-light p-5 mt-4 rounded-3">
            <h1>Welcome to my POS for small business</h1>
            <p>Going to complete project</p>
            <Link to='/pos' className="btn btn-primary">Click here to go to products selling</Link>
            </div>
            </div>
            </main>
        </div>
    )
}

export default Homepage
