import React from "react";
import { useState } from 'react';
import Board from "./Board";
import { calculateWinner } from '../helper';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(history[stepNumber])
    const xo = isXNext ? "X" : "O"

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber+1)
        const current = historyPoint[stepNumber]
        const squares = [...current]
        if(winner || squares[i]) return;
        squares[i]=xo;
        setHistory([...history,squares])
        setStepNumber(historyPoint.length)
        setIsXNext(!isXNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setIsXNext(step%2===0)
    } 

    const renderMoves = () => (
        history.map((step,move) => {
            const destination = move ? `Go to move #${move}` : `Go to start`
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>        
                </li>
            )
        })
    )

    const restartButtonClick = () => {

    }

    return (
        <>
            <div className="score-container">
                <h2>X: {isXNext && !winner ? "✓" : winner==="X" ? "Winner!": null}</h2>
                <h2>Y: {!isXNext && !winner ? "✓": winner==="O" ? "Winner!": null}</h2>
            </div>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <button className="restart-btn" onClick={restartButtonClick}>Restart</button>
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
            
            <h3>{winner ? "Winner: " + winner : "Next Player: " + xo }</h3>
            
            </div>
        </>
    )
}   

export default Game