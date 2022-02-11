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

class Curso extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            tipo: '',
            OC: [],
            colegio: localStorage.getItem('colegio')

        };
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('nombre', this.state.nombre)
        data.append('id_colegio', this.state.colegio)
        data.append('tipo', this.state.tipo)
        fetch('https://escuelasespeciales.cl/curso/create', {
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
                    nombre: ''
                })
                alert("Error al intentar ingresar curso, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("curso agregado satisfactoriamente")
            this.setState({
                nombre: ''
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
        this.state.tipo = event.value
        this.setState({   
            [actionMeta.name]: this.state.tipo
        })
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
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Ingreso Curso</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                    <div className='AdmisionForm-inputs'>
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
                                        <label className="AdmisionForm-label">Tipo</label>
                                            <Select  
                                                required
                                                onChange={this.handleSelect}
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
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-plus"/>
                                                        Agregar curso
                                            </Button>

                                            <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Cursos ya agregados</label>
                                                    <Select  
                                                        placeholder="Cursos disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                            </div> 
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
