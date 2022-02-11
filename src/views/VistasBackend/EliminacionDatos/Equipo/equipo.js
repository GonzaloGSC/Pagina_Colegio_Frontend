import React from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import Select from 'react-select';
import '../../../../components/admision/admision.css'

class Equipo extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            OC: [],
            colegio: localStorage.getItem('colegio')
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        const curso = this.state.id
        let url = 'https://escuelasespeciales.cl/profesional_portada/destroy/'+curso
        fetch(url, {
            method: 'DELETE',
            headers: { 
                'authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
        .then(async response => { 
            const data = await response.json();
            if(!response.ok){
                const error = (data && data.message) || response.status;
                alert("Error al intentar eliminar el Profesional, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Profesional eliminado satisfactoriamente")
        })
        .catch(err => {console.log(err)})
    }

    handleChangeSelect = (event, actionMeta) => {
        this.state.id = event.value
        this.setState({   
            [actionMeta.name]: this.state.id
        })
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/profesional_portada/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.nombre+" "+item.cargo.nombre})
            );

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/eliminacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Eliminación de Profesionales</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>

                                    <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija el Profesional que desea eliminar*</label>
                                                    <Select  
                                                        onChange={this.handleChangeSelect}
                                                        placeholder="Profesionales disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso} 
                                                        name="curso"
                                                    />
                                    </div> 

                                    <Button 
                                        type ="submit"  
                                        value="curso" 
                                        id="Rojo"
                                        className="AdmisionForm-input-btn">
                                            <Icon className="fas fa-times-circle"/>
                                                Eliminar Profesional
                                    </Button>   
                            </form>
                        </div>
                        <p>Sesión de {localStorage.getItem('correo')}</p>

                </div>
            </div>
            </div>
    )}
}

export default Equipo