import React from 'react'
import Single from './Single'

const Display = ({list}) => {
  return (
    <div className="colors-box">
        {
            list.map((color, index)=>(
                <Single key={index} hexColor={color.hex} />
            ))
        }
    </div>

  )
}

export default Display