import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'

class modificacion extends Component {

    render(){         
        var Col
    
            if(localStorage.getItem('colegio') === "1"){
                Col = "Santísima Trinidad"
            }else if(localStorage.getItem('colegio') === "2"){
                Col = "Jesús Nazareno"
            }else if(localStorage.getItem('colegio') === "3"){
                Col = "Monte Carmelo"
            }else{
                Col = "Colegios, Sesión de Super Usuario"
            }
            return (
                <div className="ContenedorGeneral">
                    <div className="AdmisionContainer">
                        <Button type ="button" href="/datos" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                        <Button type ="button" href="/login_escuelas" id="AtrasBoton"><Icon className="fas fa-times-circle"/>Volver al inicio</Button>
                            <div className="AdmisionWrapper">
                                <h1 id="TituloDatos2">Modificación de Datos {Col}</h1>
                                <h1 id="TituloDatos">Elije una opción</h1>
                                    <div id="IngresoDatos" className="AdmisionFormContainer">
                                        <form id="AdmisionWidth" className="form">
                                            <h1>Elije que deseas modificar</h1>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/guias"><Icon className="fas fa-book-open"/>Modificar Guias</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/noticias"><Icon className="fas fa-newspaper"/>Modificar Noticias</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/informacion_destacada"><Icon className="fas fa-info-circle"/>Modificar Actividad</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/evento"><Icon className="fas fa-calendar-week"/>Modificar Evento</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/documentos"><Icon className="fas fa-file-alt"/>Modificar Documento Oficial</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/infraestructura"><Icon className="fas fa-school"/>Modificar Infraestructura</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/uniforme_transporte"><Icon className="fas fa-image"/>Modificar Uniforme/Transporte</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/equipo"><Icon className="far fa-address-book"/>Modificar Profesional de la Portada</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/postulaciones"><Icon className="fas fa-calendar-alt"/>Modificar Fechas de Postulaciones</Button>
                                                {/* <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/seguro_escolar"><Icon className="fas fa-retweet"/>Modificar Seguro Escolar</Button> */}
                                                <p>a</p><h1>Datos para ingresar guias: </h1>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/curso"><Icon className="fas fa-pencil-alt"/>Modificar Curso</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/asignatura"><Icon className="fas fa-book"/>Modificar Asignatura</Button>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/jornada"><Icon className="fas fa-clock"/>Modificar Jornada</Button>
                                                <p>a</p><h1>Modificación de cargo: </h1>
                                                <Button id="ModificacionBoton" type ="button" href="/datos/modificacion/cargo"><Icon className="fas fa-user-graduate"/>Modificar Cargo</Button>
                                        </form>
                                    </div>
                                        <p>Sesión de {localStorage.getItem('correo')}</p>

                            </div>
                </div>
            </div>
            )}
}

export default modificacion