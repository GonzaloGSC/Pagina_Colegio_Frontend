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

class Equipo extends Component {

    constructor(props){
        super(props);
        this.state = {
            cargando: false,
            titulo: '',
            descripcion:'',
            cargo: '',
            archivo: null,
            colegio: localStorage.getItem('colegio'),
            OC: [],

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleSubmit = (event) => {
        this.setState({ cargando: true})
        event.preventDefault()
        let data = new FormData();
        data.append('nombre', this.state.titulo);
        data.append('cargo', this.state.cargo)
        data.append('descripcion', this.state.descripcion);
        data.append('imagen', this.state.archivo); 
        data.append('id_colegio', this.state.colegio)


        fetch('https://escuelasespeciales.cl/profesional_portada/create',{
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
                    cargo: '',
                    archivo: null,
                    cargando: false,
                })
                alert("Error al intentar ingresar el profesional, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Profesional agregado satisfactoriamente")
            this.setState({
                titulo: '',
                descripcion:'',
                cargo: '',
                archivo: null,
                cargando: false,
            })
        })
        .catch(err => {console.log(err)})
    };

    handleChangeSelect = (event, actionMeta) => {
        this.state.cargo = event.value
        this.setState({   
            [actionMeta.name]: this.state.cargo
        })
    }
    

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
 
    componentDidMount(){
        fetch('https://escuelasespeciales.cl/cargo/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
        }   
 
    render () {

        const {OC, cargando} = this.state;


        const opcionesC = OC.map(item =>
            ({value: item.id, label: item.nombre})
            );

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
            <div className="AdmisionWrapper">
                <h1 id="TituloDatos">Ingreso Profesional/Descripción Cargo</h1>
                <div id="IngresoDatos" className="AdmisionFormContainer">
                    <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                        <h1>Los campos con * son requeridos</h1>

                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Nombre del Profesional</label>
                                <input onChange={this.handleChange} 
                                    // required
                                    type="text" 
                                    className="AdmisionForm-input" 
                                    placeholder="Nombre" 
                                    name="titulo" 
                                    value={this.state.titulo}
                                />
                        </div>

                             <div className='AdmisionForm-inputs'>
                                 <label className="AdmisionForm-label">Cargo*</label>
                                  <Select 
                                        onChange={this.handleChangeSelect} 
                                        required
                                        placeholder="Selecciona un cargo" 
                                        isdisabled={false} 
                                        isLoading={false} 
                                        isRtl={false} 
                                        isSearchable={true} 
                                        className="basic-multi-select" 
                                        options={opcionesC} 
                                        name="cargo"
                                        isClearable={false}
                                />
                        </div>        
   
                    <div className="form-inputs">
                        <label className="form-label">Descripcion del profesional y/o cargo*</label>
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
                            disabled={cargando}
                            type ="submit"  
                            value="imagen" 
                            className="AdmisionForm-input-btn">
                                {cargando && <span><Icon className="fas fa-cloud-upload-alt"/>
                                    Cargando Profesional</span>}
                                {!cargando && <span><Icon className="fas fa-plus"/>
                                    Agregar Profesional</span>}
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

export default Equipo;



