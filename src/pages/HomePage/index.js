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
    const userName = session.name;//"Fulano";
    return React.createElement('div', { className: 'container' }, React.createElement('div', { className: 'head' }, React.createElement('img', { src: photo, width: '64' }), React.createElement('h1', null, `Olá, ${userName}!`), React.createElement('div', null, React.createElement('Button', { onClick: handleEdit }, 'Editar'), React.createElement('Button', { onClick: handleLogout }, 'Logout'))), React.createElement('div', { className: 'user-profile' }));
}
export default HomePage