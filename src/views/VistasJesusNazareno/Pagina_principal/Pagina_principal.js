import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from "../../../components/navbar/navbarNazareno/navbar"; 
import TOP from '../../../components/uptotop/uptotopnazareno';
import Pagina_principal from '../../../container/containernazareno/pagina_principal';
import Slider from '../../../components/SliderPrincipal/sliderNazareno';
import '../../../container/contenedorgeneral.css'




export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral"> 
                <TopbarContainer/> 
                <Navbar/>
                <Slider/>
                <Pagina_principal/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}