import React, { Component } from 'react';
import './notFound.css'
import Png from '../../imagenes/png404/404png.png'
import Rocket from '../../imagenes/png404/rocket.svg'
import Tierra from '../../imagenes/png404/earth.svg'
import Luna from '../../imagenes/png404/moon.svg'
import Astronauta from '../../imagenes/png404/astronaut.svg'
import logo from '../../imagenes/LogoES2.png'

export default class notFound404 extends Component {

    render(){
        return( 
            <div class="bg-purple">
        
            <div class="stars">
                <div class="custom-navbar">
                    <div class="brand-logo">
                        {/* Logo del colegio aquí */}
                        <img alt="notfound404" src={logo} width="80px"/>
                    </div>
                    <div class="navbar-links">
                        <ul>
                          <li><a href="/santisima_trinidad">Santísima Trinidad</a></li>
                          <li><a href="/jesus_nazareno">Jesús Nazareno</a></li>
                          <li><a href="/monte_carmelo">Monte Carmelo</a></li>
                        </ul>
                    </div>
                </div>
                <div class="central-body">
                    <img alt="notfound404" class="image-404" src={Png} width="300px"/>
                    <a href="/" class="btn-go-home">REGRESA A CASA</a>
                </div>
                <div class="objects">
                    <img alt="notfound404" class="object_rocket" src={Rocket} width="40px"/>
                    <div class="earth-moon">
                        <img alt="notfound404" class="object_earth" src={Tierra} width="100px"/>
                        <img alt="notfound404" class="object_moon" src={Luna} width="80px"/>
                    </div>
                    <div class="box_astronaut">
                        <img alt="notfound404" class="object_astronaut" src={Astronauta} width="140px"/>
                    </div>
                </div>
                <div class="glowing_stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
    
                </div>
    
            </div>
            </div>
        )
    }
}