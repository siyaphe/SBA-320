import { Link } from "react-router-dom";
import React from 'react';
export default function Nav (props) {
  return (

    
    <div className="nav">
     
        <Link to="/meals">
          <div>Meals</div>
        </Link>
    
    </div>
  );
}