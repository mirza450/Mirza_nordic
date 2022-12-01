import React from 'react';

const red1="red";
const yellow1="yellow";
const blue1 ="green";
let counter=0;
function App(){
    return (
    <>
    <div>
    <h1 
    style={{
        backgroundColor:blue1,
        color:yellow1,
    }} >Hello React </h1>
    <h1
    style={{
        backgroundColor:red1,
        color:blue1
    }}>Hello World !</h1>
    </div>
    <div>
        <button type='button' onClick={()=>{counter=counter+1;
        console.log(counter)}}>+</button>
        <p >{counter}</p>
        <button type='button' onClick={()=>{counter=counter-1;
        console.log(counter)}} > - </button>
    </div>
    </>
    );
}

export default App;