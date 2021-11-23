import { useEffect, useState, useRef } from 'react'
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

  // Using refs from this tutorial:
  // https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  const [seconds, setSeconds] = useState(0)

  const [row, setRow] = useState(0)
  const rowRef = useRef(row)
  rowRef.current = row

  const [col, setCol] = useState(0)
  const colRef = useRef(col)
  colRef.current = col

  const [maxRow] = useState(2)
  const [maxCol] = useState(2)

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('This will run after 1 second!')
    // }, 1000)

    // TODO: Make this stop at exactly row 2 and col 2
    const timer = () => {
      console.log('LOG THIS EVERY SECOND: ' + seconds)
      if (rowRef.current > maxRow) {
        return clearTimeout(timer) // return necessary to stop the timer
      } else {
        setSeconds(seconds => seconds + 1)
        setCol(colRef.current + 1)

        if (colRef.current > maxCol) {
          setRow(rowRef.current + 1)
          setCol(0)
        }
      }

      setTimeout(timer, 1000)
    }
    timer()

    return () => clearTimeout(timer)
  }, [maxCol, maxRow, seconds])

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
