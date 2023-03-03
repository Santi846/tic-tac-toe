import React from "react";
import { Board } from "./Board.jsx";

export class Game extends React.Component {
    render(){
        return(
            <Board placeholder='Texto a modificar'></Board>
        );
    }
}