import React from "react";
import { Square } from "./Square.jsx";
import './styles/board.css';

export function Board () {
    
        return(
            <>
            <div>
                <Square value="1"></Square>
                <Square value="2" className="board-row"></Square>
                <Square value="3" className="board-row"></Square>
            </div>
            <div>
                <Square value="4" className="board-row"></Square>
                <Square value="5" className="board-row"></Square>
                <Square value="6" className="board-row"></Square>
            </div>
             <div className="board-row">
                <Square value="7"></Square>
                <Square value="8"></Square>
                <Square value="9"></Square>
            </div>
            </>
            
        );
    
}