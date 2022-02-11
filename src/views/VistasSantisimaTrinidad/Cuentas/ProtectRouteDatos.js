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
                    return <Component {...props} />;
                }    
            }
        }
    />
);


export default ProtectRoute
