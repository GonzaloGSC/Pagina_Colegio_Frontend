import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import TOP from '../../../components/uptotop/uptotopnazareno';
import Guias from '../../../container/containernazareno/guias'




export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Guias/>
                <FooterContainer/>
            </div>
        )
    }
}