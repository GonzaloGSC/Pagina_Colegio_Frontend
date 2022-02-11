import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Seguro_Escolar from '../../../container/containermonte/seguro_escolar';
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import TOP from '../../../components/uptotop/uptotopmonte';


export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Seguro_Escolar/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}