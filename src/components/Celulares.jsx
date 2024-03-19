import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Button, CenterINfo } from "../estilos-componentes/styles-comp";
import { ThemeProvider } from "styled-components";
import { theme } from "../estilos-componentes/theme";

useParams

export const Celulares = () => {
    const { nameCelular } = useParams();
  
  return (
    
      <div className="features">
        
        <h2>Info de Celulares</h2>
      <h3>{nameCelular}</h3>
      <Link to="details"><Button>Ver detalles</Button></Link>
      <Outlet />
        
      
    </div>
    
    );
  };

  export default Celulares;