import React from 'react'
import './item.css'


function item(props) {
    return (
        <div className="SliderItem2">
            <img id="SliderImagen" src={props.imagen} alt="imagenes_colegio"/>
        </div>
    )
}

export default item
