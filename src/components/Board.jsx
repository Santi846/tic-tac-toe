import React, { useState } from "react";
import { Square } from "./Square.jsx";
import './styles/board.css';

export function Board () {

    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick= () => {
        const nextSquares = squares.slice();
        nextSquares[0] = 'X';
        setSquares(nextSquares);
    } 

        return(
            <>
            <div className="board">
            <div className="board-row">
                <Square value={squares[0]} OnSquareClick={handleClick}></Square>
                <Square value={squares[1]} OnSquareClick={handleClick}></Square>
                <Square value={squares[2]} OnSquareClick={handleClick}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} OnSquareClick={handleClick}></Square>
                <Square value={squares[4]} OnSquareClick={handleClick}></Square>
                <Square value={squares[5]} OnSquareClick={handleClick}></Square>
            </div>
             <div className="board-row">
                <Square value={squares[6]} OnSquareClick={handleClick}></Square>
                <Square value={squares[7]} OnSquareClick={handleClick}></Square>
                <Square value={squares[8]}OnSquareClick={handleClick}></Square>
            </div>
            </div>
            
            </>
            
        );
    
}