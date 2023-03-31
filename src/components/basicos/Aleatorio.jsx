import React from "react";



export default (props) => {

    const { min , max} = props

    const random = parseInt(Math.random() * (max - min)) + min

    return (
        <div>

            <h2>Valor Aleatorio</h2>

            <p>Valor Mínimo: <strong> {min}</strong></p>

            <p>Valor Máximo: <strong> {max}</strong></p>

            <p>Valor Sorteado: <strong> {random}</strong></p>


        </div>
   
   )
}