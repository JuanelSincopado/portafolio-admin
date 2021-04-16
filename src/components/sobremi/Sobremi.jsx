import React from "react";
import "./Sobremi.css";

const Sobremi = () => {
    return (
        <div className="sobremi__contenedor">
            <h2 className="sobremi__titulo" >Sobre Mi</h2>
            <p className="sobremi__texto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel in
                tempore esse nostrum eum eveniet sequi molestias tempora
                debitis. Voluptate animi ducimus nihil delectus voluptatibus
                saepe laudantium dolore. Possimus, sunt.
            </p>
            <input type="text" className="sobremi__input" />
            <input className="sobremi__boton" value="Guardar" />
        </div>
    );
};

export default Sobremi;
