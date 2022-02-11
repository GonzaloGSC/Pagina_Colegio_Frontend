import React from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import Select from 'react-select';
import '../../../../components/admision/admision.css'

class Curso extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            id: '',
            tipo: '',
            OC: [],
            colegio: localStorage.getItem('colegio')

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        const curso = this.state
        const id = this.state.id
        let url = 'https://escuelasespeciales.cl/curso/update/'+id
        fetch(url, {
            method: 'PUT',
            headers: { 
                'authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(curso),
        })
        .then(async response => { 
            const data = await response.json();
            if(!response.ok){
                const error = (data && data.message) || response.status;
                this.setState({
                    nombre: '',
                    id: ''
                })
                alert("Error al intentar modificar el curso, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Curso modificado satisfactoriamente")
            this.setState({
                nombre: '',
                id: '',
            })
        })
        .catch(err => {console.log(err)})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSelect = (event, actionMeta) => {
        this.state.nombre = event.label
        this.state.id = event.value
        this.setState({   
            [actionMeta.name]: this.state.nombre
        })
    }

    handleSelect2 = (event, actionMeta) => {
        this.state.tipo = event.value
        this.setState({   
            [actionMeta.name]: this.state.tipo
        })
        console.log(this.state.tipo)
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/curso/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.nombre})
            );
        const opcionescurso2 = [
                {value: "basico", label: "Básico"},
                {value: "taller", label: "Taller"}
            ]

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Modificación de Cursos</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija el curso que desee modificar</label>
                                                    <Select  
                                                        onChange={this.handleSelect}
                                                        placeholder="Cursos disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                            </div> 
                                    
                                    <div className='AdmisionForm-inputs'>
                                        <p>Escriba el nuevo nombre</p>
                                        <label className="AdmisionForm-label">Nombre del curso*</label>
                                            <input 
                                                onChange={this.handleChange} 
                                                required 
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Curso" 
                                                name="nombre" 
                                                value={this.state.nombre}
                                            />
                                        <label className="AdmisionForm-label">Tipo*</label>
                                            <Select  
                                                required
                                                onChange={this.handleSelect2}
                                                placeholder="Taller/Básico" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionescurso2} 
                                                name="cursos"
                                            />
                                    </div>
                                            <Button 
                                                type ="submit"  
                                                value="curso" 
                                                id="Amarillo"
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-retweet"/>
                                                        Modificar curso
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
export default Curso;
