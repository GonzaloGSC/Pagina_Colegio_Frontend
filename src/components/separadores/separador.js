import React from 'react'
import './separadores.css';

function separador(props) {
    return (
        <div className="SeparadoresContainer">
            <div id={props.separador} className="SeparadoresWrapper">
                <div className="SeparadoresColumn">
                   <div className="TituloSeparador">{props.title}</div>
                </div>
            </div>   
        </div>
    )
}

export default separador
