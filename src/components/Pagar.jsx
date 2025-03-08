import { useAuth } from "../context/AuthContext";
import React from "react";

const Pagar = () => {
  const { logged } = useAuth();

  return (
    <div className="container">
      <h2>Pagar</h2>
      <p><strong>{logged?.username}</strong></p>
      <p>Bienvenido, aquí puedes realizar tu pago.</p>
    </div>
  );
};

export default Pagar