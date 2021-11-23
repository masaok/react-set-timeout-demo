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

  const [seconds, setSeconds] = useState(0)
  const secondsRef = useRef(seconds)
  secondsRef.current = seconds

  const [row, setRow] = useState(0)
  const rowRef = useRef(row)
  rowRef.current = row

  const [col, setCol] = useState(0)
  const colRef = useRef(col)
  colRef.current = col

  const [maxRow] = useState(5)
  const [maxCol] = useState(5)

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('This will run after 1 second!')
    // }, 1000)

    // https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
    const timer = () => {
      console.log('LOG THIS EVERY SECOND: ' + seconds)

      setSeconds(secondsRef.current + 1)
      setCol(colRef.current + 1)

      if (colRef.current > 5) {
        setRow(rowRef.current + 1)
        setCol(0)
      }

      setTimeout(timer, 1000)
    }
    timer()

    // DOES NOT WORK (because it only runs once)
    // const timer = setTimeout(() => {
    //   console.log('LOG THIS EVERY SECOND: ' + seconds)

    //   let temp = seconds + 1

    //   // setSeconds(seconds + 1)
    //   setSeconds(temp)

    //   if (col < 5) {
    //     setCol(col + 1)
    //   }
    // }, 1000)

    return () => clearTimeout(timer)
  }, [])

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
