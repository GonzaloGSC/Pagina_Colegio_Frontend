import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import Faq from '../../components/menufaq/faq';
import IconSubtitle from '../../components/iconosBars'
import Titulo from '../../components/titulo/titulo';
import Banner from '../../components/banners/banner';
import Imagen from '../../imagenes/banner_faq_monte.png';
import '../../components/menufaq/faq.css' 


export default class MenuFaq extends Component{
    constructor(props){
      super(props);
      this.state = {
          OD: [],
          OC: []
      }
  }
  
  componentDidMount(){
    
      fetch('https://escuelasespeciales.cl/curso/list?id_colegio=3&ordering=nombre&tipo=taller')
          .then(response => response.json())
          .then(data => this.setState({OD:data}));
      fetch('https://escuelasespeciales.cl/cargo/list?id_colegio=3&ordering=nombre')
          .then(response => response.json())
          .then(data => this.setState({OC:data}));
  }


    render(){

      const {OD,OC} = this.state
      
      const talleres = OD.map(item => item.nombre)

      var Talleres = []
      
      for(var i=0; i< this.state.OD.length; i++){
        
        Talleres = Talleres+"<p></p>  • "+ talleres[i] 
      }

      const cargo = OC.map(item => item.nombre)

      var Cargo = []
      
      for(var j=0; j< this.state.OC.length; j++){
        
        Cargo = Cargo+"<p></p>  • "+ cargo[j] 
      }


      return (
        <div>
        <Banner src={Imagen} text='¿Dudas?'/>
        <div className="FaqContainer">
          <div className="FaqWrapper">
            <div className="FaqColumn">
            <div>
              <Titulo id="TituloM" icono="fas fa-question-circle" titulo="Preguntas mas frecuentes"/>
              <div className="h2TM"><IconSubtitle className="fas fa-graduation-cap"/>Sobre el colegio</div>
                <div className="faq">
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿En qué horarios funciona el colegio?" 
                  content ="El colegio funciona en 2 jornadas:
                          <p></p>  • Jornada Mañana: de 9:00 a 12:45 horas
                          <p></p>  • Jornada Tarde: de 14:00 a 17:45 horas"
                  />
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Qué documentos debo presentar para postular a la escuela? (* Obligatorios)" 
                  content ="<p></p>  • Informe psicológico * 
                          <p></p>  • Protocolo WISC o VAIS* 
                          <p></p>  • Certificado de estudio (que indique el último curso rendido, solo para EGB) * 
                          <p></p>  • Formulario Único de Salud 
                          <p></p>  • Informes médicos 
                          <p></p>  • Antecedentes escolares anteriores"
                  />
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Qué puedo hacer si no tengo informe psicológico?" 
                  content ="Debe solicitar hora para evaluación previa derivación al colegio."
                  />

                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Qué es el formulario único de valoración de salud?" 
                  content ={`Es un documento que será entregado por el colegio al momento de la entrevista y que debe ser llenado por:
                          <p></p>  • Médico general
                          <p></p>  • Pediatra
                          <p></p>  • Neurólogo
                          <p></p>  • Fisiatra 
                          <p></p>  • Psiquiatra
                          <p></p> *QUE TENGA REGISTRO EN EL COLEGIO MÉDICO`}
                  />


                </div>
              <div className="h2TM"><IconSubtitle className="fas fa-chalkboard-teacher"/>Sobre las clases</div>
              <div className="faq">
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Qué niveles atiende el colegio?" 
                  content ="Monte Carmelo cuenta con los niveles de:
                          <p></p>  •  Enseñanza General Básica
                          <p></p>  •  Nivel Laboral"
                  />
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Qué talleres laborales ofrece?" 
                  content = {`Los Talleres laborales impartidos por Monte Carmelo son: <p></p> ${Talleres}`}
                  />
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Hasta qué edad pueden estar matriculados los Jóvenes?"
                  content ="<p></p>  • En Enseñanza General Básica
                            hasta que terminen Octavo Básico (14 a 16 años)
                            <p></p>  •  En Nivel Laboral
                            Hasta los 24 años extendiendo a 26 los alumnos antiguos
                            "
                  />
                </div>
              <div className="h2TM"><IconSubtitle className="fas fa-briefcase"/>Otras</div>
              <div className="faq">
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿El colegio presta servicio de traslado?" 
                  content ="Una empresa externa de transporte ofrece servicio particular,  exclusivo para los estudiantes del colegio."
                  />
                  <Faq
                  coloricono="green"
                  colorb="faqM"
                  color="faqcolorM" 
                  title= "¿Con qué profesionales cuenta el colegio?" 
                  content ={`Monte Carmelo cuenta con: <p></p> ${Cargo}`}
                  />
                  <Faq
                    coloricono="green"
                    colorb="faqM"
                    color="faqcolorM" 
                    title= "¿Qué modalidad de atención utiliza el colegio durante la pandemia?" 
                    content ="El colegio se encuentra atendiendo en modalidad mixta
                          <p></p> • De forma presencial con aforos reducidos reglamentarios
                          <p></p> • On Line con estudiantes que no pueden asistir presencialmente                    
                          <p></p>*El criterio de asistencia presencial o vía on line depende de la voluntariedad de los apoderados"
                    />
                    <Faq
                    coloricono="green"
                    colorb="faqM"
                    color="faqcolorM" 
                    title= "¿Qué medidas de seguridad ofrece el colegio durante la pandemia?" 
                    content ={`<p></p> • Trazabilidad
                            <p></p> • Sanitización diaria
                            <p></p> • Alcohol en ingreso y durante la jornada
                            <p></p> • Toma de temperatura al ingreso
                            <p></p> • Láminas acrílicas en mesas 
                            <p></p> • Distanciamiento físico
                            <p></p><a href="/monte_carmelo/documentos_oficiales">Protocolos disponibles aquí </a>`}
                    />
                </div>
                </div>
                <Titulo id="TituloM" titulo="¿Tienes alguna otra pregunta?"/>
                <Button id="boton-contactoM" className="Button" size="lg" href="/monte_carmelo/contacto"><IconSubtitle className="fas fa-envelope-open"/>Escribenos</Button>
                <div className="pContacto">Presiona botón para contactarnos por correo o puedes llamarnos directamente al:<p className="pContacto">(+569) 62382639</p></div>
            </div>
          </div>
        </div>
        </div>
      )};
}


