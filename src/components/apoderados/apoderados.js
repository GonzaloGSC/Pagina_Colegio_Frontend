import React from 'react'
import IconSubtitle from '../iconosBars'
import Imagen1 from '../../imagenes/Furgones/Furgon1.jpeg'
import Imagen2 from '../../imagenes/Furgones/Furgon2.jpeg'
import Imagen3 from '../../imagenes/Furgones/Furgon3.jpeg'
import './apoderados.css';


function apoderados(props) {
    return (
        <div className="ApoderadosContainer">
            <div className="ApoderadosWrapper">
                <div className="ApoderadosRow">
                    <div id={props.color} className="SubtituloApoderados"><IconSubtitle className={props.iconoapoderados}/>{props.subtituloapoderados}</div>
                        <div className="TextoApoderados">{props.textoadmision1}
                        </div>
                </div>

                <div className="ImagenApoderadosRow">
                        <div className="TituloApoderadosRow"><p>Uniforme Mujer</p>
                            <img alt="imagen_uniforme" id="ImagenApoderado" src={""}></img>
                        </div>
                        <div className="TituloApoderadosRow">Uniforme Hombre
                            <img alt="imagen_uniforme" id="ImagenApoderado" src=""></img>
                        </div>
                </div>
                

                <div className="ImagenApoderadosRow">
                    <div id={props.color} className="SubtituloApoderados"><IconSubtitle className={props.iconoapoderados2}/>{props.subtituloapoderados2}</div>
                        <div className="TextoApoderados">{props.textoadmision2}
                        </div>
                </div>

                <div className="ImagenApoderadosRow">
                        <div className="TituloApoderadosRow">Furgon Mercedez Benz Sprinter
                            <img alt="imagen_furgonescolar" id="ImagenApoderado2" src={Imagen1}></img>
                        </div>
                        <div className="TituloApoderadosRow">Furgon Kia Besta
                            <img alt="imagen_furgonescolar" id="ImagenApoderado2" src={Imagen2}></img>
                        </div>
                </div>
                <div className="ImagenApoderadosRow">
                        <div className="TituloApoderadosRow"><p>Furgon Mercedez Benz Sprinter</p>
                            <img alt="imagen_furgonescolar" id="ImagenApoderado2" src={Imagen3}></img>
                        </div>
                        <div className="TituloApoderadosRow">Furgon Mercedez Benz Sprinter
                            <img alt="imagen_furgonescolar" id="ImagenApoderado2" src={Imagen1}></img>
                        </div>
                </div>
            </div>
        </div>            
    )
}

export default apoderados
