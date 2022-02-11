import React from 'react'
import './nosotros.css'

function nosotrosmv(props) {
    return (
        <div className="NosotrosContainer">
            <div id={props.wrapper} className="NosotrosWrapper">
                <div className="NosotrosRow">

                    <div className="NosotrosColumn">
                        <div id={props.subtitulo2} className="SubtituloNosotros2">Misión</div>
                        <div className="TextoNosotros2">
                            Ser un centro educativo integral, capaz de atender la diversidad, entregando a los/as estudiantes herramientas para desarrollar habilidades; 
                            destrezas cognitivas y valores como el respeto por el ser humano, la tolerancia, lealtad, solidaridad, espíritu crítico y creativo para el posterior 
                            logro de la inclusión social y laboral.                     
                        </div>
                    </div>

                    <div className="NosotrosColumn">
                        <div id={props.subtitulo2} className="SubtituloNosotros2">Visión</div>
                        <div className="TextoNosotros2">
                        Nuestra misión es potenciar habilidades que favorezcan el desarrollo integral, para así lograr la inclusión social y laboral en estudiantes 
                        con necesidades educativas especiales.
                        Para el logro de nuestra propuesta contamos con un equipo que permite flexibilidad y adecuación constante en el quehacer pedagógico, 
                        en beneficio del aprendizaje significativo de cada estudiante.
                        <p/>
                        <div className="TextoNosotros2">Nuestro currículum está inspirado en el Modelo Ecológico Funcional y Cognitivo, en donde se incluyen todas las áreas de desarrollo 
                        referente a las necesidades actuales y futuras de nuestros niños y jóvenes, considerando el ambiente y las necesidades del individuo, integrando escuela, 
                        familia, comunidad, medio cultural, social y económico.
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nosotrosmv

