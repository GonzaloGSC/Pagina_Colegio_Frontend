import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containersantisima/footer'
import {TopbarContainer} from '../../../container/containersantisima/topbar'
import Navbar from "../../../components/navbar/navbarSantisima/navbar";  
import Faq from '../../../container/containersantisima/faq';
import TOP from '../../../components/uptotop/uptotopsantisima';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Faq/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}