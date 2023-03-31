import React from 'react'

export default props => {

    const cb = props.quandoClicar

    const gerarIdade = () => parseInt(Math.random() * (10 - 50))
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={ _ => cb('Jão' , gerarIdade() ,  true)}>

                Fornecer Infos.</button>
        </div>

    )

}