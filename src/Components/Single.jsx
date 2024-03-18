import React, { useState } from 'react'
import Clic from '../../public/copiar.png'
import Values from 'values.js'

const Single = ({hexColor}) => {
    const [copy, setCopy] = useState(false)
    const uno = (color) => () =>{
        const copyNew = `#${color}`
        navigator.clipboard.writeText(copyNew)
        setCopy(true)
        setTimeout(()=>{
            setCopy(false)
        },2000)
    }

  return (
    <div className="single-card" style={{backgroundColor: `#${hexColor}`}} >
        <div className="content">
            <p>#{hexColor}</p>
            <button onClick={uno(hexColor)}>
                <img src={Clic} alt="Copiar" />
            </button>
            {copy ? <p>Copied</p>:null}
        </div>
    </div>

  )
}

export default Single