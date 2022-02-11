import React, { Component } from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../components/admision/admision.css'

class eliminacion extends Component{
    
    render(){

        var Col
        
            if(localStorage.getItem('colegio') === "1"){
                Col = "Santisima Trinidad"
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
                <h1 id="TituloDatos2">Eliminación de Guías de {Col}</h1>
            <div id="IngresoDatos" className="AdmisionFormContainer">
            <form id="AdmisionWidth" className="form">
                <h1>Presiona para eliminar guías</h1>
                <Button type ="button" href="/datos/eliminacion/guias" id="EliminacionBoton"><Icon className="fas fa-times-circle"/>Eliminar Guias</Button>
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