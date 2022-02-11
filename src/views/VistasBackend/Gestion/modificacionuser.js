import React from 'react'
import Icon from '../../../components/iconosBars'
import {Button} from 'react-bootstrap'
import BaseSelect from 'react-select'; 
import FixRequiered from '../../../components/requieredSelect/requiered';
import '../../../components/admision/admision.css'

const Select = props => (
    <FixRequiered
      {...props}
      SelectComponent={BaseSelect}
    />
  );

class Modificacion extends React.Component{
    
    constructor(props) {
        super(props);   
        this.state = {
            nombre: '',
            email: '',
            id: '',
            apellido: '',
            rol: '',
            password: '',
            password2: '',
            OC: [],
            activo: true,
            colegio: localStorage.getItem('colegio')
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.password === this.state.password2){

            let data = new FormData();
            data.append('primer_nombre', this.state.nombre)
            data.append('apellidos', this.state.apellido)
            data.append('role', this.state.rol)
            data.append('password', this.state.password)
            data.append('email', this.state.email)
            data.append('is_active', this.state.activo)
            data.append('id_colegio', this.state.colegio)

            console.log(this.state.password)
            
            const id = this.state.id
            let url = 'https://escuelasespeciales.cl/usuario/update/'+id
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
                        email: '',
                        id: '',
                        apellido: '',
                        rol: '',
                        password: '',
                        password2: '',
                    })
                    alert(data.message)
                    return Promise.reject(error);
                }
                alert("Usuario modificado satisfactoriamente")
                event.target.reset();
                this.setState({
                    nombre: '',
                    email: '',
                    id: '',
                    apellido: '',
                    rol: '',
                    password: '',
                    password2: '',
                })
            })
            .catch(err => {console.log(err)})}
        else{
            alert("Las contraseñas no coinciden")
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleChangeSelect = (event, actionMeta) => {
        this.state.rol = event.value
        this.setState({
            [actionMeta.name]: this.state.rol
        })
    }


    handleSelect = (event, actionMeta) => {
        this.state.id = event.value
        this.state.email = event.label
        //Nombre
        const N = this.state.OC.map(item=>item.primer_nombre)
        const I1 = this.state.OC.map(item=>item.id)
        //Apellido
        const A = this.state.OC.map(item => item.apellidos)
        const I2 = this.state.OC.map(item => item.id)        
        for(var i=0; i<this.state.OC.length;i++){
            if(I1[i] === event.value && I2[i] === event.value){
                this.state.nombre = N[i]
                this.state.apellido = A[i]
            }
        }
        this.setState({   
            [actionMeta.name]: this.state.email
        })
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/usuario/list?id_colegio='+this.state.colegio,{
            headers: { 
                'authorization': `JWT ${localStorage.getItem('token')}`,
            },
        })
            .then(response => response.json())
            .then(data => this.setState({OC:data.users}));
    }
    


    render(){
        const {OC} = this.state;

        const opcionesrol = [
            { value: '1', label: 'Administrador' },
            { value: '2', label: 'Profesor/a' },
          ]

        const opcionesusuario = OC.map(item =>
            ({value: item.id, label: item.email})
            );

    return (
        <div className="ContenedorGeneral">
            <div className="AdmisionContainer">
                <Button type ="button" href="/datos/gestion" id="AtrasBoton"><Icon className="fas fa-chevron-left"/>Volver</Button>
                    <div className="AdmisionWrapper">
                        
                        <h1 id="TituloDatos">Modificación de datos de usuarios</h1>
                            <div id="IngresoDatos" className="AdmisionFormContainer">
                            
                                <form id="AdmisionWidth" className="form" onSubmit={this.handleSubmit}>
                                    <h1>Todos los campos son requeridos</h1>
                                    <div className='AdmisionForm-inputs'>
                                        <p></p>
                                            <label className="AdmisionForm-label">Elija al usuario que desee modificar</label>
                                                <Select  
                                                    onChange={this.handleSelect}
                                                    placeholder="Usuarios disponibles" 
                                                    isdisabled={true} 
                                                    isLoading={false}  
                                                    className="basic-multi-select" 
                                                    options={opcionesusuario} 
                                                    name="curso"
                                                />
                                        </div> 

                                        <div className="form-inputs">
                                        <p>Escriba los nuevos datos</p>
                                            <label className="form-label">Correo</label>
                                                <input 
                                                    className="form-input" 
                                                    required 
                                                    pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                                    autoFocus type="email" 
                                                    onChange={this.handleChange} 
                                                    name="email"
                                                    placeholder="ejemplo@email.com"
                                                    value={this.state.email}
                                                />                                      
                                        </div>
                                
                                        <div className='AdmisionForm-inputs'>
                                            <label className="AdmisionForm-label">Cambiar nombre*</label>
                                                <input 
                                                    onChange={this.handleChange} 
                                                    required 
                                                    type="text" 
                                                    className="AdmisionForm-input" 
                                                    placeholder="Nuevo Nombre" 
                                                    name="nombre" 
                                                    value={this.state.nombre}
                                                />
                                        </div>

                                        <div className='AdmisionForm-inputs'>
                                            <label className="AdmisionForm-label">Cambiar apellido*</label>
                                                <input 
                                                    onChange={this.handleChange} 
                                                    required 
                                                    type="text" 
                                                    className="AdmisionForm-input" 
                                                    placeholder="Nuevo Apellido" 
                                                    name="apellido" 
                                                    value={this.state.apellido}
                                                />
                                        </div>

                                        <div className='AdmisionForm-inputs'>
                                            <label className="AdmisionForm-label">Elija el rol</label>
                                                <Select  
                                                    onChange={this.handleChangeSelect}
                                                    placeholder="Rol del usuario" 
                                                    isdisabled={true} 
                                                    isLoading={false}  
                                                    className="basic-multi-select" 
                                                    options={opcionesrol} 
                                                    name="rol"
                                                />
                                        </div> 

                                        <div className="form-inputs">
                                        <label className="form-label">Contraseña</label>
                                            <input 
                                                required
                                                className="form-input" 
                                                type="password" 
                                                onChange={this.handleChange} 
                                                name="password"
                                                placeholder="Ingrese su nueva contraseña"
                                                // value={this.state.contraseña}
                                                
                                            />
                                        </div>

                                        <div className="form-inputs">
                                            <label className="form-label">Repita la contraseña</label>
                                                <input 
                                                    required
                                                    className="form-input" 
                                                    type="password" 
                                                    onChange={this.handleChange} 
                                                    name="password2"
                                                    placeholder="Repita su contraseña"
                                                    // value={this.state.contraseña2}
                                                    
                                                />
                                        </div>

                                                <Button 
                                                    type ="submit"  
                                                    value="curso" 
                                                    id="Amarillo"
                                                    className="AdmisionForm-input-btn">
                                                        <Icon className="fas fa-retweet"/>
                                                            Modificar Usuario
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
export default Modificacion;
