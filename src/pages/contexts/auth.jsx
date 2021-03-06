import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession, registerNewUser, editProfile, getSession, delProfile, exitSession, editPhoto } from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    //const [token, setToken] = useState(null);
    const defaultSession = { name: "None", data: "00/00/0000", photo: "", uuid: "" };
    const [session, setSession] = useState(defaultSession);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //const recoveredToken = localStorage.getItem("token");
        getCookies();
        /* if (recoveredToken) {
            setToken(recoveredToken);
        } */

        setLoading(false);
    }, []);

    const getCookies = async () => {
        try {
            const response = await getSession();
            const session = JSON.parse(response);
            setSession(session);
            console.log("cookies auth", response);
        } catch (error) {
            console.log(error);
            
            const dateNow = new Date();
            dateNow.setTime(dateNow.getTime() - (1000))
            document.cookie = `token=;expires=${dateNow.toUTCString()};path=/`;
            setSession(defaultSession);
            navigate("/login");
            alert(error.response.data.message);
        }
    }

    const saveEditProfile = async (password, name, email, birthday) => {
        console.log('entrou no editar')
        try {
            const response = await editProfile(password, name, email, birthday);
            //alert(response.data.message);
            
            getCookies();
            console.log('edit Auth', response);
            alert(response.message);
            //navigate("/");
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const saveEditPhoto = async (image) => {
        console.log('entrou no editar')
        try {
            const response = await editPhoto(image);
            //alert(response.data.message);
            getCookies();
            console.log('edit Auth', response);
            alert(response.message);
            //navigate("/");
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
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
            //api.defaults.headers.Authorization = `Bearer ${token}`

            alert(response.data.message);
            getCookies();
            //setToken(token);
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

    const logout = async () => {
        await exitSession();

        const dateNow = new Date();
        dateNow.setTime(dateNow.getTime() - (1000))
        document.cookie = `token=;expires=${dateNow.toUTCString()};path=/`;
        api.defaults.headers.Authorization = null;
        navigate("/login");
    }

    const deleteProfile = async () => {
        try {
            const response = await delProfile();

            alert(response.message);
            const dateNow = new Date();
            dateNow.setTime(dateNow.getTime() - (1000))
            document.cookie = `token=;expires=${dateNow.toUTCString()};path=/`;

            navigate("/login");
        } catch (error) {
            alert(error)
        }
    }

    return (
        <AuthContext.Provider
            value={
                {
                    authenticated: !!document.cookie,
                    session: session,
                    loading, saveEditProfile, getCookies, login, register, logout, deleteProfile, saveEditPhoto
                }
            }
        >
            {children}
        </AuthContext.Provider>
    );
}