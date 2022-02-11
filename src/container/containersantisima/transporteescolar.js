import React from 'react'
import Tarjeta from '../../components/tarjetaprofesional/infraestructura';
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Imagen from '../../imagenes/banner_apoderados_santisima.png';
import '../../components/tarjetaprofesional/profesional.css'

class Transporte_Escolar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/infraestructura/list?id_colegio=1&id_identificador=3')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        if(this.state.arreglo.length !== 0){
            return (
                <div>
                <Banner src={Imagen} text="Nuestro Colegio"/>
                    <Titulo  id="TituloS" 
                        titulo="Transporte Escolar" 
                        Subtitulo2="A continuación se presenta el transporte escolar oficial de nuestro establecimiento.-"
                        icono="fas fa-bus"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <div className="ProfesionalColumn">
                            <div className="ProfesionalRow2">
                            {this.state.arreglo.map( objeto =>
                                        <div key={objeto.id}>
                                            <Tarjeta 
                                                titulo={objeto.titulo}
                                                texto ={objeto.descripcion}
                                                imagen ={"http://"+window.location.host+"/download/"+objeto.path}
                                            />
                                        </div>
                                )}
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }else{
            return (
                <div>
                <Banner src={Imagen} text="Nuestro Colegio"/>
                    <Titulo  id="TituloS" 
                        titulo="Transporte Escolar" 
                        Subtitulo2="A continuación se presenta el transporte escolar oficial de nuestro establecimiento.-"
                        icono="fas fa-bus"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <h2 id="SubtituloS1">No hay Transporte Escolar aún</h2>
                    </div>
                </div>
                </div>
            )
        }
    };
}
export default Transporte_Escolar
