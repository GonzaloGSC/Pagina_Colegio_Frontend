import React,{Component} from 'react'
import {Button} from 'react-bootstrap';
import Faq from '../../components/menufaq/faq';
import IconSubtitle from '../../components/iconosBars';
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
// import Imagen from '../../imagenes/banner_documentos.jpg'
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
        fetch('https://escuelasespeciales.cl/seguro_escolar/list?ordering=-id&id_colegio=2')
            .then(response => response.json())
            .then(data => this.setState({arreglo:data}))
            .catch(error => {console.log(error)})
    }

    render(){
        return (
            <div>
                <Banner src={Imagen} text="Seguro Escolar"/> 
                <Titulo  id="TituloN" icono="fas fa-file-alt" titulo="Descarga de Seguro Escolar" Subtitulo2="A continuación se presentan el/los seguros escolares para el presente año.-" />
                <div className="DocumentosContainer">
                    <div className="DocumentosWrapper">
                        <div className="DocumentosColumn">
                            {this.state.arreglo.map( objeto =>
                                <div className="DocumentosRow" key={objeto.id}>
                                    <div className="faq">
                                        <Faq 
                                        title = {objeto.titulo}
                                        content = {objeto.descripcion}
                                        />
                                    </div>
                                    <Button id="boton-descarga" className="Button" size="lg" href= {"http://"+window.location.host+"/download/"+objeto.path} target="_blank"><IconSubtitle className="fas fa-download"/>Descargar</Button> 
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default documentos