import React from 'react'
import Galeria from '../galeria/Galeria'
import Filtros from '../filtros/Filtros' 
 
import './principal.css'
 

const Principal = ({camperas,filtros}) => {
  return (
    <div className='principal'>
        <div className='principalTitulo'>
          <h1>Camperas de Hombre</h1>
        </div>    
        <div className='principalContenido'>

          <div className='contenedorFiltros'>
          {

              filtros.map( filtros => <Filtros filtros = {filtros} /> )            
            
          } 
          
          </div> 
            <Galeria camperas= {camperas}/>
        </div>


    </div>
  )
}

export default Principal