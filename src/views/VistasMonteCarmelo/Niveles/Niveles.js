import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import Niveles from '../../../container/containermonte/niveles'
import TOP from '../../../components/uptotop/uptotopmonte';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Niveles/>
                <FooterContainer/>
            </div>
        )
    }
}