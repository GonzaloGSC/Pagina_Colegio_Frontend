import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import TOP from '../../../components/uptotop/uptotopmonte';
import Equipo from '../../../container/containermonte/equipo';





export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Equipo/>
                <FooterContainer/>
            </div>
        )
    }
}