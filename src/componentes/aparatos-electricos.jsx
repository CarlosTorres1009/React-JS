import React from "react";
import "../estilos/aparatos-electricos.css";
import imagen2 from "../imagenes/aparatos electricos.jpg";


function AparatosElectricos () {
    return(
        <div className="contenedor3">
            <h1 className="contenedor4"> Aparatos Electricos
            </h1>
            <img className="contenedorImagen2"src={imagen2}/>
            <p className="contenedorParrafo2">Se encontrara todo el material realacionado con interruptores, tomas corrientes, rosetas.</p>
            
         </div>
    );
}

export default AparatosElectricos;