import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import Icon from '../iconosBars'
import {Button} from 'react-bootstrap'
import credentials from '../../credentials';
import BaseSelect from 'react-select';
import FixRequiered from '../../components/requieredSelect/requiered';
import './admision.css'

const Select = props => (
    <FixRequiered
      {...props}
      SelectComponent={BaseSelect}
    />
  );



export default function ContactUs() {

  function sendEmail(e) {

    emailjs.sendForm('gmail', 'Admision_Nazareno', e.target, `${credentials.correonazareno}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Su postulación se ha enviado con exito")
    }

    const [disabled, setDisabled] = useState(true);

    function handleChange(f) {
        if(f.target.value.length >= 10){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        fetch('https://escuelasespeciales.cl/curso/list?ordering=nombre&id_colegio=2')
            .then(response => response.json())
            .then(data => setDatos(data));
    },[]);

  return ( 
    <div className="AdmisionFormContainer">
        <form id="AdmisionWidth" onSubmit={sendEmail} className="form">
            <h1>
                Ingresa tus datos para postular!
                    <p>(Los campos marcados con * son obligatorios)</p>
            </h1>
            <div className='AdmisionForm-inputs'>
                <label className="AdmisionForm-label">Nombre y Apellido*</label>
                    <input pattern="[a-zA-Z]+[ ]+[a-zA-Z]{2,}$" title="Incluye Nombre y Apellido separados por un espacio" required type="text" maxLength="45" className="AdmisionForm-input" placeholder="Nombre Apellido" name="name"/>
            </div>

            <div className='AdmisionForm-inputs'>
                <label className="AdmisionForm-label">Correo*</label>
                    <input pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required type="email" maxLength="45" className="AdmisionForm-input" placeholder="Correo electrónico" name="email"/>
            </div>   

             <div className='AdmisionForm-inputs'>                   
                <label className="AdmisionForm-label">Curso al que Postula*</label>
                <Select  
                    required
                    placeholder="Cursos" 
                    isdisabled={true} 
                    isLoading={false}  
                    options={datos.map(item =>
                                ({value: item.nombre, label: item.nombre})
                                )} 
                    name="subject"
                />
            </div>   

            <div className='AdmisionForm-inputs'>
                <label className="AdmisionForm-label">Teléfono*</label>
                    <input title="Incluye 56" pattern="56.+[0-9]" required type="tel" maxLength="11" onChange={handleChange} className="AdmisionForm-input" placeholder="56912345678" name="message"/>
            </div> 
                    <Button type ="submit"  value="telefono" className="AdmisionForm-input-btn" disabled={disabled} ><Icon className="fas fa-envelope"/>Enviar Postulación</Button>
            <span className='AdmisionForm-input-login'>
                O contactanos directamente llamando al:<p>(9) 62382640</p>
            </span>
        </form>
    </div>
    );
}



