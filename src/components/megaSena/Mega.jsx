import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min, max, array) {

        var aleatorio = (parseInt(Math.random() * (min + 1 - max)) + min)

        if (aleatorio < 0) {

            aleatorio = aleatorio * (-1)

        }

        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio

    }


    function gerarNumeros(qtde) {

        const numeros = Array(qtde).fill(0).reduce((nums) => {

            const novoNumero = gerarNumeroNaoContido(1, 60, nums)

            return [...nums, novoNumero]

        }, []).sort((n1, n2) => n1 - n2)

        return numeros

    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const initNumbers = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(initNumbers)

    return (

        <div className='Mega'>

            <h2>Mega</h2>

            <h3>{numeros.join(' ')}</h3>

            <div>

                <label>Quantidade de números</label>

                <input
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(qtde))
                    }
                    }
                />

            </div>

            <button onClick={(_) => setNumeros(gerarNumeros(qtde))}> Sortear Números</button>

        </div>

    )
}