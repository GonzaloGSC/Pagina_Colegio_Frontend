import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import Infraestructura from '../../../container/containermonte/infraestructura';
import TOP from '../../../components/uptotop/uptotopmonte';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Infraestructura/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}