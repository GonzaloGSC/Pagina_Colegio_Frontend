import React, {Component} from 'react'
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

class Guias extends Component {

    constructor(props){
        super(props);
        this.state = {
            cargando: false,
            titulo: '',
            curso: [],
            jornada: [],
            profesor: [],
            ramo:[],
            descripcion:'',
            archivo: null,
            OC: [''],
            OJ:[''],
            OP: [''],
            OA:[''],
            rol: localStorage.getItem('rol'),
            correo: localStorage.getItem('correo'),
            colegio: localStorage.getItem('colegio')
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        this.setState({ cargando: true})
        event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.titulo);
        data.append('curso', JSON.stringify(this.state.curso));
        data.append('jornada',JSON.stringify(this.state.jornada));
        data.append('profesor',JSON.stringify(this.state.profesor));
        data.append('ramo', JSON.stringify(this.state.ramo));
        data.append('descripcion', this.state.descripcion);
        data.append('archivo', this.state.archivo); 
        data.append('id_colegio', this.state.colegio)

        fetch('https://escuelasespeciales.cl/guia_pedagogica/create',{
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
                    titulo: '',
                    curso: [],
                    jornada: [],
                    profesor: [],
                    ramo:[],
                    descripcion:'',
                    archivo: null,
                    cargando: false,
                })
                alert(data.message)
                return Promise.reject(error);
            }
            alert('Guia ingresada exitosamente')
            this.setState({
                titulo: '',
                curso: [],
                jornada: [],
                profesor: [],
                ramo:[],
                descripcion:'',
                archivo: null,
                cargando: false,
            })
        })
        .catch(err => {console.log(err)})
    };
    

    handleChange = (event, actionMeta) => {
        if(Array.isArray(event)){   
            const valorNombre = event.map((item) => item.label)
            const valorid = event.map((item) => item.value)
            const ValorNombre = []
            for( var i = 0; i<valorNombre.length; i++){
                ValorNombre[i] = {"id":valorid[i],"nombre":valorNombre[i]}
            }
            this.setState({   
                //nombre del arrego: id y nombre del objeto
                [actionMeta.name]: ValorNombre
            })
        }
        else{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    };

    handleOnFileChange = (event) => {
        let file = event.target.files[0];
        this.setState({
            archivo : file
        })
    }
    
    componentDidMount(){
        fetch('https://escuelasespeciales.cl/curso/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));

            fetch('https://escuelasespeciales.cl/jornada/list?id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OJ:data}));

            fetch('https://escuelasespeciales.cl/profesor_guias/list?nombre=&email='+this.state.correo+'&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OP:data}));

            fetch('https://escuelasespeciales.cl/asignatura/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OA:data}));
    }
 

    render () {
        const {OC, OJ,OP, OA, cargando} = this.state;


        const opcionescurso = OC.map(item =>
            ({value: item.id, label: item.nombre})
            );
        
        const opcionesjornada = OJ.map(item =>
            ({value: item.id, label: item.nombre})
            );
        
        const opcionesprofesor = OP.map(item =>
            ({value: item.id, label: item.nombre})
            );
        
        const opcionesramo = OA.map(item =>
            ({value: item.id, label: item.nombre})
            );

    if(this.state.rol === '1'){
        return (
            <div className="ContenedorGeneral">
            <div className="AdmisionContainer">
                <Button type ="button" href="/datos/ingreso" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    <h1 id="TituloDatos">Ingreso Guías Pedagógicas </h1>
                    <div id="IngresoDatos" className="AdmisionFormContainer">
                        <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                            <h1>Todos los campos son requeridos</h1>
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Nombre de la guía*</label>
                                    <input onChange={this.handleChange} 
                                        required
                                        type="text" 
                                        className="AdmisionForm-input" 
                                        placeholder="Nombre" 
                                        name="titulo" 
                                    />
                                        
                            </div>
           
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Curso</label>
                                <Select onChange={this.handleChange} 
                                        required
                                        isMulti 
                                        placeholder="Selecciona un curso" 
                                        isdisabled={false} 
                                        isLoading={false} 
                                        isClearable={true} 
                                        isRtl={false} 
                                        isSearchable={true} 
                                        className="basic-multi-select" 
                                        options={opcionescurso} 
                                        name="curso"
                                        getOptionValue={option => option.value}
                                />
                            </div> 
    
                            
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Jornada</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije una Jornada" 
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesjornada} 
                                    name="jornada" />
                            </div>
                            
                            
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Profesor</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije un profesor(a)" 
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesprofesor} 
                                    name="profesor"/>
                            </div>
    
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Asignatura</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije una Asignatura"  
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesramo} 
                                    name="ramo"/>
                            </div>
                        
                            
                        <div className="form-inputs">
                            <label className="form-label">Descripción del archivo*</label>
                                <textarea 
                                    onChange={this.handleChange} 
                                    required 
                                    className="form-input-message" 
                                    placeholder="Descripción" 
                                    name="descripcion"/>
                        </div>
    
                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Archivo</label>
                            <p></p>
                                <input 
                                    onChange={this.handleOnFileChange}
                                    required 
                                    id="ArchivoBlanco"
                                    multiple={false}
                                    ref={(input) => {this.inputElement = input;}} 
                                    type="file" 
                                    accept='.pdf, .docx, .doc, .rtf, .cvs, .xls, .ppt'
                                    name="archivo"
                                />
                        </div>
    
                            <Button 
                                disabled= {cargando}
                                type ="submit"  
                                value="guia" 
                                className="AdmisionForm-input-btn">
                                    {cargando && <span><Icon className="fas fa-file-upload"/>
                                        Cargando Guía</span>}
                                    {!cargando && <span><Icon className="fas fa-plus"/>
                                        Agregar Guía</span>}
                            </Button>
                    </form>
                </div>
                <p>Sesión de {localStorage.getItem('correo')}</p>

            </div>
        </div>
        </div>
        
        )
    }else if(this.state.rol === '2'){
        return (
            <div className="ContenedorGeneral">
            <div className="AdmisionContainer">
                <Button type ="button" href="/datos/ingreso_profesores" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                <div className="AdmisionWrapper">
                    <h1 id="TituloDatos">Ingreso Guías Pedagógicas </h1>
                    <div id="IngresoDatos" className="AdmisionFormContainer">
                        <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                            <h1>Todos los campos son requeridos</h1>
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Nombre de la guía*</label>
                                    <input onChange={this.handleChange} 
                                        required
                                        type="text" 
                                        className="AdmisionForm-input" 
                                        placeholder="Nombre" 
                                        name="titulo" 
                                    />
                                        
                            </div>
           
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Curso</label>
                                <Select onChange={this.handleChange} 
                                        required
                                        isMulti 
                                        placeholder="Selecciona un curso" 
                                        isdisabled={false} 
                                        isLoading={false} 
                                        isClearable={true} 
                                        isRtl={false} 
                                        isSearchable={true} 
                                        className="basic-multi-select" 
                                        options={opcionescurso} 
                                        name="curso"
                                        getOptionValue={option => option.value}
                                />
                            </div> 
    
                            
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Jornada</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije una Jornada" 
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesjornada} 
                                    name="jornada" />
                            </div>
                            
                            
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Profesor (solo podrás elegirte a ti mismo)</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije un profesor(a)" 
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesprofesor} 
                                    name="profesor"/>
                            </div>
    
                            <div className='AdmisionForm-inputs'>
                                <label className="AdmisionForm-label">Asignatura</label>
                                <Select 
                                    required
                                    onChange={this.handleChange} 
                                    isMulti 
                                    placeholder="Elije una Asignatura"  
                                    isdisabled={false} 
                                    isLoading={false} 
                                    isClearable={true} 
                                    isRtl={false} 
                                    isSearchable={true} 
                                    className="basic-multi-select" 
                                    options={opcionesramo} 
                                    name="ramo"/>
                            </div>
                        
                            
                        <div className="form-inputs">
                            <label className="form-label">Descripción del archivo*</label>
                                <textarea 
                                    onChange={this.handleChange} 
                                    required 
                                    className="form-input-message" 
                                    placeholder="Descripción" 
                                    name="descripcion"/>
                        </div>
    
                        <div className='AdmisionForm-inputs'>
                            <label className="AdmisionForm-label">Archivo</label>
                            <p></p>
                                <input 
                                    onChange={this.handleOnFileChange}
                                    required 
                                    id="ArchivoBlanco"
                                    multiple={false}
                                    ref={(input) => {this.inputElement = input;}} 
                                    type="file" 
                                    accept='.pdf, .docx, .doc, .rtf, .cvs, .xls, .ppt'
                                    name="archivo"
                                />
                        </div>
    
                            <Button 
                                disabled= {cargando}
                                type ="submit"  
                                value="guia" 
                                className="AdmisionForm-input-btn">
                                    {cargando && <span><Icon className="fas fa-file-upload"/>
                                        Cargando Guía</span>}
                                    {!cargando && <span><Icon className="fas fa-plus"/>
                                        Agregar Guía</span>}
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
}

export default Guias;