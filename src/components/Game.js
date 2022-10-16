import React,{useState} from "react";
import { calculateWinner } from "../helper"
import Board from "./Board";


const styles = {

    width: '200px',
    margin: '20px auto',


};

const Game = () => {

    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [stepNumber,setStepNumber]=useState(0);
    const [xisNext,setXisNext]=useState(true);
    const winner=calculateWinner(history[stepNumber]);
    console.log(history)


    const handleClick= (i) =>{

       //once a click is intiated at a period in history, the history after that period is no longer valid
       const timeInHistory = history.slice(0, stepNumber+1)

       const current = timeInHistory[stepNumber]
       const squares=[...current] //shallow copy 

       //if winner or square is written to then cant make any changes return
       if(winner||current[i]) return;
       //based on turn assign square appropriate sign, behaves like a switch 
       squares[i] = xisNext ? 'X' : 'O';
       //update the history and period
       setHistory([...timeInHistory,squares]);
       setStepNumber(timeInHistory.length);
       //flip the swtich 
       setXisNext(!xisNext);

    }

    const jumpTo = (step) =>{

        setStepNumber(step);
        //this is to identify the move of the next person when jumping to a period
        setXisNext(step % 2 === 0) //since intial was true odd step will be 0 

    }


    const renderMoves= () =>(
        
        history.map((_step,move)=>{
            const destination = move ? `Go to move ${move}` : 'Go to start';
            return (
                <li key={move}>
                       <button onClick={()=> jumpTo(move)}>
                        {destination}
                        </button>
                </li>
            )
        })
     

    )

    
    return (
        <>
         <Board squares={history[stepNumber]} onClick={handleClick} />
        <div style={styles}>
            <p>{winner?'Winner:' + winner:'Next Player: '+(xisNext ? 'X' : 'O')}</p>
            {renderMoves()}
        </div>
    
        </>
       
    )
}

export default Game