import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [row, setRow] = useState(0)
  const [col] = useState(0)

  const [ms] = useState(1000)

  const [maxRows] = useState(5)

  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if (row >= maxRows) {
          setIsActive(false)
        } else {
          setRow(row + 1)
          // if (seconds > (1000 / ms) * maxSeconds) {
          console.log(`ROW: ${row}`)
          console.log(`MAX ROWS: ${maxRows}`)
        }
      }, ms)
    } else if (!isActive) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, maxRows, ms, row])

  return (
    <div className="App">
      <header className="App-header">
        <p>Row: {row}</p>
        <p>Col: {col}</p>
      </header>
    </div>
  )
}

export default App
