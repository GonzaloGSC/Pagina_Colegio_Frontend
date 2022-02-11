import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Seguro_Escolar from '../../../container/containernazareno/seguro_escolar';
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import TOP from '../../../components/uptotop/uptotopnazareno';


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