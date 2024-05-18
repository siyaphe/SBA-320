import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import './style.css'
import React from "react";

import Meals from "./pages/Meals";
import Mealitem from "./pages/Mealitem";


 function App() {
  
  return (
    <div className="App">
        
        <Nav />

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/meals/" element={<Meals />}/>
        <Route path="/mealitem" element={<Mealitem />}/>  
      </Routes>  
    </div>
  );
}
export  default App