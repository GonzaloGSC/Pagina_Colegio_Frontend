import React from 'react'
import './admision.css'; 
import IconSubtitle from '../iconosBars'
import Tabla from './tablaMonte';

function admision(props) {
    return (
        <div className="AdmisionContainer">
            <div className="AdmisionWrapper">
                    <div className="AdmisionRow">
                        <div id={props.color} className="SubtituloAdmision"><IconSubtitle className={props.iconoadmision}/>{props.subtituloadmision}</div>
                        <div className="TextoAdmision">
                            <IconSubtitle props="TituloM" className={props.icono1}/>{props.textoadmision1}<p/>
                            <IconSubtitle props="TituloM" className={props.icono2}/>{props.textoadmision2}<p/>
                            <IconSubtitle props="TituloM" className={props.icono3}/>{props.textoadmision3}<p/>
                            <IconSubtitle props="TituloM" className={props.icono4}/>{props.textoadmision4}<p/>
                            <IconSubtitle props="TituloM" className={props.icono5}/>{props.textoadmision5}<p/>
                            <br/>
                            {props.textoadmision6}
                        </div>
                    </div>
                    <div id="AdmisionMargin" className="AdmisionRow">
                    <div id={props.color} className="SubtituloAdmision"><IconSubtitle className={props.iconoadmision2}/>{props.subtituloadmision2}</div>
                        <Tabla color1="Color1M" color2="Color2M" />
                    </div>                
            </div>
        </div>  
    )
}

export default admision
