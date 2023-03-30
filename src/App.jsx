import React from "react";
import './App.css'

import Familia from "./components/basicos/Familia";
import Card from "./components/Layout/Card";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default props => {

    return (

        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="Componentes filhos" color="#bbc5f8">

                 <Familia></Familia>

                </Card>

                <Card titulo="Desafio Aleatório!" color="#99B898">

                    <Aleatorio min={1} max={100} />

                </Card>

                <Card titulo="Fragmento" color="#F9D423">

                    <Fragmento />

                </Card>

                <Card titulo="Parameters" color="#FC913A">


                    <ComParametro
                        titulo="1ª carro"
                        car="Mazda RX-7" motor="13B-REW rotativo" litros={1.4}
                    />

                </Card>

                <Card titulo="Desafio Aleatório!" color="#2A363B">

                    <Primeiro></Primeiro>

                </Card>


            </div>

        </div>

    )

}