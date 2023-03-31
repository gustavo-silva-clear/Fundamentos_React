import React from 'react'
import JDM from '../../data/carros'

export default props => {

    console.log(JDM);

    const JDMs = JDM.map((carro) => {

        return (
            <li key = {carro.id}>
                {carro.id} - {carro.nome} → {carro.motor}
            </li>
        )

    })
    return (< div >
        <ul className='lista'>
            {JDMs}
        </ul>
    </div >)


}