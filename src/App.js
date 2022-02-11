import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './views/VistasSantisimaTrinidad/Cuentas/ProtectRoute';
import PrivateRouteData from './views/VistasSantisimaTrinidad/Cuentas/ProtectRouteDatos';
import PrivateRouteP from './views/VistasSantisimaTrinidad/Cuentas/ProtectRouteP';
import './App.css';


//404 not found
import notFound404 from './views/notFound/notFound';

//Vista principal colegios
import Inicio from './views/Inicio/Inicio';

// Rutas normales Santisima
import Pagina_Principal_Santisima from "./views/VistasSantisimaTrinidad/Pagina_principal/Pagina_principal";
import Admision from './views/VistasSantisimaTrinidad/Admision/Admision';
import Contacto from './views/VistasSantisimaTrinidad/Contacto/Contacto';
import FAQ from './views/VistasSantisimaTrinidad/Preguntas_frecuentes/Preguntas_frecuentes';
import Nosotros from './views/VistasSantisimaTrinidad/Nosotros/Nosotros';
import Apoderados from './views/VistasSantisimaTrinidad/Apoderados/Apoderados';
import Equipo from './views/VistasSantisimaTrinidad/Equipo/Equipo';
import Documentos from './views/VistasSantisimaTrinidad/Documentos/Documentos';
import Infraestructura from './views/VistasSantisimaTrinidad/Infraestructura/Infraestructura';
import Niveles from './views/VistasSantisimaTrinidad/Niveles/Niveles';
import Guias from './views/VistasSantisimaTrinidad/Guias/guias';
import Documentos_Covid from './views/VistasSantisimaTrinidad/Documentos/DocumentosCovid'
import Galeria_Covid from './views/VistasSantisimaTrinidad/Covid/Covid'
import Uniforme from './views/VistasSantisimaTrinidad/Uniforme/uniforme';
import Transporte_Escolar from './views/VistasSantisimaTrinidad/TransporteEscolar/transporte';
import Horario from './views/VistasSantisimaTrinidad/Documentos/horario';
import Lista_Utiles from './views/VistasSantisimaTrinidad/Documentos/listautiles';
// import Seguro_Escolar from './views/VistasSantisimaTrinidad/Seguro_Escolar/Seguro_escolar';

//Rutas normales Nazareno
import Pagina_Principal_Nazareno from "./views/VistasJesusNazareno/Pagina_principal/Pagina_principal";
import Admision2 from './views/VistasJesusNazareno/Admision/Admision';
import Contacto2 from './views/VistasJesusNazareno/Contacto/Contacto';
import FAQ2 from './views/VistasJesusNazareno/Preguntas_frecuentes/Preguntas_frecuentes';
import Nosotros2 from './views/VistasJesusNazareno/Nosotros/Nosotros';
import Apoderados2 from './views/VistasJesusNazareno/Apoderados/Apoderados';
import Equipo2 from './views/VistasJesusNazareno/Equipo/Equipo';
import Documentos2 from './views/VistasJesusNazareno/Documentos/Documentos';
import Infraestructura2 from './views/VistasJesusNazareno/Infraestructura/Infraestructura';
import Niveles2 from './views/VistasJesusNazareno/Niveles/Niveles';
import Guias2 from './views/VistasJesusNazareno/Guias/guias';
import Documentos_Covid2 from './views/VistasJesusNazareno/Documentos/DocumentosCovid';
import Galeria_Covid2 from './views/VistasJesusNazareno/Covid/Covid'
import Uniforme2 from './views/VistasJesusNazareno/Uniforme/uniforme';
import Transporte_Escolar2 from './views/VistasJesusNazareno/TransporteEscolar/transporte';
import Horario2 from './views/VistasJesusNazareno/Documentos/horario';
import Lista_Utiles2 from './views/VistasJesusNazareno/Documentos/listautiles';
// import Seguro_Escolar2 from './views/VistasJesusNazareno/Seguro_Escolar/Seguro_escolar';

