import React from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import Select from 'react-select';
import '../../../../components/admision/admision.css'

class Uniforme extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            OC: [],
            OC1: [],
            colegio: localStorage.getItem('colegio')
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        const curso = this.state.id
        let url = 'https://escuelasespeciales.cl/infraestructura/destroy/'+curso
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
                alert("Error al intentar eliminar el Uniforme o Transporte, la sesion expiro, vuelva a iniciar sesion nuevamente")
                return Promise.reject(error);
            }
            alert("Uniforme o Transporte eliminado satisfactoriamente")
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
        fetch('https://escuelasespeciales.cl/infraestructura/list?ordering=titulo&id_identificador=2&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
        fetch('https://escuelasespeciales.cl/infraestructura/list?ordering=titulo&id_identificador=3&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC1:data}));
    }
    


    render(){
        const {OC,OC1} = this.state;

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.titulo})
            );
        const opcionescurso1 = OC1.map(item =>
            ({value: item.id, label: item.titulo})
            );

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/eliminacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Eliminación de Uniforme</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>

                                    <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija Uniforme que desea eliminar*</label>
                                                    <Select  
                                                        onChange={this.handleChangeSelect}
                                                        placeholder="Uniforme disponibles" 
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
                                                Eliminar Uniforme
                                    </Button>   
                            </form>
                        </div>

                </div>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Eliminación de Transporte</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>

                                    <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija Transporte que desea eliminar*</label>
                                                    <Select  
                                                        onChange={this.handleChangeSelect}
                                                        placeholder="Transporte disponibles" 
                                                        isdisabled={true} 
                                                        isLoading={false}  
                                                        className="basic-multi-select" 
                                                        options={opcionescurso1} 
                                                        name="curso"
                                                    />
                                    </div> 

                                    <Button 
                                        type ="submit"  
                                        value="curso" 
                                        id="Rojo"
                                        className="AdmisionForm-input-btn">
                                            <Icon className="fas fa-times-circle"/>
                                                Eliminar Transporte
                                    </Button>   
                            </form>
                        </div>
                        <p>Sesión de {localStorage.getItem('correo')}</p>

                </div>
            </div>
            </div>
    )}
}

export default Uniforme