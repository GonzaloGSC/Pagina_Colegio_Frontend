import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import Faq from '../../components/menufaq/faq';
import IconSubtitle from '../../components/iconosBars';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_documentos_covid_nazareno.png'
import '../../components/documentos/documentos.css';
import '../../components/menufaq/faq.css';



class DocumentosCovid extends Component{
    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
        }
    }
    
    componentDidMount(){
        fetch('https://escuelasespeciales.cl/documento_oficial/list?ordering=-id&id_colegio=2&id_identificador=1')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){

        const {arreglo} = this.state

        if(arreglo.length !== 0){
            return (
                <div>
                 <Banner src={Imagen} text="Documentos Covid-19"/> 
                    <Titulo id="TituloN"  icono="fas fa-file-alt" titulo="Descarga de Documentos Covid-19" Subtitulo2="A continuación se presentan documentos relacionados con protocolos Covid-19, los cuales se encuentran disponibles para su descarga directa.-" />
                    <div className="DocumentosContainer">
                        <div className="DocumentosWrapper">
                            <div className="DocumentosColumn">
                                {this.state.arreglo.map( objeto =>
                                    <div className="DocumentosRow" key={objeto.id}>
                                        <div className="faq">
                                            <Faq 
                                            coloricono="1e88e5"
                                            colorb="faqN"
                                            color="faqcolorN" 
                                            title = {objeto.titulo}
                                            content = {objeto.descripcion}
                                            />
                                        </div>
                                        <Button id="boton-descargaS" className="Button" size="lg" href= {"http://"+window.location.host+"/download/"+objeto.path} target="_blank"><IconSubtitle className="fas fa-download"/>Descargar</Button> 
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
                 <Banner src={Imagen} text="Documentos Covid-19"/> 
                    <Titulo id="TituloN"  icono="fas fa-file-alt" titulo="Descarga de Documentos Covid-19" Subtitulo2="A continuación se presentan documentos relacionados con protocolos Covid-19, los cuales se encuentran disponibles para su descarga directa.-" />
                    <div className="DocumentosContainer">
                        <div className="DocumentosWrapper">
                            <h2 id="SubtituloN">No hay documentos aún</h2>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default DocumentosCovid
