import React, { Component } from "react";
import {Button} from 'react-bootstrap'
import Icon from '../../../components/iconosBars'
import "../../../components/login/login.css";
import '../../../components/admision/admision.css'

export default class Login extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            correo: '',
            contraseña: '',
            isAuthenticated: localStorage.getItem('access')? true:false,
            token: localStorage.getItem('token'),
            rol: localStorage.getItem('rol'),
            email: localStorage.getItem('correo'),
            colegio: localStorage.getItem('colegio')
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event) {
        event.preventDefault()
        const correo = this.state.correo
        // const contraseña = this.state.contraseña
        fetch('https://escuelasespeciales.cl/login',{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: correo, password: this.state.contraseña})
        })
        .then(async response => { 
            const data = await response.json();
            if(!response.ok){
                const error = (data && data.message) || response.status;
                alert("Error al intentar ingresar, el correo o la clave estan incorrectos")
                return Promise.reject(error);
            }
            localStorage.setItem('access', data.success);
            localStorage.setItem('token', data.access);
            localStorage.setItem('rol', data.authenticatedUser.role);
            localStorage.setItem('correo', data.authenticatedUser.email);
            localStorage.setItem('colegio', data.authenticatedUser.id_colegio);
            this.setState({
                isAuthenticated: true,
                correo: data.email,
                contraseña: data.password,
                colegio: data.authenticatedUser.id_colegio
            })
        })
        .catch(error => {
            console.error('Hubo un error de credenciales: ', error)
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLogout = () =>{
        localStorage.removeItem('access');
        this.setState({
            isAuthenticated: false,
            token: localStorage.removeItem('token'),
            rol: localStorage.removeItem('rol'),
            email: localStorage.removeItem('correo'),
            colegio: localStorage.removeItem('colegio')
        })
        window.location.reload()
    }
 
  render(){
      
    var Col
 
    if(this.state.colegio === "1"){
        Col = "Santísima Trinidad"
    }else if(this.state.colegio === "2"){
        Col = "Jesús Nazareno"
    }else if(this.state.colegio === "3"){
        Col = "Monte Carmelo"
    }else if(this.state.colegio === "0"){
        Col = "Colegios, Sesión de Super Usuario"
    }

    var Rol

    if(localStorage.getItem('rol') === "1"){
        Rol = "Administrador"
    }else if(localStorage.getItem('rol') === "2"){
        Rol = "Profesores"
    }else if(localStorage.getItem('rol') === "0"){
        Rol = "Super Usuario"
    }


    if(this.state.isAuthenticated === false){
    return (
        <div className="ContenedorGeneral">
        <div className="LoginContainer">
            <Button id="boton-descargaN" href='/'><Icon className="fas fa-home"/>
                        Volver a Casa
            </Button>
            <div className="LoginWrapper">
                <div className="LoginColumn">
                    <h1 id="TituloDatos2" >Escuelas Especiales</h1>
                    <div className="LoginFormContainer">
                        <form onSubmit={this.handleLogin} className="LoginForm">
                            <h1>
                                Ingreso de funcionarios
                            </h1>
                            <div className="form-inputs">
                                <label className="form-label">Correo</label>
                                    <input 
                                        className="form-input" 
                                        required 
                                        pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                        autoFocus type="email" 
                                        onChange={this.handleChange} 
                                        name="correo"
                                    />                                      
                            </div>
                            
                            <div className="form-inputs">
                                <label className="form-label">Contraseña</label>
                                    <input 
                                        className="form-input" 
                                        type="password" 
                                        onChange={this.handleChange} 
                                        name="contraseña"
                                        // value={this.state.contraseña}
                                        
                                    />
                            </div>
                                <Button className="form-input-btn" block size="lg" type="submit" disabled={!this.state.contraseña}>
                                    Ingresa
                                </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );   
    }
    else{
        return (
            <div className="ContenedorGeneral">
            <div className="LoginContainer">
                <div className="LoginWrapper">
                    <h1 id="TituloDatos2">Bienvenido a la gestión de datos de {Col}</h1>
                    <h1 id="TituloDatos">"Sesión de {Rol}"</h1>
                    <div className="LoginColumn">
                        <Button id="botonLink" className="form-input-btn" block size="lg" href='/datos'>
                            Presione aquí para gestionar sus datos
                        </Button>
                    </div>
                    <Button id="LogoutBoton" onClick={this.handleLogout} href='/login_escuelas'><Icon className="fas fa-close"/>
                        Cerrar Sesión
                    </Button>
                </div>
            </div>
            </div>
        );
    }
    }

}