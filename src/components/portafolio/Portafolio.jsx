import React from "react";
import "./portafolio.css";

const Portafolio = () => {
    return (
        <div className="portafolio__contenedor">
            <h2 className="portafolio__titulo">Portafolio</h2>

            <button className="portafolio__contenido">
                <div className="portafolio__grid">
                    <div className="portafolio__contenedor-imagen">
                        <img src="panaderiaCliente.webp" alt="panadería" />
                    </div>
                    <div className="portafolio__contenedor-informacion">
                        <h3 className="portafolio__informacion-titulo">
                            Panadería - cliente
                        </h3>

                        <p className="portafolio__informacion-descripcion">
                            Sistema de inventario y producción para panaderías.
                            Desarrollado con tecnologías como React,
                            styled-components y css
                        </p>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Portafolio;
