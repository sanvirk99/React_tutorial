import React from "react";


const style = {

    background: 'red',
    border: '2px solid black',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'black'


}

const Square = ({value,onClick}) =>(

    <button style={style} onClick={onClick}>
        {value}
    </button>

);

export default Square