import React from 'react'
import './cards.css'

const CardImg = ({img}) => {
  return (
     <img className = 'img' src={img} alt="react" />
  )
}

export default CardImg