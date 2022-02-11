import React from 'react'
import Email from '../../components/emailform/formmonte';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_contacto_monte.png';


function contacto() {
    return (
        <div>
        <Banner src={Imagen} text="Contactanos"/>
        <Titulo  id="TituloM" icono="fas fa-pen" titulo="Escribenos!"/>
        <Email/>   
        </div>
    )
}

export default contacto
