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

class Asignatura extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            OA: [],
            colegio: localStorage.getItem('colegio')
        };
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('nombre', this.state.nombre)
        data.append('id_colegio', this.state.colegio)

        fetch('https://escuelasespeciales.cl/asignatura/create', {
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
                alert("Error al intentar ingresar Asignatura, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Asignatura agregada satisfactoriamente")
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
        // console.log(event.target.value)
    };

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/asignatura/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OA:data}));
    }    


    render(){
        const {OA} = this.state;

        const opcionesramo = OA.map(item =>
            ({value: item.id, label: item.nombre})
            );
    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    <h1 id="TituloDatos">Ingreso Asignatura</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                    <div className='AdmisionForm-inputs'>
                                        <label className="AdmisionForm-label">Nombre de la asignatura*</label>
                                            <input 
                                                required 
                                                onChange={this.handleChange}
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Asignatura" 
                                                name="nombre"
                                                value={this.state.nombre}
                                            />
                                    </div>
                                            <Button 
                                                type ="submit"  
                                                value="asignatura" 
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-plus"/>
                                                        Agregar Asignatura
                                            </Button>

                                            <div className='AdmisionForm-inputs'>
                                                <p></p>
                                                    <label className="AdmisionForm-label">Asignaturas ya agregadas</label>
                                                        <Select  
                                                            placeholder="Asignaturas disponibles" 
                                                            isdisabled={true} 
                                                            isLoading={false}  
                                                            isSearchable={true} 
                                                            className="basic-multi-select" 
                                                            options={opcionesramo} 
                                                            name="curso"
                                                            getOptionValue={option => option.value}
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
export default Asignatura;
