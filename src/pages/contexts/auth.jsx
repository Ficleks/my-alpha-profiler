import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession } from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredToken = localStorage.getItem("token");

        if (recoveredToken) {
            setToken(recoveredToken);
        }

        setLoading(false);
    }, []);



    const login = async (email, password) => {
        const response = await createSession(email, password);

        console.log('login auth', response.data);

        const loggedUser = response.data.email;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`

        setToken(token);
        navigate("/");
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;

        setToken(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, user: token, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}