import React from "react"

export default function ComParametro(props) {

    const status = props.litros >= 2 ? 'é forte' : 'da pra melhorar'

    const up = Math.ceil(props.litros)
    return (

        <div>

            <h2>{props.titulo}</h2>
            <h3>

                O <strong>{props.car} </strong>
                possui um motor
                <strong> {props.motor} </strong>
                que tem a litragem de 
                <strong> {up} </strong>
                litros e
                 <strong> { status } </strong>

            </h3>

        </div>

    )

}