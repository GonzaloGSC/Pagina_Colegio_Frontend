import React from 'react'
import Footer from '../../components/footer'
import Icon from '../../components/iconosBars'


export function FooterContainer(){
    return(
        <Footer> 
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Contáctenos</Footer.Title>
                    <Footer.Link href="/jesus_nazareno/contacto"><Icon className="fas fa-mobile-alt" />(+569) 62382640</Footer.Link>
                    {/* <Footer.Link href="#"><Icon className="fas fa-phone" />(56 9) 1234 5678</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-phone" />(56 9) 1234 5678</Footer.Link> */}
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Escríbanos</Footer.Title>
                    <Footer.Link href="/jesus_nazareno/contacto"><Icon className="fas fa-envelope-open" />Jesus.Nazareno@escuelasespeciales.cl</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Visítenos</Footer.Title>
                    <Footer.Link href="/jesus_nazareno/contacto"><Icon className="fas fa-map-marker-alt" />San Pablo 8996, Pudahuel, Santiago - Chile</Footer.Link>
                </Footer.Column>
                </Footer.Row>
                <Footer.Link2 href="/">Sitio desarrollado por DaGo</Footer.Link2>
            </Footer.Wrapper>
        </Footer>  
    )
}