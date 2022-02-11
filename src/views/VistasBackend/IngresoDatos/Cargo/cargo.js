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

class Cargo extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            OC: [],
            colegio: localStorage.getItem('colegio')

        };
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('nombre', this.state.nombre)
        data.append('id_colegio', this.state.colegio)
        fetch('https://escuelasespeciales.cl/cargo/create', {
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
                alert("Error al intentar ingresar el cargo, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Cargo agregado satisfactoriamente")
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

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/cargo/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.nombre})
            );

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Ingreso Cargo</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>
                                    <div className='AdmisionForm-inputs'>
                                        <label className="AdmisionForm-label">Nombre del Cargo*</label>
                                            <input 
                                                onChange={this.handleChange} 
                                                required 
                                                type="text" 
                                                className="AdmisionForm-input" 
                                                placeholder="Cargo" 
                                                name="nombre" 
                                                value={this.state.nombre}
                                            />
                                    </div>
                                            <Button 
                                                type ="submit"  
                                                value="curso" 
                                                className="AdmisionForm-input-btn">
                                                    <Icon className="fas fa-plus"/>
                                                        Agregar Cargo
                                            </Button>

                                            <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Cargos ya agregados</label>
                                                    <Select  
                                                        placeholder="Cargos disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="cargo"
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
export default Cargo;
