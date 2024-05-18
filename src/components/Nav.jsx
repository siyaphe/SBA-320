import { Link } from "react-router-dom";
import React from 'react';
export default function Nav (props) {
  return (
   <> 
        <div className="nav">
            <button className="clr-button">cⓛ𝐑</button>
            <Link to="/">Home</Link>
            <Link to="/meals">
            <div>Meals</div></Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">Sign In</Link>
        </div>
    </>
  );
}