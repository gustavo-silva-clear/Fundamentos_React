import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default props =>{

    return (

        <div id="app">
            
            <Aleatorio min = {1} max = {100}/>

            <h1>Fundamentos React 3</h1>

            <Fragmento />

            <ComParametro
                titulo="1ª carro"
                car="Mazda RX-7" motor="13B-REW rotativo" litros={1.4}
            />

            <Primeiro></Primeiro>

            
        </div>

    )

}