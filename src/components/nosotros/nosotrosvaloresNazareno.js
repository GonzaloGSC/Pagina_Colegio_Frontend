import React from 'react'
import Imagen from '../../imagenes/Sellos/Sello_Nazareno.png'
import Faq from '../menufaq/faq';
import './nosotros.css'


function nosotrosvalores(props) {
    return (
        <div className="NosotrosContainer">
            <div className="NosotrosWrapper">
                <div className="NosotrosRow">
                    <div className="NosotrosColumn">
                        <div id={props.subtitulo} className="SubtituloNosotros2">Valores</div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Autoestima" 
                            content ="• Posee valoración positiva y confianza en si mismo <p></p>
                            • Se preocupa de su autoimagen<p></p>
                            • Expresa adecuadamente sus emociones"
                        />
                    </div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Respeto" 
                            content ="• Demuestra actitudes de cortesía y amabilidad <p></p>
                            • Acepta las diferencias de opinión<p></p>
                            • Cumple normas establecidas por la comunidad escolar"
                        />
                    </div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Responsabilidad" 
                            content ="• Cumple compromisos adquiridos <p></p>
                                    • Cuida el entorno<p></p>
                                    • Manifiesta iniciativa en diersas situaciones"                       
                        />
                    </div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Honestidad" 
                            content ="• Dice la verdad <p></p>
                            • Reconoce errores<p></p>
                            • Solicita ayuda cuando la requiere"
                        />
                    </div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Superación" 
                            content ="• Establece objetivos y metas e intenta cumplirlos <p></p>
                            • Se esfuerza por mejorar su rendimiento<p></p>
                            • Es perseverante"
                        />
                    </div>
                    <div className="faq">
                        <Faq
                            coloricono="#1e88e5"
                            colorb="faqN"
                            color="faqcolorN"  
                            title= "Solidaridad" 
                            content ="• Manifiesta empatía y sensibilidad ante los demás <p></p>
                            • Apoya a quien lo necesita<p></p>
                            • Posee compañerismo dentro como fuera de la sala de clases"
                        />
                    </div> 
                    </div>   

                    <div className="NosotrosColumn">
                        <div id={props.subtitulo} className="SubtituloNosotros2">Sellos</div>
                            <div className="TextoNosotros2">
                                <img src={Imagen}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nosotrosvalores
