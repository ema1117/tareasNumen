import { useState } from 'react'
import './App.css'
 
import Header from './components/header/Header'
import Principal from './components/principal/Principal'
import Pie from './components/pie/Pie'


function App() {
  const [count, setCount] = useState(0)

let camperas = [{
  colores: "Azul Blanco Verde",
  modelo: "LARS",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-lars.jpg"

},
{
  colores: "Roja Blanco Negra",
  modelo: "NEGAN CON CAPUCHA",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-neegan-con-capucha.jpg"

},
{
  colores: "Azul Blanco Negra",
  modelo: "KRYPTON",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-Krypton.jpg"
},
{
  colores: "Amarilla Blanco Negra",
  modelo: "EIGER",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-eiger.jpg"



},
{
  colores: "Blanco Negra",
  modelo: "DELTA PRO",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-delta-pro.jpg"
},
{
  colores: "VERDE Blanco Negra",
  modelo: "MORGAN",
  genero: "Campera de hombre",
  precio: 114480,
  img: "./src/assets/campera-de-hombre-morgan.jpg"

}

]




let filtros = [{
  filtro: 'Actividad',
  tipos: ['camping','Montaña','Running','Ski']
},
{
  filtro: 'Talle',
  tipos: ['XS','S','M','L','XL']
},
{
  filtro: 'Materiales',
  tipos: ['Con Micropolar','Con Polar','Pluma Natural']
}
]

  return (
    <>
    <Header />
    <Principal camperas={camperas} filtros={filtros}/>
    <Pie />
      
    </>
  )
}

export default App
