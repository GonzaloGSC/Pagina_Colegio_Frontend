import React from 'react'
import NosotrosH from '../../components/nosotros/nosotroshistoria';
import Nosotrosmv from '../../components/nosotros/nosotrosmv';
import NosotrosV from '../../components/nosotros/nosotrosvaloresMonte';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_nosotros_monte.png';


function nosotros() {

    let newDate = new Date()
    let año = newDate.getFullYear();
    const años = año-2007

    return (
        <div>
            <Banner src={Imagen} text="Cónocenos mejor"/>
            <Titulo id="TituloM" icono="fas fa-users" titulo="¿Quiénes Somos?"/>
            <NosotrosH subtitulo="SubtituloM1" historia={`Monte Carmelo es un centro de educación con ${años} años de trayectoria en el área
                                                            de la educación especial; Ubicados en Maipú contamos con instalaciones adecuadas a
                                                            las necesidades de nuestros alumnos y alumnas, y un equipo de profesionales altamente
                                                            capacitados en el área.`}/>
            <Nosotrosmv wrapper="NosotrosWrapperM" subtitulo2="Subtitulo2M"/>
            <NosotrosV subtitulo="Subtitulo2M"/>
        </div> 
    )
}

export default nosotros
