import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(
    <div id = "app">
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
        car = "Mazda RX-7 FD" motor = "13B-REW rotativo" litros = {1.4}
        />
    </div>,

    document.getElementById('root')
)
