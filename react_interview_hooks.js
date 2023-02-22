// useState例子
import { useState } from 'react'

export function Counter() {
  [count, setCount] = useState(0)
  
  function adjustCount(amount) {
    setCount((prevCount) => (preCount + amount));
  }
  
  return
    <div>
      <button onClick={() -> adjustCount(-1)}>-</button>
      <span></span>
      <button onClick={() -> adjustCount(1)>+</button>
    </div>
}

// 

