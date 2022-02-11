import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Covid from '../../../container/containernazareno/covid19';
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import TOP from '../../../components/uptotop/uptotopnazareno';


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