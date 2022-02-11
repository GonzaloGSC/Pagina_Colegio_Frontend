import React from 'react'
import Tarjeta from '../../components/tarjetaprofesional/infraestructura';
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Imagen from '../../imagenes/banner_infraestructura_covid_santisima.png';
import '../../components/tarjetaprofesional/profesional.css'

class Covid extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/infraestructura/list?id_colegio=1&id_identificador=1')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        if(this.state.arreglo.length !== 0){
            return (
                <div>
                <Banner src={Imagen} text="Covid-19"/>
                    <Titulo  id="TituloS" 
                        titulo="Infraestructura Covid-19" 
                        Subtitulo2="Nuestro establecimiento ha sido reacondicionado para adaptarse a las medidas Covid-19"
                        icono="fas fa-chalkboard-teacher"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <div className="ProfesionalColumn">
                            <div className="ProfesionalRow">
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
                <Banner src={Imagen} text="Covid-19"/>
                    <Titulo  id="TituloS" 
                        titulo="Infraestructura Covid-19" 
                        Subtitulo2="Nuestro establecimiento ha sido reacondicionado para adaptarse a las medidas Covid-19"
                        icono="fas fa-chalkboard-teacher"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <h2 id="SubtituloS1">No hay Infraestructras aún</h2>
                    </div>
                </div>
                </div>
            )
        }
    };
}
export default Covid
