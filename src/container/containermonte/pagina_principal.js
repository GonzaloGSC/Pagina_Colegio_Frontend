import React from 'react'
import CardItem from '../../components/secciones/CardItem';
import Separador from '../../components/separadores/separador';
import '../../components/secciones/Cards.css'
import Carrusel from '../../components/eventos/eventosmonte';


class Pagina_principal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // evento: [],
            noticia: [],
            info: [],            
        }
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/noticia/list?ordering=-id&id_colegio=3')
            .then(response => response.json())
            .then(data => this.setState({noticia:data}))
            .catch(error => {console.log(error)})
            

        fetch('https://escuelasespeciales.cl/info_destacada/list?ordering=-id&id_colegio=3')
            .then(response => response.json())
            .then(data => this.setState({info:data}))
            .catch(error => {console.log(error)})
    }


    render(){

        if(this.state.info.length === 0 && this.state.noticia.length !== 0){
            return(
                <>
                    <Separador title="EVENTOS" separador={"SeparadoresBackgroundM"}/>
                    <Carrusel/>
                    <Separador title='ACTIVIDADES' separador={"SeparadoresBackgroundM"}/>
                        <div className="CardContainer">
                            <div className='CardWrapper'>
                                <div className='CardColumn'>
                                    <h2 id="SubtituloM">No hay Actividades aún</h2>
                                </div>
                            </div>
                        </div>
                    <Separador title="NOTICIAS" separador={"SeparadoresBackgroundM"}/>
                        <div className="CardContainer">
                            <div className='CardWrapper'>
                                <div className='CardColumn'>
                                    <div className="CardRow3">
                                        {this.state.noticia.map( objeto =>
                                            <div key={objeto.id}>
                                                <CardItem
                                                    label ={objeto.titulo}
                                                    text={objeto.descripcion}
                                                    src ={"http://"+window.location.host+"/download/"+objeto.path}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>                    
                            </div>
                        </div>
                </>              
            )
        }else if(this.state.noticia.length === 0 && this.state.info.length !== 0){
            return (
                <>
                    <Separador title="EVENTOS" separador={"SeparadoresBackgroundM"}/>
                    <Carrusel/>
                    <Separador title='ACTIVIDADES' separador={"SeparadoresBackgroundM"}/>
                        <div className="CardContainer">
                            <div className='CardWrapper'>
                                <div className='CardColumn'>
                                    <div className='CardRow3'>
                                        {this.state.info.map( objeto =>
                                                <div key={objeto.id}>
                                                    <CardItem
                                                        label ={objeto.titulo}
                                                        text={objeto.descripcion}
                                                        src ={"http://"+window.location.host+"/download/"+objeto.path}
                                                    />
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    <Separador title="NOTICIAS" separador={"SeparadoresBackgroundM"}/>
                        <div className="CardContainer">
                            <div className='CardWrapper'>
                                <div className='CardColumn'>
                                    <h2 id="SubtituloM">No hay Noticias aún</h2>
                                </div>
                            </div>                    
                        </div>
                </>
            )}else if(this.state.info.length === 0 & this.state.noticia.length === 0){
                return (
                    <>
                        <Separador title="EVENTOS" separador={"SeparadoresBackgroundM"}/>
                        <Carrusel/>
                        <Separador title='ACTIVIDADES' separador={"SeparadoresBackgroundM"}/>
                            <div className="CardContainer">
                                <div className='CardWrapper'>
                                    <div className='CardColumn'>
                                        <h2 id="SubtituloM">No hay Actividades aún</h2>
                                    </div>
                                </div>
                            </div>
                        <Separador title="NOTICIAS" separador={"SeparadoresBackgroundM"}/>
                            <div className="CardContainer">
                                <div className='CardWrapper'>
                                    <div className='CardColumn'>
                                        <h2 id="SubtituloM">No hay Noticias aún</h2>
                                    </div>                    
                                </div>
                            </div>
                    </>
                )}else{
                    return (
                        <>
                            <Separador title="EVENTOS" separador={"SeparadoresBackgroundM"}/>
                            <Carrusel/>
                            <Separador title='ACTIVIDADES' separador={"SeparadoresBackgroundM"}/>
                                <div className="CardContainer">
                                    <div className='CardWrapper'>
                                        <div className='CardColumn'>
                                            <div className='CardRow3'>
                                                {this.state.info.map( objeto =>
                                                        <div key={objeto.id}>
                                                            <CardItem
                                                                label ={objeto.titulo}
                                                                text={objeto.descripcion}
                                                                src ={"http://"+window.location.host+"/download/"+objeto.path}
                                                            />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <Separador title="NOTICIAS" separador={"SeparadoresBackgroundM"}/>
                                <div className="CardContainer">
                                    <div className='CardWrapper'>
                                        <div className='CardColumn'>
                                            <div className="CardRow3">
                                                {this.state.noticia.map( objeto =>
                                                    <div key={objeto.id}>
                                                        <CardItem
                                                            label ={objeto.titulo}
                                                            text={objeto.descripcion}
                                                            src ={"http://"+window.location.host+"/download/"+objeto.path}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>                    
                                    </div>
                                </div>
                        </>
                    )}
                } 
}

export default Pagina_principal

