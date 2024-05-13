import React from "react";
import "../estilos/herramientas-manuales.css";
import imagen4 from "../imagenes/herraminetas_manuales.jpg";



function Herramientas () {
    return(
        <div className="contenedor7">
            <h1 className="contenedor8"> Herramientas Manuales
            </h1>
            <img className="contenedorImagen4"src={imagen4}/>
            <p className="contenedorParrafo4">Se encontrara todo lo relacionado con herramientas como destornilladores, alicates, decametros.</p>
           
         </div>
         
    );

}

export default Herramientas;