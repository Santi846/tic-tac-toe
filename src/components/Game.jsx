import React, { useState } from "react";
import { Board} from "./Board.jsx";

export function Game () {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1 ];

    const handlePlay = (nextSquares, xIsNext, setxIsNext) => {
        setHistory([...history, nextSquares]);
        setxIsNext(!xIsNext);
    }

        return(
            <Board placeholder='Texto a modificar' xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
        );
    
}