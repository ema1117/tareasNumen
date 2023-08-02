import React from 'react'
import './filtros.css'

const Filtros = ({filtros}) => {
  const {filtro,tipos} = filtros  

  return (
    <div className='filtros'>
      <h2>{filtro}</h2>
      <ul>
        {
          tipos.map(tipos => <li key={tipos}><input type="checkbox" name="{tipos}" id="{tipos}" />{tipos}</li>)
        }
      </ul>
      
    </div>
  )
}

export default Filtros