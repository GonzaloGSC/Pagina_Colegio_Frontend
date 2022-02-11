import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './emailform.css'
import Icon from '../iconosBars'
import {Button} from 'react-bootstrap'
import credentials from '../../credentials';


export default function ContactUs() {

  function sendEmail(e) {

    // e.preventDefault();
    /*Cambiar pagina_colegio_santisima y user (api keys) para oficializarlas*/
    emailjs.sendForm('gmail', 'Email_Monte_Carmelo', e.target, `${credentials.correomonte}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Su duda se ha enviado con exito")
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

  return (
    <div className="form-content-right">
        <form onSubmit={sendEmail} className="form">
            <h1>
                Envianos tu pregunta y te responderemos a la brevedad!
                <p>(Los campos marcados con * son obligatorios)</p>
            </h1>
            <div className='form-inputs'>
                <label className="form-label">Nombre*</label>
                    <input required type="text" maxLength="45" className="form-input" placeholder="Nombre" name="name"/>
            </div>

            <div className='form-inputs'>
                <label className="form-label">Correo*</label>
                    <input required pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" maxLength="45" className="form-input" placeholder="Correo electrónico" name="email"/>
            </div>   

             <div className='form-inputs'>                   
                <label className="form-label">Asunto*</label>
                 <input required type="text" maxLength="45" className="form-input" placeholder="Asunto" name="subject"/>
            </div>   

            <div className="form-inputs">
                <label className="form-label">Mensaje*</label>
                    <textarea required className="form-input-message" onChange={handleChange} placeholder="Mensaje (min 10 caracteres)" name="message"/>
            </div>
                    <Button type ="submit"  value="Enviar mensaje" className="form-input-btn" disabled={disabled} ><Icon className="fas fa-envelope"/>Enviar mensaje</Button>
            <span className='form-input-login'>
                O contactanos directamente llamando al:<p>(2) 2534 8490 o (+569) 62382639</p>
            </span>
        </form>
    </div>
    );
}
