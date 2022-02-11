import React from 'react';
import {Redirect, Route} from 'react-router-dom'


const ProtectRoute = ({ component: Component, ...rest}) => (
        <Route
            {...rest}
            render={props => {
                if(localStorage.getItem('access') === null){
                    return <Redirect to="/login_santisima"/>;
                }
                else{
                    if(localStorage.getItem('rol') === '2'){
                    return <Component {...props} />;}
                    else{
                        return(
                            <h1>No estás autorizado para gestionar estos datos</h1>
                        )
                    }
                }

            }}
        />
);


export default ProtectRoute