//Rutas normales Monte
import Pagina_Principal_Monte from "./views/VistasMonteCarmelo/Pagina_principal/Pagina_principal";
import Admision3 from './views/VistasMonteCarmelo/Admision/Admision';
import Contacto3 from './views/VistasMonteCarmelo/Contacto/Contacto';
import FAQ3 from './views/VistasMonteCarmelo/Preguntas_frecuentes/Preguntas_frecuentes';
import Nosotros3 from './views/VistasMonteCarmelo/Nosotros/Nosotros';
import Apoderados3 from './views/VistasMonteCarmelo/Apoderados/Apoderados';
import Equipo3 from './views/VistasMonteCarmelo/Equipo/Equipo';
import Documentos3 from './views/VistasMonteCarmelo/Documentos/Documentos';
import Infraestructura3 from './views/VistasMonteCarmelo/Infraestructura/Infraestructura';
import Niveles3 from './views/VistasMonteCarmelo/Niveles/Niveles';
import Guias3 from './views/VistasMonteCarmelo/Guias/guias';
import Documentos_Covid3 from './views/VistasMonteCarmelo/Documentos/DocumentosCovid'
import Galeria_Covid3 from './views/VistasMonteCarmelo/Covid/Covid'
import Uniforme3 from './views/VistasMonteCarmelo/Uniforme/uniforme';
import Transporte_Escolar3 from './views/VistasMonteCarmelo/TransporteEscolar/transporte';
import Horario3 from './views/VistasMonteCarmelo/Documentos/horario';
import Lista_Utiles3 from './views/VistasMonteCarmelo/Documentos/listautiles';
// import Seguro_Escolar3 from './views/VistasMonteCarmelo/Seguro_Escolar/Seguro_escolar';


//Login y cuentas
import Login from './views/VistasSantisimaTrinidad/Cuentas/login';

//Vista principal ingreso datos
import Ingreso_Vista_General from './views/VistasBackend/VistaGeneral/vistageneral';

//Rutas Privadas Ingreso Admin
import Ingreso_Datos from './views/VistasBackend/Ingreso/ingreso';
import Ingreso_Documentos from './views/VistasBackend/IngresoDatos/Documentos/documentos';
import Ingreso_Equipo from './views/VistasBackend/IngresoDatos/Equipo/equipo';
import Ingreso_Guias from './views/VistasBackend/IngresoDatos/Guias/guias';
import Ingreso_Informacion_Destacada from './views/VistasBackend/IngresoDatos/InformacionDestacada/informacion';
import Ingreso_Infraestructura from './views/VistasBackend/IngresoDatos/Infraestructura/infraestructura';
import Ingreso_Noticias from './views/VistasBackend/IngresoDatos/Noticias/noticias';
import Ingreso_Curso from './views/VistasBackend/IngresoDatos/Datos_guias/curso';
import Ingreso_Uniforme_Transporte from './views/VistasBackend/IngresoDatos/Infraestructura/uniforme';
// import Ingreso_Seguro_Escolar from './views/VistasBackend/IngresoDatos/SeguroEscolar/seguroescolar'
import Ingreso_Asignatura from './views/VistasBackend/IngresoDatos/Datos_guias/asignatura'
import Ingreso_Evento from './views/VistasBackend/IngresoDatos/Evento/evento';
import Ingreso_Cargo from './views/VistasBackend/IngresoDatos/Cargo/cargo';
//Rutas Privadas Ingreso Profesor
import Ingreso_Guias_Profesor from './views/VistasBackend/Ingreso/ingresoP'; 

//Rutas Privadas Eliminacion
import Eliminacion_Datos from './views/VistasBackend/Eliminacion/eliminacion';
import Eliminacion_Documentos from './views/VistasBackend/EliminacionDatos/Documentos/documentos';
import Eliminacion_Equipo from './views/VistasBackend/EliminacionDatos/Equipo/equipo';
import Eliminacion_Guias from './views/VistasBackend/EliminacionDatos/Guias/guias';
import Eliminacion_Informacion_Destacada from './views/VistasBackend/EliminacionDatos/InformacionDestacada/informacion';
import Eliminacion_Infraestructura from './views/VistasBackend/EliminacionDatos/Infraestructura/infraestructura';
import Eliminacion_Noticias from './views/VistasBackend/EliminacionDatos/Noticias/noticias';
import Eliminacion_Curso from './views/VistasBackend/EliminacionDatos/Datos_Guias/curso';
import Eliminacion_Asignatura from './views/VistasBackend/EliminacionDatos/Datos_Guias/asignatura';
import Eliminacion_Evento from './views/VistasBackend/EliminacionDatos/Evento/evento';
import Eliminacion_Cargo from './views/VistasBackend/EliminacionDatos/Cargo/cargo';
import Eliminacion_Uniforme_Transporte from './views/VistasBackend/EliminacionDatos/Infraestructura/uniforme';
// import Eliminacion_Seguro_Escolar from './views/VistasBackend/EliminacionDatos/SeguroEscolar/seguroescolar';

