import React, {Component} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from './item';
import Imagen1 from '../../imagenes/Portada Monte/Portada1_Monte.jpeg'
import Imagen2 from '../../imagenes/Portada Monte/Portada4_Monte.jpeg'
import Imagen3 from '../../imagenes/Portada Monte/Portada3_Monte.jpeg'
import Imagen4 from '../../imagenes/Portada Monte/Portada2_Monte.jpeg'
import './item.css'

class SliderPrincipal extends Component{

    constructor(props){
        super(props);
        this.state = {
            imagenes: []
       }
    }

    
    render(){

        var settings = {
            // dots: true,
            infinite: true,
            fade: true,
            arrows:false,
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 3000,
            // cssEase: "linear", Sirve para que nunca se detenga, HELL NO
          };
          
            
          this.state.imagenes = [
            {
                image: Imagen1,
            },
            {
                image: Imagen2,
            },
            {
                image: Imagen3
            },
            {
                image: Imagen4
            },
            
        ]
        
          return (
              <div className="SliderContainer2">
                  <div className="SliderWrapper2">
                      <div className="SliderColumn2">
                        <Slider {...settings}>
                            {this.state.imagenes.map( objeto =>
                                <div key={objeto}>
                                    <Item
                                        fecha={"Bienvenido a"}
                                        titulo={"Santisima Trinidad"}
                                        imagen={objeto.image}
                                    />
                                </div>
                            )}
                        
                        </Slider>
                    </div>
                </div>
            </div>
          );
        }
  }

  export default SliderPrincipal