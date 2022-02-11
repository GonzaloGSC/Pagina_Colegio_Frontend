import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

const Map =(props)=>{
    return(
        <>
        <GoogleMap 
            defaultZoom={19}
            defaultCenter={{lat: -33.442921, lng: -70.763831}}   
        />
        <Marker 
            draggable={true}
            position={{lat: -33.442921, lng: -70.763831}}  
        />
        </>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)

