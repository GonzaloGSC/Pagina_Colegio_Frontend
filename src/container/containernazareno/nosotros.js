import React from 'react'
import NosotrosH from '../../components/nosotros/nosotroshistoria';
import Nosotrosmv from '../../components/nosotros/nosotrosmv';
import NosotrosV from '../../components/nosotros/nosotrosvaloresNazareno';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_nosotros_nazareno.png';


function nosotros() {

    let newDate = new Date()
    let año = newDate.getFullYear();
    const años = año-1998

    return (
        <div>
            <Banner src={Imagen} text="Cónocenos mejor"/>
            <Titulo  id="TituloN" icono="fas fa-users" titulo="¿Quiénes Somos?"/>
            <NosotrosH subtitulo="SubtituloN" historia={`Jesús Nazareno es un centro de educación con ${años} años de trayectoria en el área
                                                            de la educación especial; Ubicados en Pudahuel contamos con instalaciones adecuadas a
                                                            las necesidades de nuestros alumnos y alumnas, y un equipo de profesionales altamente
                                                            capacitados en el área.`}/>
            <Nosotrosmv wrapper="NosotrosWrapperN" subtitulo2="Subtitulo2N"/>
            <NosotrosV subtitulo="SubtituloN"/>
        </div>
    )
}

export default nosotros
