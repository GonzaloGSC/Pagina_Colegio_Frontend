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
            id: '',
            fecha_1_1: '',
            fecha_1_2: '',
            fecha_2_1: '',
            fecha_2_2: '',
            fecha_3_1: '',
            fecha_3_2: '',
            fecha_4_1: '',
            fecha_4_2: '',
            fech_1_1: '',
            fech_1_2: '',
            fech_2_1: '',
            fech_2_2: '',
            fech_3_1: '',
            fech_3_2: '',
            fech_4_1: '',
            fech_4_2: '',
            OC: [],
            colegio: localStorage.getItem('colegio')

        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.nombre);
        data.append('fecha_1_1', this.state.fech_1_1)
        data.append('fecha_1_2', this.state.fech_1_2)
        data.append('fecha_2_1', this.state.fech_2_1)
        data.append('fecha_2_2', this.state.fech_2_2)
        data.append('fecha_3_1', this.state.fech_3_1)
        data.append('fecha_3_2', this.state.fech_3_2)
        data.append('fecha_4_1', this.state.fech_4_1)
        data.append('fecha_4_2', this.state.fech_4_2)
        const ID = this.state.id[0]
        let url = 'https://escuelasespeciales.cl/tabla_postulacion/update/'+ID
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
            alert("Fechas modificadas satisfactoriamente")
            this.setState({
                nombre: '',
                id: ''
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
        this.state.name = event.value
        this.setState({   
            [actionMeta.name]: event.value
        })
    }


    componentDidMount(){
        fetch('https://escuelasespeciales.cl/tabla_postulacion/list?id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){

        const {OC} = this.state

        this.state.id = OC.map(item=> item.id)

        const opcionesC = [
            {value: 2020, label: 2020},
            {value: 2021, label: 2021},
            {value: 2022, label: 2022},
            {value: 2023, label: 2023},
            {value: 2024, label: 2024},
            {value: 2025, label: 2025},
            {value: 2026, label: 2026},
            {value: 2027, label: 2027},
            {value: 2028, label: 2028},
            {value: 2029, label: 2029},
            {value: 2030, label: 2030},
            {value: 2031, label: 2031},
        ]
        

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Modificación de Fechas de Postulación</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                
                                <div className='AdmisionForm-inputs'>
                                <p></p>
                                    <label className="AdmisionForm-label">Elija el Nuevo Año de la Preinscripción</label>
                                    {/* <label className="AdmisionForm-label">{Año}</label> */}

                                        <Select  
                                            required
                                            onChange={this.handleSelect}
                                            placeholder="Elija un año" 
                                            isdisabled={true} 
                                            isLoading={false}  
                                            className="basic-multi-select" 
                                            options={opcionesC} 
                                            name="nombre"
                                        />
                                </div> 
        
                                <div className='AdmisionForm-inputs'>
                                    <p>Elija las nuevas fechas</p>
                                        <label id="Separacion" className="AdmisionForm-label">Fechas de Preinscripción: *</label>
                                        <p></p>
                                        <label className="AdmisionForm-label">Inicio</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_1_1" 
                                                value={this.state.fech_1_1}
                                            />
                                        <label className="AdmisionForm-label">Término</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_1_2" 
                                                value={this.state.fech_1_2}
                                        />
                                    </div>

                                    <div className='AdmisionForm-inputs'>
                                        <label id="Separacion" className="AdmisionForm-label">Periodo 1: *</label>
                                        <p></p>
                                        <label className="AdmisionForm-label">Inicio</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_2_1" 
                                                value={this.state.fech_2_1}
                                        />
                                        <label className="AdmisionForm-label">Término</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_2_2" 
                                                value={this.state.fech_2_2}
                                        />
                                    </div>
                                    <div className='AdmisionForm-inputs'>
                                        <label id="Separacion" className="AdmisionForm-label">Periodo 2: *</label>
                                        <p></p>
                                        <label className="AdmisionForm-label">Inicio</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_3_1" 
                                                value={this.state.fech_3_1}
                                        />
                                        <label className="AdmisionForm-label">Término</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_3_2" 
                                                value={this.state.fech_3_2}
                                        />
                                    </div>
                                    <div className='AdmisionForm-inputs'>
                                        <label id="Separacion" className="AdmisionForm-label">Periodo 3: *</label>
                                        <p></p>
                                        <label className="AdmisionForm-label">Inicio</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_4_1" 
                                                value={this.state.fech_4_1}
                                        />
                                        <label className="AdmisionForm-label">Término</label>
                                            <input onChange={this.handleChange} 
                                                required
                                                type="date" 
                                                className="AdmisionForm-input" 
                                                name="fech_4_2" 
                                                value={this.state.fech_4_2}
                                        />
                                    </div>

                                            <Button 
                                                type ="submit"  
                                                value="curso" 
                                                id="Amarillo"
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-retweet"/>
                                                        Modificar Fechas
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
