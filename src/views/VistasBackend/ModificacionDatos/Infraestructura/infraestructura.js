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

class Infraestructura extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state = {
            nombre: '',
            descripcion: '',
            id: '',
            A: '',
            des: '',
            tipo: '',
            OC: [],
            archivo: null,
            colegio: localStorage.getItem('colegio')

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSelect2 = this.handleSelect2.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.nombre);
        data.append('id_identificador', this.state.tipo);
        if(this.state.des === "")
        {
            data.append('descripcion', this.state.A)
        }
        else{
            data.append('descripcion', this.state.des);
        }
        const id = this.state.id
        let url = 'https://escuelasespeciales.cl/infraestructura/update/'+id
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
            alert("Infraestructura modificada satisfactoriamente")
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

    handleSelect2 = (event, actionMeta) => {
        this.state.tipo = event.value
        this.setState({   
            [actionMeta.name]: this.state.tipo
        })
    }

    handleSelect = (event, actionMeta) => {
        this.state.nombre = event.label
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
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/infraestructura/list?ordering=titulo&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        this.state.descripcion = OC.map(item=> 
            ({descripcion: item.descripcion, id: item.id})
        );

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.titulo})
            );

        const opcionesimg = [
            {value: "0", label: "Colegio"},
            {value: "1", label: "Covid-19"},
        ]

        const valor = this.state.A
    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Modificación de Infraestructuras</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija la Infraestructura que desee modificar</label>
                                                    <Select  
                                                        onChange={this.handleSelect}
                                                        placeholder="Infraestructuras disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                            </div> 
                                    
                                    <div className='AdmisionForm-inputs'>
                                        <p>Escriba los nuevos datos</p>
                                        <label className="AdmisionForm-label">Nuevo nombre*</label>
                                            <input 
                                                onChange={this.handleChange} 
                                                required 
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Nuevo Nombre" 
                                                name="nombre" 
                                                value={this.state.nombre}
                                            />
                                        <label className="AdmisionForm-label">Tipo</label>
                                            <Select  
                                                required
                                                onChange={this.handleSelect2}
                                                placeholder="Tipo de Infraestructura" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesimg} 
                                                name="tipo"
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
                                                        Modificar Infraestructura
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
export default Infraestructura;