//Rutas Privadas Eliminacion Profesor
import Eliminacion_Guias_Profesor from './views/VistasBackend/Eliminacion/eliminacionP';

//Rutas Privadas Modificacion
import Modificacion_Datos from './views/VistasBackend/Modificacion/modificacion';
import Modificacion_Documento_Oficial from './views/VistasBackend/ModificacionDatos/DocumentoOficial/documento';
import Modificacion_Equipo from './views/VistasBackend/ModificacionDatos/ProfesionalPortada/profesional';
import Modificacion_Guias from './views/VistasBackend/ModificacionDatos/Guias/guias';
import Modificacion_Informacion_Destacada from './views/VistasBackend/ModificacionDatos/InformacionDestacada/informacion';
import Modificacion_Infraestructura from './views/VistasBackend/ModificacionDatos/Infraestructura/infraestructura';
import Modificacion_Noticias from './views/VistasBackend/ModificacionDatos/Noticias/noticias';
import Modificacion_Curso from './views/VistasBackend/ModificacionDatos/Datos_Guias/curso';
// import Modificacion_Seguro_Escolar from './views/VistasBackend/ModificacionDatos/SeguroEscolar/seguro';
import Modificacion_Asignatura from './views/VistasBackend/ModificacionDatos/Datos_Guias/asignatura';
import Modificacion_Jornada from './views/VistasBackend/ModificacionDatos/Datos_Guias/jornada';
import Modificacion_Evento from './views/VistasBackend/ModificacionDatos/Evento/evento';
import Modificacion_Postulacion from './views/VistasBackend/ModificacionDatos/Postulaciones/postulacion';
import Modificacion_Cargo from './views/VistasBackend/ModificacionDatos/Cargo/cargo';
import Modificacion_Uniforme_Transporte from './views/VistasBackend/ModificacionDatos/Infraestructura/uniforme';


//Rutas Privadas Modificacion Profesor
import Modificacion_Guias_Profesor from './views/VistasBackend/Modificacion/modificacionP';

//Gestion de usuarios
import Gestion from './views/VistasBackend/Gestion/gestion';
import Registro_Usuario from './views/VistasBackend/Gestion/registrouser'
import Eliminacion_Usuario from './views/VistasBackend/Gestion/eliminacionuser';
import Modificacion_Usuario from './views/VistasBackend/Gestion/modificacionuser';



