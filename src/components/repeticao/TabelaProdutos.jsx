import React from 'react'
import pecas from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {

    function getLinhas() {

        return pecas.map((produto , i) => {
            return (

                <tr key ={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td> $ {produto.price}</td>
                </tr>

            )

        })

    }

    return (
        <div className='TabelaProdutos'>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='getlinhas'>
                        {getLinhas()}
                    </tr>
                </tbody>

            </table>

        </div>

    )

}