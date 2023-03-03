import React from "react";
import { Square } from "./Square.jsx";
<link rel="stylesheet" href="./styles/board.css" />

export class Board extends React.Component{
    renderSquare(i){
        return(
            <>
            <div className="board">
            <Square classname='square_1' value={i}></Square>
            <Square classname='square_2' value={i}></Square>
            <Square classname='square_3' value={i}></Square>
            <Square classname='square_4' value={i}></Square>
            <Square classname='square_5' value={i}></Square>
            <Square classname='square_6' value={i}></Square>
            <Square classname='square_7' value={i}></Square>
            <Square classname='square_8' value={i}></Square>
            <Square classname='square_9' value={i}></Square>
            </div>
            
            </>
            
        );
    }
}