import React from 'react'
import Emailfromsantisima from './emailformNazareno';
import Map from '../Mapa/mapanazareno';
import credentials from '../../credentials';
import './emailform.css';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.googlemap}`

function leftpart() {
    return (
        <div className="FormContainer">
            <div className="FormWrapper">
                <div className="FormColumn">
                    <div className='form-container'>
                        <div className='form-content-left'>
                            <Map
                                googleMapURL= {mapURL}
                                containerElement= {<div style={{height:'100%', borderRadius:'10px 10px 10px 10px'}}/>}
                                mapElement= {<div style={{height: '100%', borderRadius: '10px 10px 10px 10px'}}/>}
                                loadingElement= {<p>Cargando</p> }
                            />
                        </div>
                        <Emailfromsantisima/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default leftpart
