import React from 'react'
import { Link } from "react-router-dom";
import './inicio.css'
import ImagenLogo1 from '../../imagenes/Logo.png';
import ImagenLogo2 from '../../imagenes/LogoMonte.png';
import ImagenLogo3 from '../../imagenes/LogoNazareno.png';



function inicio() {
    return (
        <div className="ContenedorGeneral">
            <div className="InicioContainer">
                <div className="InicioWrapper">
                    <div className="InicioColumn">
                        <div className="InicioRow">
                            <Link className="InicioRow2" to="/santisima_trinidad" >
                                <img alt="logo_colegio" src={ImagenLogo1} className="LogoColegios"/>
                                <div className="TextoInicio">Santísima Trinidad</div>
                            </Link>
                            <Link className="InicioRow2" to="/jesus_nazareno">
                                <img alt="logo_colegio" src={ImagenLogo3} className="LogoColegios"/>
                                <div  className="TextoInicio">Jesús Nazareno</div>
                            </Link>
                            <Link className="InicioRow2" to="/monte_carmelo">
                                <img alt="logo_colegio" src={ImagenLogo2} className="LogoColegios"/>
                                <div className="TextoInicio">Monte Carmelo</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inicio
