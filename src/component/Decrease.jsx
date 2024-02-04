import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/countContext'

const Decrease = () => {
    const {setCount } = useContext(CountContext)
    // console.log(count)
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    return (
        <button style={{backgroundColor:'red', color:'white', padding:'2px',margin:'5px'}} onClick={() => decrement()}>Decrease by 1</button>
    )
}

export default Decrease