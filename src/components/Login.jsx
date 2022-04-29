import React from "react";
import Button from "./Button";

import "./Login.css";

const Login = () => {

    return (
        <div className="login-module">
            <input type="text" />
            <input type="password" />
            <Button>Login</Button>
        </div>
    );

}

export default Login;