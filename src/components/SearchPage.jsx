import { Link } from "react-router-dom";
import { BtnLink, CenterINfo } from "../estilos-componentes/styles-comp";
import React from "react";


// en search se busca el nombre de la marca de celular
 export const Searchpage = () => {
    const celulares = [
      "Samsung", 
      "LG",
      "Xiaomi",
      "iPhone"];
  
    return (
      <div className="features">
        <h2>pagina de busqeda</h2>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
              <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Searchpage;