/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* ~ ~ ~ ~ ~ { Import Screens & Components } ~ ~ ~ ~ ~ */
import Home from './screens/Home';
import Navbar from "./components/Navbar";

/* ~ ~ ~ ~ ~ { Main (React) Process } ~ ~ ~ ~ ~ */
function App() {
  /* - - - - - < Return JSX Markup /> - - - - - */
  return (
    <BrowserRouter>
      <Navbar title='GitHub Search' icon='fab fa-github' variant='navbar bg-primary' />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

/* ~ ~ ~ ~ ~ { Export the Application } ~ ~ ~ ~ ~ */
export default App;