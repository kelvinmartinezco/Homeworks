import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard = () => {
    const { logged, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"), 
        { replace: true }
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p><strong>{logged?.username}</strong></p>
            <button onClick={ handleLogout }>Cerrar sesion</button>
        </div>
    )
}
export default Dashboard;