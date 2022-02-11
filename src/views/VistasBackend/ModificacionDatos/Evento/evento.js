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

class Evento extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state = {
            nombre: '',
            descripcion: '',
            id: '',
            A: '',
            fecha: '',
            fech: '',
            des: '',
            OC: [],
            archivo: null,
            colegio: localStorage.getItem('colegio')

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
    }

    handleSubmit = (event) => {
        let data = new FormData();
        data.append('titulo', this.state.nombre);
        if(this.state.des === "")
        {
            data.append('descripcion', this.state.A)
        }
        else{
            data.append('descripcion', this.state.des);
        }
        data.append('fecha', this.state.fech)
        const id = this.state.id
        let url = 'https://escuelasespeciales.cl/evento/update/'+id
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
            alert("Evento modificado satisfactoriamente")
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSelect = (event, actionMeta) => {
        this.state.nombre = event.label
        this.state.id = event.value
        //Descripcion
        const D = this.state.descripcion.map(item=>item.descripcion)
        const I = this.state.descripcion.map(item=>item.id)
        //fecha
        const F = this.state.fecha.map(item=>item.fecha)
        const I2 = this.state.fecha.map(item=>item.id)
        for(var i=0; i<this.state.descripcion.length;i++){
            if(I[i] === event.value && I2[i] ===event.value){
                this.state.A = D[i]
                this.state.fech = F[i]
            }
        }
        this.setState({   
            [actionMeta.name]: this.state.nombre,
        })
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/evento/list?ordering=titulo&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        this.state.fecha = OC.map(item=>({
            fecha: item.fecha, id: item.id
        }))

        this.state.descripcion = OC.map(item=> 
            ({descripcion: item.descripcion, id: item.id})
        );

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.titulo})
            );

        const valor = this.state.A
        const fecha= this.state.fech
    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Modificación de Evento</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija el Evento que desee modificar</label>
                                                    <Select  
                                                        onChange={this.handleSelect}
                                                        placeholder="Eventos disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                            </div> 
                                    
                                    <div className='AdmisionForm-inputs'>
                                        <p>Escriba los nuevos datos</p>
                                        <label className="AdmisionForm-label">Nuevo nombre del Evento*</label>
                                            <input 
                                                onChange={this.handleChange} 
                                                required 
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Nuevo Nombre" 
                                                name="nombre" 
                                                value={this.state.nombre}
                                            />
                                    </div>

                                    <div className="form-inputs">
                                        <label className="form-label">Nueva descripción del Evento*</label>
                                            <textarea 
                                                onChange={this.handleChange} 
                                                required 
                                                className="form-input-message" 
                                                placeholder="Nueva Descripción" 
                                                name="des"
                                                defaultValue={valor}
                                            />
                                    </div>

                                    <div className='AdmisionForm-inputs'>
                                        <label className="AdmisionForm-label">Fecha del evento*</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech" 
                                                value={this.state.fech}
                                            />
                                    </div>

                                            <Button 
                                                type ="submit"  
                                                value="curso" 
                                                id="Amarillo"
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-retweet"/>
                                                        Modificar Evento
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
