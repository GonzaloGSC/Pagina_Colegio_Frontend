import React from 'react'
import './item.css'


function item(props) {
    return (
        <div className="EventoItem" id={props.id}>
            <h2 id={props.id2}>{props.fecha}</h2>
            <h1 id={props.id3}>{props.titulo}</h1>
            <div id={props.id4} className="descripcion">{props.descripcion}</div>
        </div>
    )
}

export default item
