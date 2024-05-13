import React from "react";
import "../estilos/herramientas-electricas.css";
import imagen3 from "../imagenes/herraminetas_electricas.jpg";



function Herramientaselectricas () {
    return(
        <div className="contenedor5">
            <h1 className="contenedor6"> Herramientas Electricas
            </h1>
            <img className="contenedorImagen3"src={imagen3}/>
            <p className="contenedorParrafo3">Se encontrara todo los relacionado con herramientas electricas como pulidoras, taladros, rotomartillos.</p>
            
         </div>
    );
}

export default Herramientaselectricas;