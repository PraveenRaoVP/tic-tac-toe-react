import React from "react";
import './App.css'
import Game from "./components/Game";

const App = () => {
    return (
        <div className="app">
            <div className="main-container">
            <h1>Tic Tac Toe</h1>
            </div>
            <div className="game-container">
                <Game />
            </div>
        </div>
    )
}   

export default App