import React from 'react'
import Icon from '../../components/iconosBars'
import Logo from '../../imagenes/LogoNazareno2.png'
import '../../components/topbar/topbar.css'
import '../../components/admision/admision.css'

export function TopbarContainer(){
    return(
        <div className="ContainerTopbar" id="ContainerTopbarN">
            <div className="WrapperTopbar">
                <div className="RowTopbar">
                    <div className="AdmisionLogoRow">
                        <img alt="logo_colegio" id="LogoTamaño" src={Logo}/>
                            <a className="TitleTopbar" href="/jesus_nazareno">Escuela Diferencial<p></p>Jesús Nazareno</a>
                    </div>
                    <div className="ColumnTopbar">
                        <a className="LinkTopbar" href="/jesus_nazareno/admision"><Icon className="fas fa-mobile-alt"/>Admisión: (+569) 62382640</a>
                        <br></br>
                        <a className="LinkTopbar" href="/jesus_nazareno/contacto"><Icon className="fas fa-map-marker-alt"/>San Pablo 8996, Pudahuel, Santiago - Chile</a>
                        <a className="LinkTopbar" href="/jesus_nazareno/contacto"><Icon className="fas fa-envelope-open"/>Jesus.Nazareno@escuelasespeciales.cl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}