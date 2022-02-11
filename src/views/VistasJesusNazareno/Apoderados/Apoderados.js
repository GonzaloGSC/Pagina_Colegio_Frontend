import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import Apoderados from '../../../container/containernazareno/apoderados';
import TOP from '../../../components/uptotop/uptotopnazareno';




export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Apoderados/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}