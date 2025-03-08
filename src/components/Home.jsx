import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <nav>
        <ul>
          <li><Link to="/about">Sobre Nosotros</Link></li> 
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/pagar">Pagar</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;