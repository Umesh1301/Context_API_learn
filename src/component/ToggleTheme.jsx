import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ToggleTheme = () => {
    const { color, setColor, setBackgroundColor } = useContext(ThemeContext)
    console.log(color)
    return (
        <button style={{backgroundColor:'purple' ,color:'white', padding:'2px',margin:'5px'}} onClick={() => {
            setColor(prev => {
                if (prev === 'red') {
                    return 'orange'
                }
                else {
                    return 'red'
                }
            })
            setBackgroundColor(prev => {
                if (prev === 'green') {
                    return 'blue'
                }
                else {
                    return 'green'
                }
            })
        }}>ToggleTheme</button>
    )
}

export default ToggleTheme