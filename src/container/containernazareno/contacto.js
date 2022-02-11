import React from 'react'
import Email from '../../components/emailform/formnazareno';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_contacto_nazareno.png';


function contacto() {
    return (
        <div>
        <Banner src={Imagen} text="Contactanos"/>
        <Titulo  id="TituloN" icono="fas fa-pen" titulo="Escribenos!"/>
        <Email/>   
        </div>
    )
}

export default contacto
