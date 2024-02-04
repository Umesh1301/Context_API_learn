import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({ children }) => {
    const [color, setColor] = useState('black')
    const [backgroundColor, setBackgroundColor] = useState('orange')

    return (
        <ThemeContext.Provider value = {{ color, backgroundColor, setBackgroundColor, setColor}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider