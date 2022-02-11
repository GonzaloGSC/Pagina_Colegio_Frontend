import React, { Component } from 'react'
import './nivel.css';

class Nivel extends Component {
    constructor(props){
        super(props);
        this.state = {
            OC: [],
            OD: []
        }
    }
 
    componentDidMount(){
       
        fetch('https://escuelasespeciales.cl/curso/list?id_colegio=1&ordering=nombre&tipo=basico')
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
        fetch('https://escuelasespeciales.cl/curso/list?id_colegio=1&ordering=nombre&tipo=taller')
            .then(response => response.json())
            .then(data => this.setState({OD:data}));
    }

    render(){

        const {OC,OD} = this.state
        
    return (
        <>
            <div className="NivelContainer">
                <div className="NivelWrapper">
                    <div className="NivelColumn">
                        <div className="NivelRow">
                            <div id="NivelTituloS" className="NivelTitulo">Niveles Básicos (7 a 14 años +2)</div>
                            <div className="NivelRow2">
                                <div id="NivelTextoS" className="NivelTexto">Los niveles basicos que se cursan en este establecimiento son los siguientes:
                                <br/>
                                    {OC.map(item => <div className="NivelTexto" id='NivelTextoFila'>• {item.nombre}</div>)}
                                </div>
                                <div id="NivelTextoS" className="NivelTexto">
                                    La educación básica es el ciclo educativo que los estados orientan hacia los niños
                                    , niñas y adolencentes desde la primera infancia hasta finalizar la adolecencia. Abarca
                                    desde el nivel inicial hasta el nivel secundario.</div>
                            </div>
                            <div id="NivelTexto" className="NivelTexto">Los niveles básicos se rigen bajo la normativa del decreto <a href="https://especial.mineduc.cl/wp-content/uploads/sites/31/2016/08/Decreto-83-2015.pdf" >83/2015</a></div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="NivelContainer">
                <div className="NivelWrapper">
                    <div className="NivelColumn">
                        <div className="NivelRow">
                            <div id="NivelTituloS" className="NivelTitulo">Niveles Laborales (15 a 24 años +2)</div>
                            <div className="NivelRow2">
                                <div id="NivelTextoS" className="NivelTexto">Los niveles laborales que se cursan en este establecimiento son los siguientes:
                                <br/>
                                    {OD.map(item => <div className="NivelTexto" id='NivelTextoFila'>• {item.nombre}</div>)}
                                </div>
                                <div id="NivelTextoS" className="NivelTexto">
                                    La educación laboral es una de las partes componentes de la formación de la personalidad
                                    y el medio fundamental de desarrollo de las cualidades morales del hombre. Ella incluye
                                    diferentes partes de la preparación moral y práctica de los alumnos para la actividad laboral.
                                    Nuestra institución cuenta con talleres extraprogramáticos, los cuales buscan desarrollar y potenciar 
                                    las habilidades cognitivas artísticas, físicas y sociales de los alumnos.
                                </div>
                            </div>
                            <div id="NivelTexto" className="NivelTexto">Los niveles laborales se rigen bajo la normativa del decreto <a href="https://dianagracee.files.wordpress.com/2008/09/instructivo20decreto2087-901.pdf">87/90</a></div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
}

export default Nivel 
