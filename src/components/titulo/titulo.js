import React from 'react'
import './titulo.css';
import IconTitle from '../iconosTitle'

function titulo(props) {
    return (
        <div className="TituloContainer">
            <div className="TituloWrapper">
                <div className="TituloColumn">
                    <div id={props.id} className="Titulo"><IconTitle className={props.icono}/>{props.titulo}</div>
                    <div className="Subtitulo1">{props.Subtitulo1}</div>
                    <div className="Subtitulo2">{props.Subtitulo2}</div>
                </div>
            </div>
        </div>    
    )
}

export default titulo
