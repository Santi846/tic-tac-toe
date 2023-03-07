import React from "react";
// import { useState } from "react";
import './styles/square.css';

//export function Square ({value})
export function Square ({value, OnSquareClick}) {

    return(
        <>
            <div className="board-row">
                <button className="square" onClick={OnSquareClick}>{value}</button>
                {/* <button className="square" onClick={handleClick}>{value}</button> */}
            </div>
            </>
    );
}