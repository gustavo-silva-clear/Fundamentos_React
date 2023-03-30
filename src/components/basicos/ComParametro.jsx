import React from "react"

export default function ComParametro(props) {

    const status = props.litros >= 2 ? 'é forte' : 'da pra melhorar'

    return (

        <div>

            <h2>{props.titulo}</h2>
            <h3>

                O <strong>{props.car} </strong>
                possui um motor
                <strong> {props.motor} </strong>
                que tem a litragem de 
                <strong> {props.litros} </strong> 
                litros e
                 <strong> { status } </strong>

            </h3>

        </div>

    )

}