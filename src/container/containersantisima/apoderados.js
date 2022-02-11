import React from 'react'
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Apoderados from '../../components/apoderados/apoderados';
import Imagen from '../../imagenes/banner_apoderados_santisima.png';


function apoderados() {
    return (
        <>
            <Banner src={Imagen} text="Apoderados"/>
            <Titulo  id="TituloS" titulo="Información importante" icono="fas fa-info-circle" Subtitulo2="A continuación se presenta información importante sobre uniforme y transporte escolar"/>
            <Apoderados 
                color="SubtituloS1"  
                iconoapoderados="fas fa-user-graduate"
                subtituloapoderados="Uniforme Escolar"
                textoadmision1="Nuesta Institución cuenta con Uniformes escolares Oficiales,
                                los cuales se muestran a continuación:" 
                textoadmision2="Además contamos con transporte escolar para todos nuestros estudiantes
                                que lo requieran"                
                iconoapoderados2="fas fa-bus-alt"
                subtituloapoderados2="Transporte Escolar"
            />        
        </>
    )
}
 
export default apoderados

