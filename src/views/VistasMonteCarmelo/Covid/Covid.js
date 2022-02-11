import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Covid from '../../../container/containermonte/covid19';
import Navbar from '../../../components/navbar/navbarMonte/navbar';
import TOP from '../../../components/uptotop/uptotopmonte';


export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Covid/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}