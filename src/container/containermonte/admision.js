import React, {useState, useEffect} from 'react'
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Admision from '../../components/admision/admisionMonte';
import AdmisionForm from '../../components/admision/admisionformmonte';
import Imagen from '../../imagenes/banner_admision_monte.png';

import '../../components/admision/admision.css';




function Admisionform() {

    const [año, setAño] = useState([]);

    useEffect(() => {
        fetch('https://escuelasespeciales.cl/tabla_postulacion/list?id_colegio=3')
            .then(response => response.json())
            .then(data => setAño(data));
    }, []);

    const admision = "Admisión "+año.map(item => item.titulo)
    const titulo = "Información de Admisión "+año.map(item => item.titulo)

    return (
        <div>
            <Banner src={Imagen} text={admision} />
            <Titulo id="TituloM" icono="fas fa-user-plus" titulo={titulo} Subtitulo2="A continuación se presenta un listado de la documentación requerida para realizar una postulación a nuestra institución, asi como la infomación de los periodos de dicho proceso.-" />
            <Admision 
                    color="SubtituloM"
                    iconoadmision="fas fa-file-alt"
                    subtituloadmision="Documentos Requeridos"
                    textoadmision1="Certificado de Nacimiento"
                    icono1="fas fa-file-alt"
                    textoadmision2="Informe Psicológico + Protocolo"   
                    icono2="fas fa-file-alt"   
                    textoadmision3="Formulario de Salud"   
                    icono3="fas fa-file-alt" 
                    textoadmision4="Documentación pedagógica / Certificado de estudios"   
                    icono4="fas fa-file-alt" 
                    textoadmision5="Antecedentes Médicos"   
                    icono5="fas fa-file-alt"   
                    iconoadmision2="fas fa-calendar"
                    subtituloadmision2="Fechas de Postulación"
                    textoadmision6="Estos documentos serán solicitados una vez aceptada la postulación. Además, es probable que necesite otros documentos mientras avance el proceso 
                    los cuales serán pedidos por nuestros profesionales."
            />
            <div className="AdmisionContainer">
                <div className="AdmisionWrapper">
                    <AdmisionForm/>
                </div>
            </div>    
        </div>
    )
}


export default Admisionform
