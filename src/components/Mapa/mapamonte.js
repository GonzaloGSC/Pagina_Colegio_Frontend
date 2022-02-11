import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps'

const Map =(props)=>{
    return(
        <>
        <GoogleMap 
            defaultZoom={19}
            defaultCenter={{lat: -33.5167194 , lng: -70.7605398}}
        />
        <Marker 
            draggable={true}
            position={{lat: -33.5167194, lng: -70.7605398}}  
        />
        </>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)