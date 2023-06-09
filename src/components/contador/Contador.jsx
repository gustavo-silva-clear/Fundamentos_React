import React, { Component } from 'react'
import Display from "./Display"
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends Component {

    state = {

        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroInicial || 10,


    }

    inc = () => {

        this.setState({

            numero: this.state.numero + this.state.passo

        })

    }


    dec = () => {

        this.setState({

            numero: this.state.numero - this.state.passo

        })

    }


    setPasso = (novoPasso) => {

        this.setState({

            passo: novoPasso,

        })

    }

    render() {

        return (

            <div>

                <h2>Contador</h2>
                <Display numero = {this.state.numero} />
                <PassoForm passo = {this.state.passo } setPasso = {this.setPasso}/>
             <Botoes setInc = {this.inc} setDec = {this.dec}/>
            </div>

        )

    }

}