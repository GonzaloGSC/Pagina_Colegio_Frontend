import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containersantisima/footer'
import {TopbarContainer} from '../../../container/containersantisima/topbar'
import Covid from '../../../container/containersantisima/covid19';
import Navbar from '../../../components/navbar/navbarSantisima/navbar';
import TOP from '../../../components/uptotop/uptotopsantisima';


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