import React, { useState } from "react";
import { Square } from "./Square.jsx";
import './styles/board.css';

export function Board () {

    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
    } 


        return(
            <>
            <div className="board">
            <div className="board-row">
                <Square value={squares[0]} OnSquareClick={() => handleClick(0)}></Square>
                <Square value={squares[1]} OnSquareClick={() => handleClick(1)}></Square>
                <Square value={squares[2]} OnSquareClick={() => handleClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} OnSquareClick={() => handleClick(3)}></Square>
                <Square value={squares[4]} OnSquareClick={() => handleClick(4)}></Square>
                <Square value={squares[5]} OnSquareClick={() => handleClick(5)}></Square>
            </div>
             <div className="board-row">
                <Square value={squares[6]} OnSquareClick={() => handleClick(6)}></Square>
                <Square value={squares[7]} OnSquareClick={() => handleClick(7)}></Square>
                <Square value={squares[8]}OnSquareClick={() => handleClick(8)}></Square>
            </div>
            </div>
            
            </>
            
        );
    
}