import React from "react";
import "../estilos/iluminacion.css";
import imagen5 from "../imagenes/iluminacion.jpg";

function Iluminacion() {
    return(
        <div className="contenedor9">
            <h1 className="contenedor0"> Iluminacion
            </h1>
            <img className="contenedorImagen"src={imagen5}/>
            <p className="contenedorParrafo5">Se encuentra todo lo relacionado con bombillos, lamparas led, lamparas incandescentes, luces led. </p>
         </div>
         
    );

}

export default Iluminacion;