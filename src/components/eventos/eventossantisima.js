import React, {Component} from 'react'
import Slider from 'react-slick';
import Item from './item.js';
// import dateFormat from 'dateformat';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './item.css'

class Eventos extends Component{

    state = {
        evento: [],
    }

    componentDidMount(){
        fetch('https://escuelasespeciales.cl/evento/list?ordering=fecha&id_colegio=1')
            .then(response => response.json())
            .then(data => this.setState({evento:data}))
     }
    
    render(){

        var settings = {
            // dots: false,
            infinite: true,
            speed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed:3000,
            adaptativeHeight: true,
            focusOnSelect: true,
            // cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                }
            },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                }
            },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
            }
        },
            ],
          };


        var dateFormat = require("dateformat");
        dateFormat.i18n = {
            monthNames: [
                "Ene",
                "Feb",
                "Marz",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
                
            ]
        }
          if(this.state.evento.length === 0 ){
        
            return (
                    <div className="EventoContainer">
                        <div className="EventoWrapper">
                            <div className="EventoColumn">
                                <Slider {...settings}>
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Inicio de los eventos"}
                                    />
                                    <Item
                                        id={"EventoItemS"}
                                        id2={"EventoFechaS"}
                                        id3={"EventoTitulo"}
                                        id4={"EventoDescripcionS"}
                                        fecha={"No hay fechas para mostrar aún"}
                                    />
                                    <Item
                                        id={"EventoItemS"}
                                        id2={"EventoFechaS"}
                                        id3={"EventoTitulo"}
                                        id4={"EventoDescripcionS"}
                                        fecha={"No hay fechas para mostrar aún"}
                                    />
                                    
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Fin de eventos"}
                                    />
                                </Slider>
                            </div>
                        </div>
                    </div>
            );
            }
            else if(this.state.evento.length === 1){
                return (
                    <div className="EventoContainer">
                        <div className="EventoWrapper">
                            <div className="EventoColumn">
                                <Slider {...settings}>
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Inicio de los eventos"}
                                    />
                                    {this.state.evento.map( objeto =>
                                        <div key={objeto.id}>
                                            <Item
                                                id={"EventoItemS"}
                                                id2={"EventoFechaS"}
                                                id3={"EventoTitulo"}
                                                id4={"EventoDescripcionS"}
                                                fecha={dateFormat(objeto.fecha, 'UTC:d/mm/yyyy')}
                                                titulo={objeto.titulo}
                                                descripcion={objeto.descripcion}
                                            />
                                        </div>
                                    )}
                                    <Item
                                        id={"EventoItemS"}
                                        id2={"EventoFechaS"}
                                        id3={"EventoTitulo"}
                                        id4={"EventoDescripcionS"}
                                        fecha={"<--- Unica Fecha"}
                                    />                                    
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Fin de eventos"}
                                    />
                                </Slider>
                            </div>
                        </div>
                    </div>
            );
            }
            else{
                return (
                    <div className="EventoContainer">
                        <div className="EventoWrapper">
                            <div className="EventoColumn">
                                <Slider {...settings}>
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Inicio de los eventos"}
                                    />
                                    {this.state.evento.map( objeto =>
                                        <div key={objeto.id}>
                                            <Item
                                                id={"EventoItemS"}
                                                id2={"EventoFechaS"}
                                                id3={"EventoTitulo"}
                                                id4={"EventoDescripcionS"}
                                                fecha={dateFormat(objeto.fecha, 'UTC:dd mmmm yyyy')}
                                                titulo={objeto.titulo}
                                                descripcion={objeto.descripcion}
                                            />
                                        </div>
                                    )}
                                    <Item
                                        id={"InicioFinS"}
                                        id2={"InicioFinColor"}
                                        fecha={"Fin de eventos"}
                                    />
                                </Slider>
                            </div>
                        </div>
                    </div>
            );
            }
        }
  }

  export default Eventos