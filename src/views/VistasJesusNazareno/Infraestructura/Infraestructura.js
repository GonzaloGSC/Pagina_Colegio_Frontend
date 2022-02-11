import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import Infraestructura from '../../../container/containernazareno/infraestructura';
import TOP from '../../../components/uptotop/uptotopnazareno';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <Infraestructura/>
                <TOP showBelow={100}/>
                <FooterContainer/>
            </div>
        )
    }
}