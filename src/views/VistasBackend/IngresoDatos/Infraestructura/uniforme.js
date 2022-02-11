import React, {Component} from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import BaseSelect from 'react-select';
import FixRequiered from '../../../../components/requieredSelect/requiered';
import '../../../../components/admision/admision.css'


const Select = props => (
    <FixRequiered
      {...props}
      SelectComponent={BaseSelect}
    />
  );

class Uniforme extends Component {

    constructor(props){
        super(props);
        this.state = {
            cargando: false,
            titulo: '',
            descripcion:'',
            tipo: '',
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
        data.append('id_identificador', this.state.tipo)
        data.append('id_colegio', this.state.colegio)

        fetch('https://escuelasespeciales.cl/infraestructura/create',{
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
                alert("Error al intentar ingresar el dato, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Dato agregada satisfactoriamente")
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

    handleSelect = (event, actionMeta) => {
        this.state.tipo = event.value
        this.setState({   
            [actionMeta.name]: this.state.tipo
        })
    }
 

    render () {
        const {cargando} = this.state;
        const opcionesimg = [
            {value: "2", label: "Uniforme"},
            {value: "3", label: "Transporte"},
        ]

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
            <div className="AdmisionWrapper">
                <h1 id="TituloDatos">Ingreso de Información </h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                    <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                        <h1>Todos los campos son requeridos</h1>

                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Nombre del Uniforme/Transporte</label>
                                <input onChange={this.handleChange} 
                                    required
                                    type="text" 
                                    className="AdmisionForm-input" 
                                    placeholder="Nombre" 
                                    name="titulo" 
                                    value={this.state.titulo}
                                />
                            <label className="AdmisionForm-label">Tipo</label>
                                <Select  
                                    required
                                    onChange={this.handleSelect}
                                    placeholder="Uniforme/Transporte" 
                                    isdisabled={true} 
                                    isLoading={false}  
                                    className="basic-multi-select" 
                                    options={opcionesimg} 
                                    name="tipo"
                                />
                                    
                        </div>
   
                    <div className="form-inputs">
                        <label className="form-label">Descripción*</label>
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
                        <label className="AdmisionForm-label">Imagen/Foto</label>
                            <p></p>
                            <input 
                                onChange={this.handleOnFileChange}
                                required 
                                multiple={false}
                                ref={(input) => {this.inputElement = input;}} 
                                type="file" 
                                accept='.jpeg, .jpg, .png, .gif'
                                name="archivo"
                                id="ArchivoBlanco"
                            />
                    </div>

                        <Button 
                            disabled= {cargando}
                            type ="submit"  
                            value="imagen" 
                            className="AdmisionForm-input-btn">
                                {cargando && <span><Icon className="fas fa-cloud-upload-alt"/>
                                    Cargando Uniforme/Transporte</span>}
                                {!cargando && <span><Icon className="fas fa-plus"/>
                                    Agregar Uniforme/Transporte</span>}
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

export default Uniforme;







