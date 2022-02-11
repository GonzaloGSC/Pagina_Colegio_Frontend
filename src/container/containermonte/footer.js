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
                    <Footer.Link href="/monte_carmelo/contacto"><Icon className="fas fa-mobile-alt" />(+569) 62382639</Footer.Link>
                    {/* {/* <Footer.Link href="#"><Icon className="fas fa-phone" />(56 9) 1234 5678</Footer.Link> */}
                    <Footer.Link href="/monte_carmelo/contacto"><Icon className="fas fa-phone" />(2) 2534 8490 </Footer.Link> 
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Escríbanos</Footer.Title>
                    <Footer.Link href="/monte_carmelo/contacto"><Icon className="fas fa-envelope-open" />Monte.Carmelo@escuelasespeciales.cl</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Visítenos</Footer.Title>
                    <Footer.Link href="/monte_carmelo/contacto"><Icon className="fas fa-map-marker-alt" /> Av. Portales 285, Maipú, Santiago - Chile</Footer.Link>
                </Footer.Column>
                </Footer.Row>
                <Footer.Link2 href="/">Sitio desarrollado por DaGo</Footer.Link2>
            </Footer.Wrapper>
        </Footer>  
    )
}