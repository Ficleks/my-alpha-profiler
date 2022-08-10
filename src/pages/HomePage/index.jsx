import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/auth";
import Button from "../../components/Button";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { logout, session, photo, getCookies } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEdit = () => {
        getCookies();
        navigate("/editprofile");
    }

    const handleLogout = () => {
        getCookies();
        logout();
    }

    const userName = session.name;

    return (
        <div className="container">
            <div className="head">
                <div className="imglocal">
                    <img src={photo} width="64"/>
                </div>
                <h1>Olá, {userName}!</h1>     
                <div>
                    <Button onClick={handleEdit}>Editar</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            <div className="user-profile">

            </div>
        </div>

    );
}

export default HomePage;