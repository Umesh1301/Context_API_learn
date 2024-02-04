import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/countContext'

const Increase = () => {
    const { increment, count } = useContext(CountContext)
    console.log(count)
    return (
        <button style={{backgroundColor:'blue', color:'white', padding:'2px',margin:'5px'}} onClick={() => increment()} color='red' >Increase by 1</button>
    )
}

export default Increase