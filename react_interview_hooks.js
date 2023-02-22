// useState例子
import { useState } from 'react'

export function Counter() {
  [count, setCount] = useState(0)
  
  function adjustCount(amount) {
    setCount((prevCount) => {
      return preCount + amount;
    });
  }
  
  return (
    <div>
      <button onClick={() -> adjustCount(-1)}>-</button>
      <span></span>
      <button onClick={() -> adjustCount(1)>+</button>
    </div>
  )
}

// useRef例子
// ref will not cause the component to re-update when it get changed, will never cause our component to rerendered



