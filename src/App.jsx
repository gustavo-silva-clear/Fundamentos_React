import React from "react";
import './App.css'


import Mega from "./components/megaSena/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Produtos from "./components/repeticao/TabelaProdutos";
import ListaCarros from "./components/repeticao/listaCarros";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
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

                <Card titulo="#13 Mega Sena" color="#3b8132">

                   <Mega qtde = {8}></Mega>

                </Card>

                <Card titulo="#12 Contador" color="#2A363B">

                    <Contador numeroInicial={10}></Contador>

                </Card>

                <Card titulo="#11 Componete controlado (input)" color="#2A363B">

                    <Input></Input>

                </Card>


                <Card titulo="#10 Comunicação indireta" color="#2A363B">

                    <IndiretaPai></IndiretaPai>

                </Card>

                <Card titulo="#10 Comunicação indireta" color="#2A363B">

                    <IndiretaPai></IndiretaPai>

                </Card>

                <Card titulo="#09 Comunicação Direta" color="#FC913A">

                    <DiretaPai></DiretaPai>

                </Card>

                <Card titulo="#08 renderização funcional" color="#feb32e">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Gusta' }} />
                </Card>

                <Card titulo="#07 deafio Repetição" color="#bbc5f8">
                    <Produtos />
                </Card>

                <Card titulo="#06 Repetição" color="#24788f">

                    <ListaCarros></ListaCarros>

                </Card>

                <Card titulo="#05 Componentes filhos" color="#bbc5f8">

                    <Familia sobrenome="ferreira" />

                    <FamiliaMembro nome="Gustavo" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Pedro" />

                </Card>

                <Card titulo="#04 Desafio Aleatório!" color="#99B898">

                    <Aleatorio min={1} max={100} />

                </Card>

                <Card titulo="#03 Fragmento" color="#F9D423">

                    <Fragmento />

                </Card>

                <Card titulo="#02 Parameters" color="#FC913A">


                    <ComParametro
                        titulo="1ª carro"
                        car="Mazda RX-7" motor="13B-REW rotativo" litros={1.4}
                    />

                </Card>

                <Card titulo="#01 Desafio Aleatório!" color="#2A363B">

                    <Primeiro></Primeiro>

                </Card>


            </div>

        </div>

    )

}