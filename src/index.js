import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <>
        <Primeiro></Primeiro>
        <ComParametro
        titulo = "1º carro"
        car = "Toyota Supra" motor = "2JZ" litros = {3.0}
        /> 
         <ComParametro
        titulo = "2ª carro"
        car = "Nissan GT-R  R32" motor = "RB26" litros = {2.6}
        /> 
         <ComParametro
        titulo = "3ª carro"
        car = "Mazda RX-7" motor = "13B-REW rotativo" litros = {1.4}
        />

        <Fragmento />
    </>,

    document.getElementById('root')
)
