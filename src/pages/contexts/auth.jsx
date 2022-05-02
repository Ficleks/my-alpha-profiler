import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession, registerNewUser, getSession } from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [session, setSession] = useState({ name: "None", data: "00/00/0000", photo: "", uuid: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredToken = localStorage.getItem("token");
        getCookies();
        if (recoveredToken) {
            setToken(recoveredToken);
        }

        setLoading(false);
    }, []);

    const getCookies = async () => {
        const response = await getSession();
        const session = JSON.parse(response);
        setSession(session);
        console.log("cookies auth", response);
        return session;
    }

    const login = async (email, password) => {
        try {
            const response = await createSession(email, password);

            console.log('login auth', response);

            //const loggedUser = response.data.email;
            const token = response.data.token;

            //localStorage.setItem("user", JSON.stringify(loggedUser));
            //localStorage.setItem("token", token);
            const dateNow = new Date();
            dateNow.setTime(dateNow.getTime() + (60 * 60 * 1000));
            document.cookie = `token=${(token || "")}; expires=${dateNow.toUTCString()}; path=/`;
            api.defaults.headers.Authorization = `Bearer ${token}`

            alert(response.data.message);

            setToken(token);
            navigate("/");
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const register = async (email, password, birthday, name) => {
        console.log('entrou no registro')
        try {
            const response = await registerNewUser(password, name, email, birthday);
            alert(response.data.message);
            console.log('Register Auth', response);
            await login(email, password)
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            //navigate("/");
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        const dateNow = new Date();
        dateNow.setTime(dateNow.getTime() - (1000))
        document.cookie = `token=${(token || "")};expires=${dateNow.toUTCString()};path=/`;
        api.defaults.headers.Authorization = null;

        setToken(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!document.cookie, session: session, user: token, loading, getCookies, login, register, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}