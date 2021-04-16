import React from 'react';
import Sobremi from '../sobremi/Sobremi';
import "./Body.css";

const Body = () => {

    return ( 
        <div className="body__contenedor">
            <h1 className="body__bienvenido"> Bienvenido Juan Cabello </h1>
            <Sobremi />
        </div>
     );
}
 
export default Body;