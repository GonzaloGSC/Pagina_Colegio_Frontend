import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containermonte/footer'
import {TopbarContainer} from '../../../container/containermonte/topbar'
import Navbar from "../../../components/navbar/navbarMonte/navbar";  
import Faq from '../../../container/containermonte/faq';
import TOP from '../../../components/uptotop/uptotopmonte';



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