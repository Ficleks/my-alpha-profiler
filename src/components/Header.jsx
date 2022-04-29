import React from "react";
import Button from "./Button";

import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>Olá, Fulano</h1>
            <Button>Logout</Button>
        </div>

    );
}

export default Header;