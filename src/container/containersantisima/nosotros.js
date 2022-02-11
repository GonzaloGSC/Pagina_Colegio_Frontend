import React from 'react'
import NosotrosH from '../../components/nosotros/nosotroshistoria';
import Nosotrosmv from '../../components/nosotros/nosotrosmv';
import NosotrosV from '../../components/nosotros/nosotrosvaloresSantisima';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_nosotros_santisima.png';


function nosotros() {

    let newDate = new Date()
    let año = newDate.getFullYear();
    const años = año-2002

    return (
        <div>
            <Banner src={Imagen} text="Cónocenos mejor"/>
            <Titulo  id="TituloS" icono="fas fa-users" titulo="¿Quiénes Somos?"/>
            <NosotrosH subtitulo="SubtituloS1" historia={`Santísima Trinidad es un centro de educación con ${años} años de trayectoria en el área
                                                            de la educación especial; Ubicados en Pudahuel contamos con instalaciones adecuadas a
                                                            las necesidades de nuestros alumnos y alumnas, y un equipo de profesionales altamente
                                                            capacitados en el área.`}/>
            <Nosotrosmv wrapper="NosotrosWrapperS" subtitulo2="Subtitulo2S"/>
            <NosotrosV subtitulo="SubtituloS1"/>
        </div>
    )
}

export default nosotros
