import React, { Component } from 'react'
import './nivel.css';

class Nivel extends Component {
    constructor(props){
        super(props);
        this.state = {
            OC: [],
            // OD: [],
        }
    }

    componentDidMount(){
       
        fetch('https://escuelasespeciales.cl/curso/list?id_colegio=2&ordering=nombre&tipo=basico')
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
        // fetch('https://escuelasespeciales.cl/curso/list?id_colegio=2&ordering=nombre&tipo=taller')
        //     .then(response => response.json())
        //     .then(data => this.setState({OD:data}));
    }

    render(){

        const {OC,
            // OD
        } = this.state
        
    return (
        <>
            <div className="NivelContainer">
                <div className="NivelWrapper">
                    <div className="NivelColumn">
                        <div className="NivelRow">
                            <div id="NivelTituloN" className="NivelTitulo">Niveles Básicos (7 a 14 años +2)</div>
                            <div className="NivelRow2">
                                <div id="NivelTextoN" className="NivelTexto">Los niveles basicos que se cursan en este establecimiento son los siguientes:
                                <br/>
                                    {OC.map(item => <div className="NivelTexto" id='NivelTextoFila'>• {item.nombre}</div>)}
                                    <div className="NivelTexto" id="NivelTextoFila">*Además Jesús Nazareno Cuenta con Nivel Párvulo (4 a 6 años +2)*</div>
                                </div>
                                <div id="NivelTextoN" className="NivelTexto">
                                    La educación básica es el ciclo educativo que los estados orientan hacia los niños
                                    , niñas y adolencentes desde la primera infancia hasta finalizar la adolecencia. Abarca
                                    desde el nivel inicial hasta el nivel secundario.</div>
                            </div>
                            <div id="NivelTexto" className="NivelTexto">Los niveles básicos se rigen bajo la normativa del decreto <a href="https://especial.mineduc.cl/wp-content/uploads/sites/31/2016/08/Decreto-83-2015.pdf" >83/2015</a></div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
}

export default Nivel 
