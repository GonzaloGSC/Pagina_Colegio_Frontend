import React, {Component} from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../../components/admision/admision.css'

class Evento extends Component {

    constructor(props){
        super(props);
        this.state = {
            titulo: '',
            descripcion:'',
            fecha: '',
            colegio: localStorage.getItem('colegio')

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.titulo);
        data.append('descripcion', this.state.descripcion);
        data.append('fecha', this.state.fecha); 
        data.append('id_colegio', this.state.colegio)

        fetch('https://escuelasespeciales.cl/evento/create',{
            method: 'POST',
            headers: {
                'authorization': `JWT ${localStorage.getItem('token')}`,
            },
            body: data
        })
        .then(async response => { 
            const data = await response.json();
            if(!response.ok){
                const error = (data && data.message) || response.status;
                this.setState({
                    titulo: '',
                    descripcion:'',
                    archivo: null,
                })
                alert("Error al intentar ingresar el evento, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Evento agregado satisfactoriamente")
            this.setState({
                titulo: '',
                descripcion:'',
                archivo: null,
            })
        })
        .catch(err => {console.log(err)})
    };
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnFileChange = (event) => {
        let file = event.target.files[0];
        this.setState({
            archivo : file
        })
    }
 

    render () {
    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
            <div className="AdmisionWrapper">
                <h1 id="TituloDatos">Ingreso Evento </h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                    <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                        <h1>Todos los campos son requeridos</h1>

                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Nombre de la Evento*</label>
                                <input onChange={this.handleChange} 
                                    required
                                    type="text" 
                                    className="AdmisionForm-input" 
                                    placeholder="Nombre (máximo 20 caracteres)" 
                                    name="titulo" 
                                    maxLength="20"
                                    value={this.state.titulo}
                                />
                        </div>
   
                    <div className="form-inputs">
                        <label className="form-label">Descripción del evento*</label>
                            <textarea 
                                onChange={this.handleChange} 
                                required 
                                className="form-input-message" 
                                placeholder="Descripción (máximo 50 caracteres)" 
                                name="descripcion"
                                maxLength="50"
                                value={this.state.descripcion}
                                />
                    </div>

                    <div className='AdmisionForm-inputs'>
                        <label className="AdmisionForm-label">Fecha del evento*</label>
                            <input onChange={this.handleChange} 
                                required
                                type="date" 
                                className="AdmisionForm-input" 
                                name="fecha" 
                                value={this.state.fecha}
                            />
                    </div>

                        <Button 
                            type ="submit"  
                            value="imagen" 
                            className="AdmisionForm-input-btn">
                                <Icon className="fas fa-plus"/>
                                    Agregar Evento
                        </Button>
                </form>
            </div>
            <p>Sesión de {localStorage.getItem('correo')}</p>

        </div>
    </div>
    </div>
    )
    }
}

export default Evento;



