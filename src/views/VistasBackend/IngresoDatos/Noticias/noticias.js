import React, {Component} from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import '../../../../components/admision/admision.css'

class Noticias extends Component {

    constructor(props){
        super(props);
        this.state = {
            cargando: false,
            titulo: '',
            descripcion:'',
            archivo: null,
            colegio: localStorage.getItem('colegio')

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        this.setState({ cargando: true})
        event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.titulo);
        data.append('descripcion', this.state.descripcion);
        data.append('imagen', this.state.archivo); 
        data.append('id_colegio', this.state.colegio)

        fetch('https://escuelasespeciales.cl/noticia/create',{
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
                    cargando: false,
                })
                alert("Error al intentar ingresar la noticia, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Noticia agregada satisfactoriamente")
            this.setState({
                titulo: '',
                descripcion:'',
                archivo: null,
                cargando: false,
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
        const {cargando} = this.state;

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
            <div className="AdmisionWrapper">
                <h1 id="TituloDatos">Ingreso Noticias </h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                    <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                        <h1>Todos los campos son requeridos</h1>

                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Nombre de la Noticia*</label>
                                <input onChange={this.handleChange} 
                                    required
                                    type="text" 
                                    className="AdmisionForm-input" 
                                    placeholder="Nombre" 
                                    name="titulo" 
                                    value={this.state.titulo}
                                />
                        </div>
   
                    <div className="form-inputs">
                        <label className="form-label">Descripción de la Noticia*</label>
                            <textarea 
                                onChange={this.handleChange} 
                                required 
                                className="form-input-message" 
                                placeholder="Descripción" 
                                name="descripcion"
                                value={this.state.descripcion}
                                />
                    </div>

                    <div className='AdmisionForm-inputs'>
                        <label className="AdmisionForm-label">Imagen</label>
                            <p></p>
                            <input 
                                onChange={this.handleOnFileChange}
                                required 
                                id="ArchivoBlanco"
                                multiple={false}
                                ref={(input) => {this.inputElement = input;}} 
                                type="file" 
                                accept='.jpeg, .jpg, .png, .gif'
                                name="archivo"
                            />
                    </div>

                        <Button 
                            disabled= {cargando}
                            type ="submit"  
                            value="imagen" 
                            className="AdmisionForm-input-btn">
                                {cargando && <span><Icon className="fas fa-cloud-upload-alt"/>
                                    Cargando Noticia</span>}
                                {!cargando && <span><Icon className="fas fa-plus"/>
                                    Agregar Noticia</span>}
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

export default Noticias;



