import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import Contacto from '../../../container/containernazareno/contacto';
import TOP from '../../../components/uptotop/uptotopnazareno';
import '../../../container/contenedorgeneral.css'



export default class index extends Component {

    render() { 
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Contacto/>
                <FooterContainer/>
            </div>
        )
    }
}