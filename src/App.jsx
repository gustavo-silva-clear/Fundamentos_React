import React from "react";

import Card from "./components/Layout/Card";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default props => {

    return (

        <div id="app">

            <h1>Fundamentos React</h1>

            <Card titulo="Desafio Aleatório!">

                <Aleatorio min={1} max={100} />

            </Card>

            <Card titulo="Fragmento">

                <Fragmento />

            </Card>

            <Card titulo="Parameters">


                <ComParametro
                    titulo="1ª carro"
                    car="Mazda RX-7" motor="13B-REW rotativo" litros={1.4}
                />

            </Card>

            <Card titulo="Desafio Aleatório!">

                <Primeiro></Primeiro>

            </Card>




        </div>

    )

}