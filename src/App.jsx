import React from "react";
import "./App.css";
import { Routes, Route, useParams, NavLink as NL } from "react-router-dom";
import { Header,   CenteredCont} from "./estilos-componentes/styles-comp";
import { dataCelu } from "./data/dataCelu";
import Home from "./components/Home";
import Searchpage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";
import NavLink from "./components/NavLink";

 
//esta es la pantalla principal
function App() {
  return (
    <div>
      <Header>
        <h1>Logo</h1>
        <nav className="menu" />
        <nav>
          <ul>
            <li>
             <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <CenteredCont>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<Searchpage />} />
        <Route path="/celulares/:nameCelular" element={<Celulares />}>
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;
