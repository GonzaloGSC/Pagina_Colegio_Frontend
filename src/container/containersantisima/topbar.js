import React from 'react'
import Icon from '../../components/iconosBars'
import Logo from '../../imagenes/Logo2.png'
import '../../components/topbar/topbar.css'
import '../../components/admision/admision.css'

export function TopbarContainer(){
    return(
        <div className="ContainerTopbar" id="ContainerTopbarS">
            <div className="WrapperTopbar">
                <div className="RowTopbar">
                    <div className="AdmisionLogoRow">
                        <img alt="logo_colegio" id="LogoTamaño" src={Logo}/>
                            <a className="TitleTopbar" href="/santisima_trinidad">Escuela Diferencial<p></p>Santísima Trinidad</a>
                    </div>
                    <div className="ColumnTopbar">
                        <a className="LinkTopbar" href="/santisima_trinidad/admision"><Icon className="fas fa-phone"/>Admisión: (2) 2644 3601 </a>
                        <a className="LinkTopbar" href="/santisima_trinidad/contacto"><Icon className="fas fa-mobile-alt" />Otras consultas: (+569) 62382642</a>
                        <br></br>
                        <a className="LinkTopbar" href="/santisima_trinidad/contacto"><Icon className="fas fa-map-marker-alt"/>Federico Errázuriz 793, Pudahuel, Santiago - Chile</a>
                        <a className="LinkTopbar" href="/santisima_trinidad/contacto"><Icon className="fas fa-envelope-open"/>Santisima.Trinidad@escuelasespeciales.cl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}