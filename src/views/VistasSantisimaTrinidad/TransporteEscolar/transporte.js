import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containersantisima/footer'
import {TopbarContainer} from '../../../container/containersantisima/topbar'
import Transporte_Escolar from '../../../container/containersantisima/transporteescolar';
import Navbar from '../../../components/navbar/navbarSantisima/navbar';
import TOP from '../../../components/uptotop/uptotopsantisima';


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