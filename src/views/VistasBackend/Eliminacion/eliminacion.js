import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'

class eliminacion extends Component{

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
                    <h1 id="TituloDatos2">Eliminación de Datos {Col}</h1>
                    <h1 id="TituloDatos">Elije una opción</h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                <form id="AdmisionWidth" className="form">
                    <h1>Elije que deseas Eliminar</h1>
                    <Button type ="button" href="/datos/eliminacion/guias" id="EliminacionBoton"><Icon className="fas fa-book-open"/>Eliminar Guias</Button>
                    <Button type ="button" href="/datos/eliminacion/noticias" id="EliminacionBoton"><Icon className="fas fa-newspaper"/>Eliminar Noticias</Button>
                    <Button type ="button" href="/datos/eliminacion/informacion_destacada" id="EliminacionBoton"><Icon className="fas fa-info-circle"/>Eliminar Actividad</Button>
                    <Button type ="button" href="/datos/eliminacion/evento" id="EliminacionBoton"><Icon className="fas fa-calendar-week"/>Eliminar Evento</Button>
                    <Button type ="button" href="/datos/eliminacion/documentos" id="EliminacionBoton"><Icon className="fas fa-file-alt"/>Eliminar Documento Oficial</Button>
                    <Button type ="button" href="/datos/eliminacion/infraestructura" id="EliminacionBoton"><Icon className="fas fa-school"/>Eliminar Infraestructura</Button>
                    <Button type ="button" href="/datos/eliminacion/uniforme_transporte" id="EliminacionBoton"><Icon className="fas fa-image"/>Eliminar Uniforme/Transporte</Button>
                    <Button type ="button" href="/datos/eliminacion/equipo" id="EliminacionBoton"><Icon className="far fa-address-book"/>Eliminar Profesional de la Portada</Button>
                    {/* <Button type ="button" href="/datos/eliminacion/seguro_escolar" id="EliminacionBoton"><Icon className="fas fa-times-circle"/>Eliminar Seguro Escolar</Button> */}
                    <p>---</p><h1>Datos de guías, al eliminar un dato de estos, el dato mismo desaparecera de todas las guías vinculadas a él</h1>
                    <Button type ="button" href="/datos/eliminacion/curso" id="EliminacionBoton"><Icon className="fas fa-pencil-alt"/>Eliminar Curso</Button>
                    <Button type ="button" href="/datos/eliminacion/asignatura" id="EliminacionBoton"><Icon className="fas fa-book"/>Eliminar Asignatura</Button>
                    <p>---</p><h1>Eliminación de cargos</h1>
                    <Button type ="button" href="/datos/eliminacion/cargo" id="EliminacionBoton"><Icon className="fas fa-user-graduate"/>Eliminar Cargo</Button>
                </form>
            </div>
            <p>Sesión de {localStorage.getItem('correo')}</p>

            </div>
            </div>
            </div>
            )
        }
}

export default eliminacion