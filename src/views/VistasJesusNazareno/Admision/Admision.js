import React, { Component } from 'react';
import { FooterContainer } from '../../../container/containernazareno/footer'
import {TopbarContainer} from '../../../container/containernazareno/topbar'
import Navbar from '../../../components/navbar/navbarNazareno/navbar';
import Admision from '../../../container/containernazareno/admision';
import TOP from '../../../components/uptotop/uptotopnazareno';



export default class index extends Component {

    render() {
        return(
            <div className="ContenedorGeneral">
                <TopbarContainer/>
                <Navbar/>
                <TOP showBelow={100}/>
                <Admision/>
                <FooterContainer/>
            </div>
        )
    }
}