import React, { useState } from 'react'
import CountContext from './countContext'

const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(100)
    const increment = () => {
        setCount(prev => prev + 1)
    }
   


    return (
        <CountContext.Provider value={{ count, increment,setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextProvider