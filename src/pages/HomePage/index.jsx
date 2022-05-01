import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/auth";
import Button from "../../components/Button";

import "./styles.css"

const HomePage = () => {
    const { logout, getCookies } = useContext(AuthContext);
    const [userData, setUserData] = useState("");

    // async function getData() {
    //     const theUser = await getCookies();
    //     setUserData(theUser);
    // }

    // getData();

    getCookies();

    //console.log('user data', userData);

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