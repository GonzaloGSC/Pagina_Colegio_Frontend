import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'

class general extends Component {

    state = {
        rol: localStorage.getItem('rol'),
        email: localStorage.getItem('correo'),
        colegio: localStorage.getItem('colegio')

    }
    
    render(){

        var Col
    
            if(this.state.colegio === "1"){
                Col = "Santísima Trinidad"
            }else if(this.state.colegio === "2"){
                Col = "Jesús Nazareno"
            }else if(this.state.colegio === "3"){
                Col = "Monte Carmelo"
            }else{
                Col = "Colegios, Sesión de Super Usuario"
            }

        if(this.state.rol === '1')
        {
            return (
                <div className="ContenedorGeneral">
                <div className="AdmisionContainer">
                    <Button type ="button" href="/login_escuelas" id="AtrasBoton"><Icon className="fas fa-times-circle"/>Volver al inicio</Button>
                    <div className="AdmisionWrapper">
                        <h1 id="TituloDatos2">Gestión de Datos de {Col}</h1>
                        <h1 id="TituloDatos">Elije una opción</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                            <form id="AdmisionWidth" className="form">
                                <h1>Elije si deseas agregar o Eliminar/Modificar archivos y datos</h1>
                                <Button type ="button" href="/datos/ingreso" id="IngresoBoton"><Icon className="fas fa-plus"/>Agregar Datos o Documentos</Button>
                                <Button type ="button" href="/datos/eliminacion" id="EliminacionBoton"><Icon className="fas fa-times-circle"/>Eliminar Datos o Documentos</Button>
                                <Button type ="button" href="/datos/modificacion" id="ModificacionBoton"><Icon className="fas fa-retweet"/>Modificar Datos o Documentos</Button>
                                <h1>Aquí podrás gestionar los usuarios</h1>
                                <Button type ="button" href="/datos/gestion" id="UsuarioBoton"><Icon className="fas fa-user"/>Gestión de usuarios</Button>
                            </form>
                        </div>
                        <p>Sesión de {this.state.email}</p>
                    </div>
                </div>
                </div>
            
            )
        }else if(this.state.rol === '2')
        {
            return(
                <div className="ContenedorGeneral">
                <div className="AdmisionContainer">
                    <Button type ="button" href="/login_escuelas" id="AtrasBoton"><Icon className="fas fa-times-circle"/>Volver al inicio</Button>
                    <div className="AdmisionWrapper">
                        <h1 id="TituloDatos2">Gestión de Datos de {Col}</h1>
                        <h1 id="TituloDatos">Elije una opción</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                            <form id="AdmisionWidth" className="form">
                                <h1>Elije si deseas agregar o Eliminar/Modificar archivos y datos</h1>
                                <Button type ="button" href="/datos/ingreso_profesores" id="IngresoBoton"><Icon className="fas fa-plus"/>Agregar Datos o Documentos</Button>
                                <Button type ="button" href="/datos/eliminacion_profesores" id="EliminacionBoton"><Icon className="fas fa-times-circle"/>Eliminar Datos o Documentos</Button>
                                <Button type ="button" href="/datos/modificacion_profesores" id="ModificacionBoton"><Icon className="fas fa-retweet"/>Modificar Datos o Documentos</Button>
                            </form>
                        </div>
                        <p>Sesión de {this.state.email}</p>
                    </div>
                </div>
                </div>
            )

        }
        else{
            return(
            <div className="ContenedorGeneral">
                <h1>Hubo un error de credenciales, Porfavor vuelva a iniciar sesión nuevamente</h1>
            </div>)
        }
    }
}

export default general