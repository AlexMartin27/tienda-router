import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { invertTheme, theme } from "../estilos-componentes/theme";
import { Button } from "../estilos-componentes/styles-comp";

export const Home = () => {
    return (
      
      <ThemeProvider theme={theme}>
        <div className="features">
        <h2>Bienvenidos</h2>
        <p>Somos una tienda de celulares online</p>
  <ThemeProvider theme={invertTheme}>
  <Link to="/search-page">
    <Button>ver mas</Button>
    </Link>
  </ThemeProvider>
        
      </div>
      </ThemeProvider>
    );
  };
  
  export default Home;