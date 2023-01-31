import React from "react";
import Botao from "./botao/botao";
import sucupira from "../../img/Sucupira.webp";
import './produto.css';

export default function Produto(){
    return(
        <div className="container_sucupira">
            <img src={sucupira}/>
            <div className="txt">
                <h1>Sucupira</h1>
                <h2>Gel Massageador</h2>
                <Botao nome="COMPRAR"/>
                <p>R$45,00</p>
            </div>
            
        </div>
    )
}