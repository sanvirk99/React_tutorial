import React,{useState} from "react";
import { calculateWinner } from "../helper"
import Board from "./Board";

const Game = () => {

    const [board,setBoard]=useState(Array(9).fill(null));
    const [xisNext,setXisNext]=useState(true);
    const winner=calculateWinner(board);
    console.log(board)


    const handleClick= (i) =>{

       const boardCopy=[...board] //shallow copy 
       if(winner||boardCopy[i]) return;
       boardCopy[i] = xisNext ? 'X' : 'O'
       setBoard(boardCopy);
       setXisNext(!xisNext)

    }

    const jumpTo = () =>{


    }


    const renderMoves= () =>{


    }

    

    return (

        <Board squares={board} onClick={handleClick} />
    )
}

export default Game