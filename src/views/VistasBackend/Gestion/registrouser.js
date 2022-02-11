import React, { Component } from "react";
import {Button} from 'react-bootstrap'
import Icon from '../../../components/iconosBars'
import BaseSelect from 'react-select';
import FixRequiered from '../../../components/requieredSelect/requiered';
import '../../../components/login/login.css'
import '../../../components/admision/admision.css'

const Select = props => (
    <FixRequiered
      {...props}
      SelectComponent={BaseSelect}
    />
  );

export class Register extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            email2: '',
            nombre: '',
            apellido: '',
            password: '',
            password2: '',
            Rol: '',
            colegio: localStorage.getItem('colegio')
        };
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister = e =>{
        e.preventDefault()
        if(this.state.password === this.state.password2 && this.state.email === this.state.email2){

            let data = new FormData();
            data.append('email', this.state.email);
            data.append('password', this.state.password);
            data.append('primer_nombre', this.state.nombre);
            data.append('apellidos', this.state.apellido);
            data.append('role', this.state.Rol);
            data.append('id_colegio', this.state.colegio);
            
            fetch('https://escuelasespeciales.cl/usuario/create',{
                method: 'POST',
                headers: {
                'authorization': `JWT ${localStorage.getItem('token')}`,
                },
                body: data
            }).then(async response => { 
                const data = await response.json();
                if(!response.ok){
                    const error = (data && data.message) || response.status;
                    this.setState({
                        email: '',
                        nombre: '',
                        apellido: '',
                        password: '',
                        password2: '',
                        Rol: '',    
                    })
                    alert(data.message)
                    return Promise.reject(error);
                }
                alert('Usuario creado exitosamente')
                e.target.reset();
                this.setState({
                    email: '',
                    nombre: '',
                    apellido: '',
                    password: '',
                    password2: '',
                    Rol: '',    
                })
            })
            .catch(err => {console.log(err)})
        }
        else{
            alert("Las contraseñas o correos no coinciden")
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeSelect = (event, actionMeta) => {
        this.state.Rol = event.value
        this.setState({   
            [actionMeta.name]: this.state.Rol
        })
    }

    render(){

        const opcionesrol = [
            { value: '1', label: 'Administrador' },
            { value: '2', label: 'Profesor/a' },
          ]

        return (
            <div className="ContenedorGeneral">
                <div className="AdmisionContainer">
                    <Button type ="button" href="/datos/gestion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                    <div className="LoginWrapper">
                        <div className="LoginColumn">
                            <h1 id="TituloDatos">Registro de usuarios</h1>
                            <div className="RegisterFormContainer">
                                <form onSubmit={this.handleRegister} className="LoginForm">
                                    <h1>
                                        Registro
                                    </h1>
                                    <div className="form-inputs">
                                        <label className="form-label">Nombre</label>
                                            <input 
                                                className="form-input" 
                                                required 
                                                type="text" 
                                                onChange={this.handleChange} 
                                                name="nombre"
                                                placeholder="Ingrese su nombre"
                                                // value={this.state.correo}
                                            />                                      
                                    </div>

                                    <div className="form-inputs">
                                        <label className="form-label">Apellido</label>
                                            <input 
                                                className="form-input" 
                                                required 
                                                type="text" 
                                                onChange={this.handleChange} 
                                                name="apellido"
                                                placeholder="Ingrese su apellido"
                                                // value={this.state.correo}
                                            />                                      
                                    </div>

                                    <div className='form-inputs'>     
                                        <label className="FiltroForm-label">Rol</label>
                                            <Select  
                                                required
                                                onChange={this.handleChangeSelect}
                                                placeholder="Elija el rol del usuario" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesrol} 
                                                name="Rol"
                                            />
                                    </div>

                                    <div className="form-inputs">
                                        <label className="form-label">Correo</label>
                                            <input 
                                                className="form-input" 
                                                required 
                                                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                                autoFocus type="email" 
                                                onChange={this.handleChange} 
                                                name="email"
                                                placeholder="ejemplo@email.com"
                                                // value={this.state.correo}
                                            />                                      
                                    </div>

                                    <div className="form-inputs">
                                        <label className="form-label">Repita su Correo</label>
                                            <input 
                                                className="form-input" 
                                                required 
                                                pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                                autoFocus type="email" 
                                                onChange={this.handleChange} 
                                                name="email2"
                                                placeholder="ejemplo@email.com"
                                                // value={this.state.correo}
                                            />                                      
                                    </div>
                                    
                                    <div className="form-inputs">
                                        <label className="form-label">Contraseña</label>
                                            <input 
                                                required
                                                className="form-input" 
                                                type="password" 
                                                onChange={this.handleChange} 
                                                name="password"
                                                placeholder="Ingrese su nueva contraseña"
                                                // value={this.state.password}
                                            />
                                    </div>

                                    <div className="form-inputs">
                                        <label className="form-label">Repita la contraseña</label>
                                            <input 
                                                required
                                                className="form-input" 
                                                type="password" 
                                                onChange={this.handleChange} 
                                                name="password2"
                                                placeholder="Repita su contraseña"
                                                // value={this.state.pasword2}
                                                
                                            />
                                    </div>
                                        <Button className="form-input-btn" block size="lg" type="submit" disabled={!this.state.password2}>
                                            Registrar
                                        </Button>
                                </form>
                            </div>
                            <p>Sesión de {localStorage.getItem('correo')}</p>

                        </div>
                    </div>
                </div>
            </div>
        );   
    }
}

export default Register
