import React from 'react'
import Tarjeta from '../../components/tarjetaprofesional/profesional';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_equipo_nazareno.png';
import '../../components/tarjetaprofesional/profesional.css'

class Equipo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/profesional_portada/list?id_colegio=2')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){
        
        if(this.state.arreglo.length !== 0){
            return (
                <div>
                    <Banner src={Imagen} text="Equipo"/>
                    <Titulo  id="TituloN" icono="far fa-address-book" titulo="Nuestros profesionales" Subtitulo2="A continuación se presenta el rol, área y trabajo que realiza cada uno de nuestros profesionales dentro de nuestra institución.-"/>
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <div className="ProfesionalColumn">
                            <div className="ProfesionalRow2">
                            {this.state.arreglo.map( objeto =>
                                        <div key={objeto.id}>
                                            <Tarjeta 
                                                titulo ={objeto.nombre}
                                                cargo ={objeto.cargo.nombre}
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
                    <Banner src={Imagen} text="Equipo"/>
                    <Titulo  id="TituloN" icono="far fa-address-book" titulo="Nuestros profesionales" Subtitulo2="A continuación se presenta el rol, área y trabajo que realiza cada uno de nuestros profesionales dentro de nuestra institución.-"/>
                <div className="ProfesionalContainer">
                    <div className="ProfesionalWrapper">
                        <h2 id="SubtituloN">No hay Profesionales aún</h2>
                    </div>
                </div>
                </div>
            )
        }
    };
}
export default Equipo
