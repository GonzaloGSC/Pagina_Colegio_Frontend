import React, { Component } from 'react';
import Navbar from "../../../components/navbar/navbarSantisima/navbar"; 
import { FooterContainer } from '../../../container/containersantisima/footer'
import {TopbarContainer} from '../../../container/containersantisima/topbar'
import TOP from '../../../components/uptotop/uptotopsantisima';
import Pagina_principal from '../../../container/containersantisima/pagina_principal';
import Slider from '../../../components/SliderPrincipal/sliderSantisima';
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