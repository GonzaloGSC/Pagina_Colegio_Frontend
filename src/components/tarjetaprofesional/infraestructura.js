import React from 'react'
import './profesional.css'


function profesional(props) {

    return (                       
            <div className="ProfesionalCard">
                <div className="ProfesionalImagen">
                        <img alt="infraestructura" src={props.imagen} id="TamañoImagen"/>
                </div>
                <div className="ProfesionalTitulo">{props.titulo}</div>
                <div className="ProfesionalTexto">{props.texto}</div>
            </div>      
    )
}

export default profesional
