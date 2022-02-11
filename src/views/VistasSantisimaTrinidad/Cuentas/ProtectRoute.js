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
                    if(localStorage.getItem('rol')=== '1'){
                    return <Component {...props} />;}
                    else{
                        return(
                            <h1>Hubo un error, probablemente intentas acceder a una opcion
                                que no tienes permitida, porfavor intentalo nuevamente con una 
                                sesión de administrador :)
                            </h1>
                        )
                    }
                }

            }}
        />
);


export default ProtectRoute
