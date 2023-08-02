import React from 'react'
import CardImg from "./CardImg";
import CardInfo from "./CardInfo";

const Card = ({camperas}) => {   
    //logica
    

   // console.log(persona)

    //respuesta
    return (

        <div >
            <CardImg img={camperas.img}/>
            <CardInfo colores={camperas.colores} genero={camperas.genero} precio={camperas.precio} modelo={camperas.modelo}  />
           
        </div>
        

    )

}

export default Card;