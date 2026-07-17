import React from "react";
import logo from '../logo.svg';
import '../App.css';

const FirstPage = () => {
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>React**FastAPI**MySQL</p>
                <br />
                <h3>This is my small project</h3>
            </header>
        </div>
    )
}

export default FirstPage