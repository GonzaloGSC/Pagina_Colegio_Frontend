import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import Nosotros from '../../../container/containermonte/nosotros';
import TOP from '../../../components/uptotop/uptotopmonte';

export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Nosotros/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}