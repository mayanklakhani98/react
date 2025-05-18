import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)
    const handleOperation = (op) => {
        if(count==0 && op==-1)
            return;
        setCount((c) => c + op);
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button onClick={() => handleOperation(-1)}>-</button>
            <h2>count is : {count}</h2>
            <button onClick={() => handleOperation(+1)}>+</button>
        {console.log("first commit")}
        </div>  
    )
}

export default Counter;
