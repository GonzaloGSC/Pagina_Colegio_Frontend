import React from 'react'
import Titulo from '../../components/titulo/titulo';
import Niveles from '../../components/nivel/nivelNazareno';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_nivel_nazareno.png';


function niveles() {
    return (
        <div>
            <Banner src={Imagen} text="Niveles"/>
            <Titulo 
             id="TituloN" 
                icono="fas fa-book-open"
                titulo="Niveles Educativos"
                Subtitulo2="La educación especial, es una modalidad del sistema educativo que desarrolla
                su acción de manera transversal en los distintos niveles educativos, tanto en los establecimientos
                de educación regular como en los establecimientos de educación especial. Provee diversos servicios, 
                recursos y ayudas para asegurar el acceso, la participación y el progreso en el currículum
                nacional de todos los y las estudiantes, especialmente a aquellos que presentan mayores necesidades de apoyo."
            />
            <Niveles/>       
        </div>
    )
}
export default niveles
