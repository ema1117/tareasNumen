import React from 'react'
import Card from '../cards/Card'
import './galeria.css'

const Galeria = ({camperas}) => {
  
  return (
    <div className='galeria'> 
        {
            camperas.map( camperas => <Card camperas = {camperas} /> )
           
        }



    </div>
  )
}

export default Galeria