import React from 'react'
import Icon from '../../components/iconosBars'
import Logo from '../../imagenes/LogoMonte2.png'
import '../../components/topbar/topbar.css'
import '../../components/admision/admision.css'

export function TopbarContainer(){
    return(
        <div className="ContainerTopbar" id="ContainerTopbarM">
            <div className="WrapperTopbar">
                <div className="RowTopbar">
                    <div className="AdmisionLogoRow">
                        <img alt="logo_colegio" id="LogoTamaño" src={Logo}/>
                            <a className="TitleTopbar" href="/monte_carmelo">Escuela Diferencial<p></p>Monte Carmelo</a>
                    </div>
                    <div className="ColumnTopbar">
                        <a className="LinkTopbar" href="/monte_carmelo/admision"><Icon className="fas fa-phone"/>Admisión: (2) 2534 8490 </a>
                        <a className="LinkTopbar" href="/monte_carmelo/contacto"><Icon className="fas fa-mobile-alt" />Otras consultas: (+569) 62382639 </a>
                        <br></br>
                        <a className="LinkTopbar" href="/monte_carmelo/contacto"><Icon className="fas fa-map-marker-alt"/>Av. Portales 285, Maipú, Santiago - Chile</a>
                        <a className="LinkTopbar" href="/monte_carmelo/contacto"><Icon className="fas fa-envelope-open"/>Monte.Carmelo@escuelasespeciales.cl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}