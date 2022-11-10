import React from "react";
import { useState } from "react";

import Button from "./Button";

import './styles.scss';

const Counter = () => { 
    const [count, setCount] = useState(0)

    const handleDec = () => setCount(count - 1)
    const handleInc = () => setCount(count + 1)
    const handleReset = () => setCount(0)
    
  return (
    <div className="counter">
      <div className='number'>{count}</div>
      <div className="btns">
        <Button 
          className="btn"
          sign="-" 
          func={handleDec}
        />
        <Button
          className="btn"
          sign="+"
          func={handleInc}
        />
        <Button 
          className="btn btn_reset"
          sign="reset"
          func={handleReset}
        />
      </div>
    </div>
    
  )
}

export default Counter;