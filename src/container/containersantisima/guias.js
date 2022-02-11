import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import Faq from '../../components/menufaq/faq';
import IconSubtitle from '../../components/iconosBars';
import Select from 'react-select'
import Banner from '../../components/banners/banner';
import Titulo from '../../components/titulo/titulo';
import Imagen from '../../imagenes/banner_guia_santisima.png';
import '../../components/documentos/documentos.css';
import '../../components/filtrov2/filtro.css'
import '../../components/menufaq/faq.css';


class guias extends Component{
    constructor(props){
        super(props);
        this.state = {
            arreglo: [],
            OC: [],
            OJ: [],
            OP: [],
            OA: [],
            curso: '',
            jornada: '',
            profesor: '',
            asignatura: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const curso = this.state.curso;
        const jornada = this.state.jornada;
        const profesor = this.state.profesor;
        const asignatura = this.state.asignatura;

        let url="https://escuelasespeciales.cl/guia_pedagogica/list?curso__nombre="+curso.replace(/ /g, "+")+"&jornada__nombre="+jornada.replace(/ /g, "+")+"&profesor__nombre="+profesor.replace(/ /g, "+")+"&ramo__nombre="+asignatura.replace(/ /g, "+")+'&ordering=titulo&id_colegio=1';

        fetch(url,)
            .then(response => response.json())
            .then(data => this.setState({arreglo: data}))
            .catch(error => {console.log(error)})
    }


    handleChangeSelect = (event, actionMeta) => {
        this.setState({   
            [actionMeta.name]: event.label
        })
    }
    
    componentDidMount(){
       
        fetch('https://escuelasespeciales.cl/curso/list?id_colegio=1&ordering=nombre')
            .then(response => response.json())
            .then(data => this.setState({OC:data}));

        fetch('https://escuelasespeciales.cl/jornada/list?id_colegio=1&ordering=nombre')
            .then(response => response.json())
            .then(data => this.setState({OJ:data}));

        fetch('https://escuelasespeciales.cl/profesor_guias/list?id_colegio=1&ordering=nombre')
            .then(response => response.json())
            .then(data => this.setState({OP:data}));

        fetch('https://escuelasespeciales.cl/asignatura/list?&id_colegio=1&ordering=nombre')
            .then(response => response.json())
            .then(data => this.setState({OA:data}));
    }
 

    render () {
        const {OC, OJ,OP, OA, } = this.state;


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

        const refreshPage = ()=>{
            window.location.reload();
        }

        if(this.state.arreglo.length !== 0){
            return (
                <div>
                    <Banner src={Imagen} text="Apoyo Pedagógico"/>
                    <Titulo
                     id="TituloS"  
                    icono="fas fa-book-open"
                    titulo="Guias para el aprendizaje"
                    Subtitulo2="A continuación se presentan las guías para realizar en el hogar
                                y documentos importantes separadas por curso, jornada, profesor(a) y asignatura."
                    />    
                    <div className="FiltroContainer">
                        <div className="FiltroWrapper">
                            <div className="FiltroColumn">
                                <div className="FiltroFormContainer">
                                    <form className="FiltroForm" onSubmit={this.handleSubmit} >
                                        <h1>
                                            Elige curso, jornada, profesor y asignatura para ver las guias disponibles!
                                        </h1>
                                    <div className="FiltroRow">
                                        <div className='FiltroForm-inputs'>                   
                                            <label className="FiltroForm-label">Curso</label>
                                            <Select  
                                                onChange={this.handleChangeSelect}
                                                placeholder="Elija un curso" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionescurso} 
                                                name="curso"
                                            />
                                        </div>
    
                                            <div className='FiltroForm-inputs'>                   
                                                <label className="FiltroForm-label">Jornada</label>
                                                <Select  
                                                    onChange={this.handleChangeSelect}
                                                    placeholder="Elija una jornada" 
                                                    isdisabled={true} 
                                                    isLoading={false}  
                                                    className="basic-multi-select" 
                                                    options={opcionesjornada} 
                                                    name="jornada"
                                                />                               </div> 
    
                                            <div className='FiltroForm-inputs'>                   
                                                <label className="FiltroForm-label">Profesor(a)</label>
                                                <Select  
                                                    onChange={this.handleChangeSelect}
                                                    placeholder="Elija un Profesor" 
                                                    isdisabled={true} 
                                                    isLoading={false}  
                                                    className="basic-multi-select" 
                                                    options={opcionesprofesor} 
                                                    name="profesor"
                                                />                              </div>
    
                                            <div className='FiltroForm-inputs'>                   
                                                <label className="FiltroForm-label">Asignatura</label>
                                                <Select  
                                                    onChange={this.handleChangeSelect}
                                                    placeholder="Elija una Asignatura" 
                                                    isdisabled={true} 
                                                    isLoading={false}  
                                                    className="basic-multi-select" 
                                                    options={opcionesramo} 
                                                    name="asignatura"
                                                />                                  
                                            </div>    
                                        </div>
                                        {/* <div className="FiltroBotonRow"> */}
                                            <Button type="submit" value="Boton" className="FiltroForm-input-btn"><IconSubtitle className="fas fa-search"/>Aplicar Filtros</Button>                        
                                            <p id="PC">---</p>
                                            <p id="PC2">(Hey, Cuidado! Si no elijes opciones se cargarán todas las guías)</p>
                                            <Button onClick={refreshPage} value="Boton" className="FiltroForm-Eliminate-btn"><IconSubtitle className="fas fa-times-circle"/>Limpiar</Button>                        
                                            {/* </div>     */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Aqui apareceran las guías filtradas */}
    
                    <div className="DocumentosContainer">
                        <div className="DocumentosWrapper">
                            <div className="DocumentosColumn">
                                {this.state.arreglo.map( objeto =>
                                    <div className="DocumentosRow" key={objeto.id}>
                                        <div className="faq">
                                            <Faq 
                                            coloricono="red"
                                            colorb="faqS"
                                            color="faqcolorS" 
                                            title = {objeto.titulo}
                                            content = {objeto.descripcion}
                                            />
                                        </div>
                                        <Button id="boton-descargaS" className="Button" size="lg" href= {"http://"+window.location.host+"/download/"+objeto.path} target="_blank"><IconSubtitle className="fas fa-download"/>Descargar</Button> 
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
    
                </div>
            )
        }else{
            return (
            <div>
                <Banner src={Imagen} text="Apoyo Pedagógico"/>
                <Titulo
                 id="TituloS"  
                icono="fas fa-book-open"
                titulo="Guias para el aprendizaje"
                Subtitulo2="A continuación se presentan las guías para realizar en el hogar
                            y documentos importantes separadas por curso, jornada, profesor(a) y asignatura."
                />    
                <div className="FiltroContainer">
                    <div className="FiltroWrapper">
                        <div className="FiltroColumn">
                            <div className="FiltroFormContainer">
                                <form className="FiltroForm" onSubmit={this.handleSubmit} >
                                    <h1>
                                        Elige curso, jornada, profesor y asignatura para ver las guias disponibles!
                                    </h1>
                                <div className="FiltroRow">
                                    <div className='FiltroForm-inputs'>                   
                                        <label className="FiltroForm-label">Curso</label>
                                        <Select  
                                            onChange={this.handleChangeSelect}
                                            placeholder="Elija un curso" 
                                            isdisabled={true} 
                                            isLoading={false}  
                                            className="basic-multi-select" 
                                            options={opcionescurso} 
                                            name="curso"
                                        />
                                    </div>

                                        <div className='FiltroForm-inputs'>                   
                                            <label className="FiltroForm-label">Jornada</label>
                                            <Select  
                                                onChange={this.handleChangeSelect}
                                                placeholder="Elija una jornada" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesjornada} 
                                                name="jornada"
                                            />                               </div> 

                                        <div className='FiltroForm-inputs'>                   
                                            <label className="FiltroForm-label">Profesor(a)</label>
                                            <Select  
                                                onChange={this.handleChangeSelect}
                                                placeholder="Elija un Profesor" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesprofesor} 
                                                name="profesor"
                                            />                              </div>

                                        <div className='FiltroForm-inputs'>                   
                                            <label className="FiltroForm-label">Asignatura</label>
                                            <Select  
                                                onChange={this.handleChangeSelect}
                                                placeholder="Elija una Asignatura" 
                                                isdisabled={true} 
                                                isLoading={false}  
                                                className="basic-multi-select" 
                                                options={opcionesramo} 
                                                name="asignatura"
                                            />                                  
                                        </div>    
                                    </div>
                                    {/* <div className="FiltroBotonRow"> */}
                                        <Button type="submit" value="Boton" className="FiltroForm-input-btn"><IconSubtitle className="fas fa-search"/>Aplicar Filtros</Button>                        
                                        <p id="PC">---</p>
                                        <p id="PC2">(Hey, Cuidado! Si no elijes opciones se cargarán todas las guías)</p>
                                        <Button onClick={refreshPage} value="Boton" className="FiltroForm-Eliminate-btn"><IconSubtitle className="fas fa-times-circle"/>Limpiar</Button>                        
                                        {/* </div>     */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Aqui apareceran las guías filtradas */}

                <div className="DocumentosContainer">
                    <div className="DocumentosWrapper">
                        <h2 id="SubtituloS1">No hay guías ni documentos aún</h2>
                    </div>
                </div>

            </div>
        )
        }
    }
}

export default guias