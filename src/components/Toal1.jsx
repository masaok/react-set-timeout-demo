import { useEffect, useState, useCallback } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
  { name: 'Toal1' }
)

const Toal1 = props => {
  const classes = useStyles(props)

  const [seconds, setSeconds] = useState(0)
  const [row, setRow] = useState(0)
  const [col, setCol] = useState(0)

  const [maxRow] = useState(2)
  const [maxCol] = useState(2)

  const timer = useCallback(() => {
    console.log('LOG THIS EVERY SECOND: ' + seconds)
    if (col < maxCol) {
      setCol(col + 1)
      setSeconds(seconds + 1)
    } else if (row < maxRow) {
      setRow(row + 1)
      setCol(0)
      setSeconds(seconds + 1)
    }

    // If neither condition is true, the state doesn't change, which doesn't
    // recreate the timer, which doesn't trigger the useEffect. The loop
    // will stop.
  }, [maxCol, maxRow, seconds, row, col])

  useEffect(() => {
    const timeout = setTimeout(timer, 1000)

    // Make sure to clear the current timeout whenever a new timer is generated.
    // This ensures that only one timeout is active at a time.
    return () => clearTimeout(timeout)
  }, [timer])

  return (
    <div className={classes.root}>
      <div>TOAL1</div>
      <div>Seconds: {seconds}</div>
      <div>Row: {row}</div>
      <div>Col: {col}</div>
    </div>
  )
}

export default Toal1
