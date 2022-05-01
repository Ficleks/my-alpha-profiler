import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth";
import Button from "../../components/Button";

import "./styles.css"

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    const userName = "Fulano";

    return (
        <div className="container">
            <div className="head">
                <h1>Olá, {userName}!</h1>
                <div className="button-logout">
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            <div className="user-profile">

            </div>
        </div>

    );
}

export default HomePage;