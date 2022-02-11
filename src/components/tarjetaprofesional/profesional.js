import React from 'react'
import './profesional.css'

function profesional(props) {
    return (                       
            <div className="ProfesionalCard">
                <div className="ProfesionalImagen">
                    <img alt="profesional" src={props.imagen} id="TamañoImagen2" />
                </div>
                <div className="ProfesionalTitulo">{props.titulo}</div>
                <div className="ProfesionalCargo">{props.cargo}</div>
                <div className="ProfesionalTexto">{props.texto}</div>
            </div>      
    )
}

export default profesional
