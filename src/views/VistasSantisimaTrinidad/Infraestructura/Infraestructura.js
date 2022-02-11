import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containersantisima/footer'
import {TopbarContainer} from '../../../container/containersantisima/topbar'
import Navbar from '../../../components/navbar/navbarSantisima/navbar';
import Infraestructura from '../../../container/containersantisima/infraestructura';
import TOP from '../../../components/uptotop/uptotopsantisima';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Infraestructura/>
                <FooterContainer/>
            </div>
        )
    }
}