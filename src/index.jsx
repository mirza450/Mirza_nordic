import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
const red1="red";
const yellow1="yellow";
const blue1 ="green";
function App(){
    return (
    <Fragment>
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
    <input type="text"/>
    </div>
    </Fragment>
    );
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<>
<App />
<App />
<App />
</>);