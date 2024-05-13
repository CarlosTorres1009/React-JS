import React from "react";
import "../estilos/alambre.css";
import imagen1 from "../imagenes/Alambre.jpg";


function Alambre () {
    return(
        <div className="contenedor1">
            <h1 className="contenedor2"> Cables
            </h1>
            <img className="contenedorImagen1"src={imagen1}/>
            <p className="contenedorParrafo1">Se encontraran todos los productos relacionados con cables, alambres para la construccion.</p>
         </div>
         
    );

}

export default Alambre;