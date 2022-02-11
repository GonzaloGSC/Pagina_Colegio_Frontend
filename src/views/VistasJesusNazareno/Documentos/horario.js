import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Documentos from '../../../container/containernazareno/horario';
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import TOP from '../../../components/uptotop/uptotopnazareno';


export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Documentos/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}