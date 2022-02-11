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
            titulo: '',
            curso: [],
            jornada: [],
            profesor: [],
            ramo:[],
            descripcion:'',
            des: '',
            cur: [],
            jor: [],
            pro: [],
            ram: [],
            D1: '',
            C1: [],
            archivo: null,
            OC: [''],
            OJ:[''],
            OP: [''],
            OA:[''],
            OG:[],
            rol: localStorage.getItem('rol'),
            correo: localStorage.getItem('correo'),
            colegio: localStorage.getItem('colegio'),
            OP2: [],
            OG2: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleOnFileChange = this.handleOnFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit = (event) => {
        // event.preventDefault()
        let data = new FormData();
        data.append('titulo', this.state.titulo);
        data.append('curso', JSON.stringify(this.state.cur));
        data.append('jornada',JSON.stringify(this.state.jor));
        data.append('profesor',JSON.stringify(this.state.pro));
        data.append('ramo', JSON.stringify(this.state.ram));
        if(this.state.des === "")
        {
            data.append('descripcion', this.state.D1)
        }
        else{
            data.append('descripcion', this.state.des);
        }
        const id = this.state.id
        let url = 'https://escuelasespeciales.cl/guia_pedagogica/update/'+id

        fetch(url,{
            method: 'PUT',
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
                })
                alert(data.message)
                return Promise.reject(error);
            }
            alert('Guia Modificada exitosamente')
            this.setState({
                titulo: '',
                curso: [],
                jornada: [],
                profesor: [],
                ramo:[],
                descripcion:'',
                archivo: null,
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
    
    handleSelect = (event, actionMeta) => {
        this.state.titulo = event.label
        this.state.id = event.value
        //Descripcion
        const D = this.state.descripcion.map(item=>item.descripcion)
        const I = this.state.descripcion.map(item=>item.id)
        //Curso
        const C = this.state.curso.map(item=>item.curso)
        const I2 = this.state.curso.map(item=>item.id)
        for(var i=0; i<this.state.descripcion.length;i++){
            if(I[i] === event.value && I2[i] === event.value ){
                this.state.D1 = D[i]
                this.state.C1 = C[i]
            }
        }
        this.setState({   
            [actionMeta.name]: this.state.titulo
        })
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/curso/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OC:data}));

            fetch('https://escuelasespeciales.cl/jornada/list?id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OJ:data}));

            fetch('https://escuelasespeciales.cl/profesor_guias/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OP:data}));

            fetch('https://escuelasespeciales.cl/asignatura/list?ordering=nombre&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OA:data}));

            fetch('https://escuelasespeciales.cl/guia_pedagogica/list?id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OG:data}));

            fetch('https://escuelasespeciales.cl/guia_pedagogica/list?curso__nombre=&jornada__nombre=&profesor__email='+this.state.correo+'&profesor__nombre=&ramo__nombre=&titulo=&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OG2:data}));

            fetch('https://escuelasespeciales.cl/profesor_guias/list?nombre=&email='+this.state.correo+'&id_colegio='+this.state.colegio)
            .then(response => response.json())
            .then(data => this.setState({OP2:data}));

    }
 

    render () {
        const {OC, OJ,OP, OA, OG, OP2, OG2} = this.state;

        this.state.descripcion = OG.map(item=> 
            ({descripcion: item.descripcion, id: item.id})
        );

        this.state.curso = OG.map(item =>
            ({curso: item.curso, id: item.id })
        );

        const opcionesguias = OG.map(item =>
            ({value: item.id, label: item.titulo})
            );

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

        const opcionescorreo = OP2.map(item =>
            ({value: item.id, label: item.nombre})
            );

        const opcionescorreoguia = OG2.map(item=>
        ({value: item.id, label: item.titulo})
        );

        if(this.state.rol === '1'){
            return (
                <div className="ContenedorGeneral">
                <div className="AdmisionContainer">
                    <Button type ="button" href="/datos/modificacion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                    <div className="AdmisionWrapper">
                        <h1 id="TituloDatos">Modificación Guías Pedagógicas </h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                                <h1>Todos los campos son requeridos</h1>
        
                                <div className='AdmisionForm-inputs'>
                                    <p></p>
                                        <label className="AdmisionForm-label">Elija la Guía que desee modificar</label>
                                            <Select  
                                                onChange={this.handleSelect}
                                                placeholder="Guias Disponibles" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesguias} 
                                                name="curso"
                                            />
                                    </div> 
        
        
                                <div className='AdmisionForm-inputs'>
                                    <label className="AdmisionForm-label">Nombre de la guia*</label>
                                        <input onChange={this.handleChange} 
                                            required
                                            type="text" 
                                            className="AdmisionForm-input" 
                                            placeholder="Nuevo Nombre" 
                                            name="titulo" 
                                            value={this.state.titulo}
                                        />
                                            
                                </div>
                                <div className='AdmisionForm-inputs'>
                                <p>Curso, Jornada, Profesor y Asignatura se deben ingresar nuevamente</p>
        
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
                                            name="cur"
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
                                        name="jor" />
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
                                        name="pro"/>
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
                                        name="ram"/>
                                </div>
                            
                                
                            <div className="form-inputs">
                                <label className="form-label">Descripción de la Guía*</label>
                                    <textarea 
                                        onChange={this.handleChange} 
                                        required 
                                        className="form-input-message" 
                                        placeholder="Descripción" 
                                        name="des"
                                        defaultValue={this.state.D1}
                                    />
                            </div>
        
                                <Button 
                                    type ="submit"  
                                    value="guia" 
                                    id="Amarillo"
                                    className="AdmisionForm-input-btn">
                                        <Icon className="fas fa-retweet"/>
                                            Modificar Guía
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
                    <Button type ="button" href="/datos/modificacion_profesores" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                    <div className="AdmisionWrapper">
                        <h1 id="TituloDatos">Modificación Guías Pedagógicas </h1>
                        <div id="IngresoDatos" className="AdmisionFormContainer">
                            <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit} >
                                <h1>Todos los campos son requeridos</h1>
        
                                <div className='AdmisionForm-inputs'>
                                    <p></p>
                                        <label className="AdmisionForm-label">Elija la Guía que desee modificar</label>
                                            <Select  
                                                onChange={this.handleSelect}
                                                placeholder="Guias Disponibles" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionescorreoguia} 
                                                name="curso"
                                            />
                                    </div> 
        
        
                                <div className='AdmisionForm-inputs'>
                                    <label className="AdmisionForm-label">Nombre de la guia*</label>
                                        <input onChange={this.handleChange} 
                                            required
                                            type="text" 
                                            className="AdmisionForm-input" 
                                            placeholder="Nuevo Nombre" 
                                            name="titulo" 
                                            value={this.state.titulo}
                                        />
                                            
                                </div>
                                <div className='AdmisionForm-inputs'>
                                <p>Curso, Jornada, Profesor y Asignatura se deben ingresar nuevamente</p>
        
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
                                            name="cur"
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
                                        name="jor" />
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
                                        options={opcionescorreo} 
                                        name="pro"/>
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
                                        name="ram"/>
                                </div>
                            
                                
                            <div className="form-inputs">
                                <label className="form-label">Descripción de la Guía*</label>
                                    <textarea 
                                        onChange={this.handleChange} 
                                        required 
                                        className="form-input-message" 
                                        placeholder="Descripción" 
                                        name="des"
                                        defaultValue={this.state.D1}
                                    />
                            </div>
        
                                <Button 
                                    type ="submit"  
                                    value="guia" 
                                    id="Amarillo"
                                    className="AdmisionForm-input-btn">
                                        <Icon className="fas fa-retweet"/>
                                            Modificar Guía
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