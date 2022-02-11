import React from 'react'
import Icon from '../../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import Select from 'react-select';
import '../../../../components/admision/admision.css'

class Documento extends React.Component{
    
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
        let url = 'https://escuelasespeciales.cl/documento_oficial/destroy/'+curso
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
                alert(data.message)
                return Promise.reject(error);
            }
            alert("Documento eliminado satisfactoriamente")
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
        fetch('https://escuelasespeciales.cl/documento_oficial/list?ordering=titulo&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));
    }
    


    render(){
        const {OC} = this.state;

        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.titulo})
            );

    return (
        <div className="ContenedorGeneral">
        <div className="AdmisionContainer">
            <Button type ="button" href="/datos/eliminacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    
                    <h1 id="TituloDatos">Eliminación de Documento Oficial</h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                           
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                <h1>Todos los campos son requeridos</h1>

                                    <div className='AdmisionForm-inputs'>
                                            <p></p>
                                                <label className="AdmisionForm-label">Elija El Documento Oficial que desea eliminar*</label>
                                                    <Select  
                                                        onChange={this.handleChangeSelect}
                                                        placeholder="Documentos disponibles" 
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
                                                Eliminar Documento
                                    </Button>
                            </form>
                        </div>
                        <p>Sesión de {localStorage.getItem('correo')}</p>

                </div>
            </div>
            </div>
    )}
}

export default Documento