import React from 'react'
import Tarjeta from '../../components/tarjetaprofesional/infraestructura';
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Imagen from '../../imagenes/banner_infraestructura_nazareno.png';
import '../../components/tarjetaprofesional/profesional.css'

class Infraestructura extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/infraestructura/list?id_colegio=2&id_identificador=0')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        if(this.state.arreglo.length !==0){
            return (
                <div>
                <Banner src={Imagen} text="Nuestro Colegio"/>
                    <Titulo 
                     id="TituloN" 
                        titulo="Infraestructura" 
                        Subtitulo2="Nuestro colegio esta ubicado en San Pablo 8996 en 
                                    la comuna de Pudahuel. El espacio que ocupamos ha sido mejorado
                                    a tráves de los años, actualmente contamos con las siguientes
                                    instalaciones:"
                        icono="fas fa-school"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <div className="ProfesionalColumn">
                            <div className="ProfesionalRow">
                            {this.state.arreglo.map( objeto =>
                                        <div key={objeto.id}>
                                            <Tarjeta 
                                                titulo ={objeto.titulo}
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
                    <Titulo 
                     id="TituloN" 
                        titulo="Infraestructura" 
                        Subtitulo2="Nuestro colegio esta ubicado en San Pablo 8996 en 
                                    la comuna de Pudahuel. El espacio que ocupamos ha sido mejorado
                                    a tráves de los años, actualmente contamos con las siguientes
                                    instalaciones:"
                        icono="fas fa-school"
                    />
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <h2 id="SubtituloN">No hay Infraestructuras aún</h2>
                    </div>
                </div>
                </div>
            )
        }
    };
}
export default Infraestructura
