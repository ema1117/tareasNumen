import React from 'react'
import './cards.css'

const CardInfo = ({colores,genero,precio,modelo}) => {
  return (
    <div className='contenedorInfo'>    
     <div className='colores'>{colores}</div>
     <div className='modelo'>{modelo}</div>
     <div className='genero'>{genero}</div>
     <div className='precio'>AR$ {precio}</div>
    </div>
  )
}

export default CardInfo