// La Vista Seguro_escolar esta comentada, existe pero no se puede acceder 

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        {/* Login Santisima Trinidad */}
        <Route exact path="/login_escuelas" component={Login}/>

        {/* Pagina principal modificacion de datos */}
        <PrivateRouteData exact path="/datos" component={Ingreso_Vista_General}/>
        
        {/* Ingreso de datos al backend Santisima Trinidad ADMIN*/}
        <PrivateRoute exact path="/datos/ingreso" component={Ingreso_Datos}/>
        <PrivateRoute path="/datos/ingreso/documentos" component={Ingreso_Documentos}/>
        <PrivateRoute path="/datos/ingreso/equipo" component={Ingreso_Equipo}/>
        <PrivateRouteData path="/datos/ingreso/guias" component={Ingreso_Guias}/>
        <PrivateRoute path="/datos/ingreso/informacion_destacada" component={Ingreso_Informacion_Destacada}/>
        <PrivateRoute path="/datos/ingreso/infraestructura" component={Ingreso_Infraestructura}/>
        <PrivateRoute path="/datos/ingreso/noticias" component={Ingreso_Noticias}/>
        <PrivateRoute path="/datos/ingreso/curso" component={Ingreso_Curso}/>
        <PrivateRoute path="/datos/ingreso/asignatura" component={Ingreso_Asignatura}/>
        <PrivateRoute path="/datos/ingreso/cargo" component={Ingreso_Cargo}/>
        <PrivateRoute path="/datos/ingreso/uniforme_transporte" component={Ingreso_Uniforme_Transporte}/>    
        {/* <PrivateRoute path="/datos/ingreso/seguro_escolar" component={Ingreso_Seguro_Escolar}/> */}
        <PrivateRoute path="/datos/ingreso/evento" component={Ingreso_Evento}/>
        {/* Ingreso de datos al Backend Santisima Trinidad Profesor */}
        <PrivateRouteP path="/datos/ingreso_profesores" component={Ingreso_Guias_Profesor}/>
        {/* Eliminacion del backend Santisima Trinidad */}
        <PrivateRoute exact path="/datos/eliminacion" component={Eliminacion_Datos}/>
        <PrivateRoute path="/datos/eliminacion/documentos" component={Eliminacion_Documentos}/>
        <PrivateRoute path="/datos/eliminacion/equipo" component={Eliminacion_Equipo}/>
        <PrivateRouteData path="/datos/eliminacion/guias" component={Eliminacion_Guias}/>
        <PrivateRoute path="/datos/eliminacion/informacion_destacada" component={Eliminacion_Informacion_Destacada}/>
        <PrivateRoute path="/datos/eliminacion/infraestructura" component={Eliminacion_Infraestructura}/>
        <PrivateRoute path="/datos/eliminacion/noticias" component={Eliminacion_Noticias}/>
        <PrivateRoute path="/datos/eliminacion/curso" component={Eliminacion_Curso}/>
        <PrivateRoute path="/datos/eliminacion/asignatura" component={Eliminacion_Asignatura}/>
        <PrivateRoute path="/datos/eliminacion/evento" component={Eliminacion_Evento}/>
        <PrivateRoute path="/datos/eliminacion/cargo" component={Eliminacion_Cargo}/>
        <PrivateRoute path="/datos/eliminacion/uniforme_transporte" component={Eliminacion_Uniforme_Transporte}/>
        {/* <PrivateRoute path="/datos/eliminacion/seguro_escolar" component={Eliminacion_Seguro_Escolar}/> */}
        {/* Eliminacion del backend Santisima Trinidad Profesores */}
        <PrivateRouteP path="/datos/eliminacion_profesores" component={Eliminacion_Guias_Profesor}/>
        {/* Modificacion del backend Santisima Trinidad */}
        <PrivateRoute exact path="/datos/modificacion" component={Modificacion_Datos}/>
        <PrivateRoute path="/datos/modificacion/curso" component={Modificacion_Curso}/>
        <PrivateRoute path="/datos/modificacion/jornada" component={Modificacion_Jornada}/>
        <PrivateRoute path="/datos/modificacion/asignatura" component={Modificacion_Asignatura}/>
        <PrivateRouteData path="/datos/modificacion/guias" component={Modificacion_Guias}/>
        <PrivateRoute path="/datos/modificacion/noticias" component={Modificacion_Noticias}/>
        <PrivateRoute path="/datos/modificacion/informacion_destacada" component={Modificacion_Informacion_Destacada}/>
        <PrivateRoute path="/datos/modificacion/evento" component={Modificacion_Evento}/>
        <PrivateRoute path="/datos/modificacion/documentos" component={Modificacion_Documento_Oficial}/>
        <PrivateRoute path="/datos/modificacion/infraestructura" component={Modificacion_Infraestructura}/>
        <PrivateRoute path="/datos/modificacion/equipo" component={Modificacion_Equipo}/>
        <PrivateRoute path="/datos/modificacion/cargo" component={Modificacion_Cargo}/>
        <PrivateRoute path="/datos/modificacion/uniforme_transporte" component={Modificacion_Uniforme_Transporte}/>
        {/* <PrivateRoute path="/datos/modificacion/seguro_escolar" component={Modificacion_Seguro_Escolar}/> */}
        <PrivateRoute path="/datos/modificacion/postulaciones" component={Modificacion_Postulacion}/>
        {/* Modificacion del backend Santisima Trinidad Profesores */}
        <PrivateRouteP path="/datos/modificacion_profesores" component={Modificacion_Guias_Profesor}/>
        {/* Gestion de usuarios */}
        <PrivateRoute exact path="/datos/gestion" component={Gestion}/>
        <PrivateRoute path="/datos/gestion/registro_usuario" component={Registro_Usuario}/>
        <PrivateRoute path="/datos/gestion/eliminacion_usuario" component={Eliminacion_Usuario}/>
        <PrivateRoute path="/datos/gestion/modificacion_usuario" component={Modificacion_Usuario}/>

        {/* Link Inicio */}
        <Route exact path="/" component={Inicio}/>

        {/* Links de la pagina Santisima Trinidad*/}
        <Route exact path="/santisima_trinidad" component={Pagina_Principal_Santisima}/>
        <Route path="/santisima_trinidad/nosotros" component={Nosotros}/>
        <Route path="/santisima_trinidad/admision" component={Admision}/>
        <Route path="/santisima_trinidad/contacto" component={Contacto}/>
        <Route path="/santisima_trinidad/apoderados" component={Apoderados}/>
        <Route path="/santisima_trinidad/equipo" component={Equipo}/>
        <Route path="/santisima_trinidad/documentos_oficiales" component={Documentos}/>
        <Route path="/santisima_trinidad/niveles" component={Niveles}/>
        <Route path="/santisima_trinidad/infraestructura" component={Infraestructura}/>
        <Route path="/santisima_trinidad/preguntas_frecuentes" component ={FAQ}/>
        <Route path="/santisima_trinidad/guias" component={Guias}/>
        <Route path="/santisima_trinidad/documentos_covid" component={Documentos_Covid}/>
        <Route path="/santisima_trinidad/medidas_covid" component={Galeria_Covid}/>
        <Route path="/santisima_trinidad/uniforme" component={Uniforme}/>
        <Route path="/santisima_trinidad/transporte_escolar" component={Transporte_Escolar}/>
        <Route path="/santisima_trinidad/horario" component={Horario}/>
        <Route path="/santisima_trinidad/lista_de_utiles" component={Lista_Utiles}/>
        {/* <Route path="/santisima_trinidad/seguro_escolar" component={Seguro_Escolar}/> */}

         {/* Links de la pagina Jesus Nazareno*/}
        <Route exact path="/jesus_nazareno" component={Pagina_Principal_Nazareno}/>
        <Route path="/jesus_nazareno/nosotros" component={Nosotros2}/>
        <Route path="/jesus_nazareno/admision" component={Admision2}/>
        <Route path="/jesus_nazareno/contacto" component={Contacto2}/>
        <Route path="/jesus_nazareno/apoderados" component={Apoderados2}/>
        <Route path="/jesus_nazareno/equipo" component={Equipo2}/>
        <Route path="/jesus_nazareno/documentos_oficiales" component={Documentos2}/>
        <Route path="/jesus_nazareno/niveles" component={Niveles2}/>
        <Route path="/jesus_nazareno/infraestructura" component={Infraestructura2}/>
        <Route path="/jesus_nazareno/preguntas_frecuentes" component ={FAQ2}/>
        <Route path="/jesus_nazareno/guias" component={Guias2}/>
        <Route path="/jesus_nazareno/documentos_covid" component={Documentos_Covid2}/>
        <Route path="/jesus_nazareno/medidas_covid" component={Galeria_Covid2}/>
        <Route path="/jesus_nazareno/uniforme" component={Uniforme2}/>
        <Route path="/jesus_nazareno/transporte_escolar" component={Transporte_Escolar2}/>
        <Route path="/jesus_nazareno/horario" component={Horario2}/>
        <Route path="/jesus_nazareno/lista_de_utiles" component={Lista_Utiles2}/>
        {/* <Route path="/jesus_nazareno/seguro_escolar" component={Seguro_Escolar2}/> */}

        {/* Links de la pagina Monte Carmelo*/}
        <Route exact path="/monte_carmelo" component={Pagina_Principal_Monte}/>
        <Route path="/monte_carmelo/nosotros" component={Nosotros3}/>
        <Route path="/monte_carmelo/admision" component={Admision3}/>
        <Route path="/monte_carmelo/contacto" component={Contacto3}/>
        <Route path="/monte_carmelo/apoderados" component={Apoderados3}/>
        <Route path="/monte_carmelo/equipo" component={Equipo3}/>
        <Route path="/monte_carmelo/documentos_oficiales" component={Documentos3}/>
        <Route path="/monte_carmelo/niveles" component={Niveles3}/>
        <Route path="/monte_carmelo/infraestructura" component={Infraestructura3}/>
        <Route path="/monte_carmelo/preguntas_frecuentes" component ={FAQ3}/>
        <Route path="/monte_carmelo/guias" component={Guias3}/>
        <Route path="/monte_carmelo/documentos_covid" component={Documentos_Covid3}/>
        <Route path="/monte_carmelo/medidas_covid" component={Galeria_Covid3}/>
        <Route path="/monte_carmelo/uniforme" component={Uniforme3}/>
        <Route path="/monte_carmelo/transporte_escolar" component={Transporte_Escolar3}/>
        <Route path="/monte_carmelo/horario" component={Horario3}/>
        <Route path="/monte_carmelo/lista_de_utiles" component={Lista_Utiles3}/>
        {/* <Route path="/monte_carmelo/seguro_escolar" component={Seguro_Escolar3}/> */}

        {/* Not Found 404 */}
        <Route component={notFound404}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
