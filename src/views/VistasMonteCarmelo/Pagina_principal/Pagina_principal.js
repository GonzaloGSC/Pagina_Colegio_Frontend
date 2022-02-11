import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from "../../../components/navbar/navbarMonte/navbar"; 
import TOP from '../../../components/uptotop/uptotopmonte';
import Pagina_principal from '../../../container/containermonte/pagina_principal';
import Slider from '../../../components/SliderPrincipal/sliderMonte';
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