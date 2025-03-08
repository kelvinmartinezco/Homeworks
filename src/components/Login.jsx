import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username) {
            setError("El nombre de usuario es requerido");
            return;
        }
        setError("");

        login({ username });
        const from = location.state?.from?.pathname || "/dashboard";
        navigate(from);
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick= { handleLogin }>Iniciar sesion</button>
            {error && <p style={ {color: "red"}}>{error}</p>}
        </div>
    )
}
export default Login;