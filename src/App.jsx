import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")

  const handleClick = (op) => {
    setInput(input + op)
  }

  const handleEqual = () => {
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput("Error")
    }
  }

  const handleClear = () => {
    setInput("")
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: '', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
        <h1>Calculator</h1>
        <input type="text" value={input || "0"} readOnly style={{ height: '20px', width: '30%', padding: '10px', border: 'none', borderRadius: '9999px' }} />
        <div className="buttons" style={{ display: 'flex', flexWrap: 'wrap', width: '30%', gap: '10px', margin: '10px' }}>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("**")}>**</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </>
  )
}

export default App
