import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Transporte_Escolar from '../../../container/containermonte/transporteescolar';
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import TOP from '../../../components/uptotop/uptotopmonte';


export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Transporte_Escolar/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}