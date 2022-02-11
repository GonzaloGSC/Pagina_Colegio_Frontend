import React from 'react'
import Emailfromsantisima from './emailformSantísima';
import Map from '../Mapa/mapasantisima';
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
                                containerElement= {<div style={{height:'100%', borderRadius:'10px 10px 10px 10px', width: '100%'}}/>}
                                mapElement= {<div style={{height: '100%', borderRadius: '10px 10px 10px 10px', width: '100%'}}/>}
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
