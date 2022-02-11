import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'

class general extends Component {

    state = {
        rol: localStorage.getItem('rol'),
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

            return (
                <div className="ContenedorGeneral">
                    <div className="AdmisionContainer">
                        <Button type ="button" href="/datos" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                        <Button type ="button" href="/login_escuelas" id="AtrasBoton"><Icon className="fas fa-times-circle"/>Volver al inicio</Button>
                        <div className="AdmisionWrapper">
                            <h1 id="TituloDatos2">Gestión de Usuarios {Col}</h1>
                            <h1 id="TituloDatos">Elije una opción</h1>
                            <div id="IngresoDatos" className="AdmisionFormContainer">
                                <form id="AdmisionWidth" className="form">
                                    <h1>Elije si deseas agregar o Eliminar/Modificar usuarios</h1>
                                    <Button type ="button" href="/datos/gestion/registro_usuario" id="IngresoBoton"><Icon className="fas fa-user-plus"/>Agregar un nuevo usuario</Button>
                                    <Button type ="button" href="/datos/gestion/eliminacion_usuario" id="EliminacionBoton"><Icon className="fas fa-user-times"/>Eliminar usuario</Button>
                                    <Button type ="button" href="/datos/gestion/modificacion_usuario" id="ModificacionBoton"><Icon className="fas fa-user-edit"/>Modificar usuario</Button>
                                </form>
                            </div>
                            <p>Sesión de {localStorage.getItem('correo')}</p>
                            

                        </div>
                    </div>
                </div>
            
            )
    }
}

export default general

