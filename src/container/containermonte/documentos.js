import React, {Component} from 'react'
import Faq from '../../components/menufaq/faq';
import {Button} from 'react-bootstrap';
import IconSubtitle from '../../components/iconosBars';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_documentos_monte.png'
import '../../components/documentos/documentos.css';
import '../../components/menufaq/faq.css';



class documentos extends Component{
    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }
    
    componentDidMount(){
        fetch('https://escuelasespeciales.cl/documento_oficial/list?ordering=-id&id_colegio=3&id_identificador=0')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        if(this.state.arreglo.length !==0){
            return (
                <div>
                <Banner src={Imagen} text="Documentos"/> 
                    <Titulo id="TituloM" icono="fas fa-file-alt" titulo="Descarga de documentos" Subtitulo2="A continuación se presenta un listado de la documentación oficial de nuestra intitución, los cuales se encuentran disponibles para su descarga directa.-" />
                    <div className="DocumentosContainer">
                        <div className="DocumentosWrapper">
                            <div className="DocumentosColumn">
                                {this.state.arreglo.map( objeto =>
                                    <div className="DocumentosRow" key={objeto.id}>
                                        <div className="faq">
                                            <Faq
                                            coloricono="green"
                                            colorb="faqM"
                                            color="faqcolorM"  
                                            title = {objeto.titulo}
                                            content = {objeto.descripcion}
                                            />
                                        </div>
                                        <Button id="boton-descargaM" className="Button" size="lg" href= {"http://"+window.location.host+"/download/"+objeto.path} target="_blank"><IconSubtitle className="fas fa-download"/>Descargar</Button> 
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                <Banner src={Imagen} text="Documentos"/> 
                    <Titulo id="TituloM" icono="fas fa-file-alt" titulo="Descarga de documentos" Subtitulo2="A continuación se presenta un listado de la documentación oficial de nuestra intitución, los cuales se encuentran disponibles para su descarga directa.-" />
                    <div className="DocumentosContainer">
                        <div className="DocumentosWrapper">
                            <h2 id="SubtituloM">No hay Documentos aún</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default documentos