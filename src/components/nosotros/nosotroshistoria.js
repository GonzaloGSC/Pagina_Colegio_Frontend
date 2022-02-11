import React from 'react'
import IconSubtitle from '../iconosBars';
import './nosotros.css'


function nosotroshistoria(props) {
    return (
        <div className="NosotrosContainer">
            <div className="NosotrosWrapper">
                <div className="NosotrosRow">
                    <div id={props.subtitulo} className="SubtituloNosotros"><IconSubtitle className="fas fa-globe-americas"/>Nuestra Historia</div>
                        <div className="TextoNosotros2">
                            {props.historia}
                        </div>
                </div>
            </div>
        </div>  
    )
}

export default nosotroshistoria
