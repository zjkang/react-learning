// useState例子
import { useState } from 'react'

export default function Counter() {
  [count, setCount] = useState(0)
  
  function adjustCount(amount) {
    setCount((prevCount) => {
      return preCount + amount;
    });
  }
  
  return (
    <div>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span></span>
      <button onClick={() => adjustCount(1)>+</button>
    </div>
  )
}


-----------------------------------------
// useEffect例子
useEffect(() => {
  setState() // componentDidMount
  return () => {} // componentWillUnMount
}, [])

useEffect(() => {
  setState() // componentDidUpdate
}, [state])


-----------------------------------------
// useRef例子
// ref will not cause the component to re-update when it get changed, will never cause our component to rerendered
// use ref value to persist values between renders
// e.g., (1) access dom element, (2) record some values not in state (3) record previous state

import { useState, useEffect, useRef } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')
  
  useEffect(() => {
    prevName.current = name
  }, [name])
  
  return (
    <>
      <input value={name} onChange={setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
    <>
  )
}

(1)
export default function App() {
  const [name, setName] = useState('')
  const nameRef = useRef(null)
  
  function onClick() {
    nameRef.current.focus()
  }
  
  return (
    <>
      <input ref={nameRef} value={name} onChange={setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
      <button onClick={onClick}>Focus</button>
    <>
  )
}

-----------------------------------------
useContext


