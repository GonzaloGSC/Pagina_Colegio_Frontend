import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'


class ingreso extends Component {

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
                    <h1 id="TituloDatos2">Ingreso de Datos {Col}</h1>
                    <h1 id="TituloDatos">Elije una opción</h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                <form id="AdmisionWidth" className="form">
                    <h1>Elije que deseas agregar</h1>
                    <Button type ="button" href="/datos/ingreso/guias" id="IngresoBoton"><Icon className="fas fa-book-open"/>Agregar Guias</Button>
                    <Button type ="button" href="/datos/ingreso/noticias" id="IngresoBoton"><Icon className="fas fa-newspaper"/>Agregar Noticias</Button>
                    <Button type ="button" href="/datos/ingreso/informacion_destacada" id="IngresoBoton"><Icon className="fas fa-info-circle"/>Agregar Actividad</Button>
                    <Button type ="button" href="/datos/ingreso/evento" id="IngresoBoton"><Icon className="fas fa-calendar-week"/>Agregar Eventos</Button>
                    <Button type ="button" href="/datos/ingreso/documentos" id="IngresoBoton"><Icon className="fas fa-file-alt"/>Agregar Documentos</Button>
                    <Button type ="button" href="/datos/ingreso/infraestructura" id="IngresoBoton"><Icon className="fas fa-school"/>Agregar Infraestructuras Colegio/Covid</Button>
                    <Button type ="button" href="/datos/ingreso/uniforme_transporte" id="IngresoBoton"><Icon className="fas fa-image"/>Agregar Uniforme/Transporte</Button>
                    <Button type ="button" href="/datos/ingreso/equipo" id="IngresoBoton"><Icon className="far fa-address-book"/>Agregar Profesional</Button>
                    {/* <Button type ="button" href="/datos/ingreso/seguro_escolar" id="IngresoBoton"><Icon className="fas fa-plus"/>Agregar Seguro Escolar</Button> */}
                    <p>a</p><h1>Datos para ingresar guias: </h1>
                    <Button type ="button" href="/datos/ingreso/curso" id="IngresoBoton"><Icon className="fas fa-pencil-alt"/>Agregar Curso</Button>
                    <Button type ="button" href="/datos/ingreso/asignatura" id="IngresoBoton"><Icon className="fas fa-book"/>Agregar Asignatura</Button>
                    <p>a</p><h1>Ingreso de cargo </h1>
                    <Button type ="button" href="/datos/ingreso/cargo" id="IngresoBoton"><Icon className="fas fa-user-graduate"/>Agregar Cargo</Button>
                </form>
            </div>
            <p>Sesión de {localStorage.getItem('correo')}</p>
            </div>
            </div>
            </div>
            )    
    }
}

export default ingreso