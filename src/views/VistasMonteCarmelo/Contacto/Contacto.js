import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import Contacto from '../../../container/containermonte/contacto';
import TOP from '../../../components/uptotop/uptotopmonte';
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