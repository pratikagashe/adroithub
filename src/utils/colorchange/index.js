import React, { useContext } from 'react'
import CircularColor from 'react-circular-color';
import {Context} from '../ColorContext';

const ColorChange = () => {
    const [color, setColor] = useContext(Context);
    const handleColorChange = (code) => {
        setColor({
            ...color,
            code: code,
        })
      }
    
    return (
        <>
            <CircularColor size={350} onChange={handleColorChange} color='#36F2B9' />
        </>
    )
}

export default ColorChange
