import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(null);

    const login = (username) => {
        setLogged(username);
    };

    const logout = () => {
        setLogged(null);
    };

    return (
        <AuthContext.Provider value={{ logged, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};