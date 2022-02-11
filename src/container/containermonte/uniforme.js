import React from 'react'
import Tarjeta from '../../components/tarjetaprofesional/infraestructura';
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Imagen from '../../imagenes/banner_apoderados_monte.png';
import '../../components/tarjetaprofesional/profesional.css'

class Uniforme extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/infraestructura/list?id_colegio=3&id_identificador=2')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        if(this.state.arreglo.length !== 0){
            return (
                <div>
                <Banner src={Imagen} text="Nuestro Colegio"/>
                    <Titulo  id="TituloM" 
                        titulo="Uniforme Oficial" 
                        Subtitulo2="A continuación se presentan los uniformes oficiales de nuestro establecimiento.-"
                        icono="fas fa-tshirt"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <div className="ProfesionalColumn">
                            <div className="ProfesionalRow">
                            {this.state.arreglo.map( objeto =>
                                        <div key={objeto.id}>
                                            <Tarjeta 
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
                    <Titulo  id="TituloM" 
                        titulo="Uniforme Oficial" 
                        Subtitulo2="A continuación se presentan los uniformes oficiales de nuestro establecimiento.-"
                        icono="fas fa-tshirt"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <h2 id="SubtituloM1">No hay uniformes aún</h2>
                    </div>
                </div>
                </div>
            )
        }
    };
}
export default Uniforme
