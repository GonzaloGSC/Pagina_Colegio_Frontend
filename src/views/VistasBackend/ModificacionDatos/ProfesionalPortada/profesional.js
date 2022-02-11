import React from 'react'
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

class Equipo extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state = {
            nombre: '',
            descripcion: '',
            id: '',
            A: '',
            N:'',
            des: '',
            cargo: '',
            OC: [],
            OC2: [],
            archivo: null,
            colegio: localStorage.getItem('colegio')

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        if(this.state.nombre === "")
        {
            data.append('nombre', this.state.N)
        }
        else{
            data.append('nombre', this.state.nombre);
        }
        data.append('cargo', this.state.cargo)
        if(this.state.des === "")
        {
            data.append('descripcion', this.state.A)
        }
        else{
            data.append('descripcion', this.state.des);
        }
        const id = this.state.id
        let url = 'https://escuelasespeciales.cl/profesional_portada/update/'+id
        fetch(url, {
            method: 'PUT',
            headers: { 
                'authorization': `JWT ${localStorage.getItem('token')}`,
            },
            body: data,
        })
        .then(async response => { 
            const data = await response.json();
            if(!response.ok){
                const error = (data && data.message) || response.status;
                this.setState({
                    nombre: '',
                    id: ''
                })
                alert(data.message)
                return Promise.reject(error);
            }
            alert("Profesional modificado satisfactoriamente")
            this.setState({
                nombre: '',
                id: ''
            })
        })
        .catch(err => {console.log(err)})
    }

    handleOnFileChange = (event) => {
        let file = event.target.files[0];
        this.setState({
            archivo : file
        })
    }

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
    };

    handleSelect = (event, actionMeta) => {
        let cadena = event.label
        let indice = cadena.indexOf(" - ");
        this.state.nombre = cadena.substring(0, indice);
        this.state.id = event.value
        //Descripcion
        const D = this.state.descripcion.map(item=>item.descripcion)
        const I = this.state.descripcion.map(item=>item.id)
        for(var i=0; i<this.state.descripcion.length;i++){
            if(I[i] === event.value){
                this.state.A = D[i]
            }
        }
        this.setState({   
            [actionMeta.name]: this.state.nombre,
        })
        console.log(this.state.nombre)
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/profesional_portada/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));

        fetch('https://escuelasespeciales.cl/cargo/list?ordering=nombre&id_colegio='+this.state.colegio)
        .then(response => response.json())
        .then(data => this.setState({OC2:data}));
    }
    
        


    render(){
        const {OC, OC2} = this.state;

        const opcionesC = OC2.map(item =>
            ({value: item.id, label: item.nombre})
        );


        this.state.descripcion = OC.map(item=> 
            ({descripcion: item.descripcion, id: item.id})
        );

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.nombre+' - '+item.cargo.nombre})
        );


        const valor = this.state.A
    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Modificación de Profesionales</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos con * son requeridos</h1>
                                <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija al Profesional que desee modificar</label>
                                                    <Select  
                                                        onChange={this.handleSelect}
                                                        placeholder="Profesionales disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                            </div> 
                                    
                                    <div className='AdmisionForm-inputs'>
                                        <p>Escriba los nuevos datos</p>
                                        <label className="AdmisionForm-label">Nuevo nombre (no requerido)</label>
                                            <input 
                                                onChange={this.handleChange} 
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Nuevo Nombre" 
                                                name="nombre" 
                                                value={this.state.nombre}
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
                                        <label className="form-label">Nueva descripción*</label>
                                            <textarea 
                                                onChange={this.handleChange} 
                                                required 
                                                className="form-input-message" 
                                                placeholder="Nueva Descripción" 
                                                name="des"
                                                defaultValue={valor}
                                            />
                                    </div>

                                            <Button 
                                                type ="submit"  
                                                value="curso" 
                                                id="Amarillo"
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-retweet"/>
                                                        Modificar Profesional
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
