import React, { useState } from "react";
import { Square } from "./Square.jsx";
import './styles/board.css';


const calculateWinner = (squares) => {

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        } 
    }

    return null;
}

export function Board () {

    
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        //if the square i position is true, it is filled
        if (squares[i] || calculateWinner[squares]) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        setSquares(nextSquares);
        setxIsNext(!xIsNext);

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

