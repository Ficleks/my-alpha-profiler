import React, { useState, useContext } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/auth";

import "./styles.css"

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    const handleRegisterClick = () => {
        navigate("/register");
    }

    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <div id="button-login" className="actions">
                        <Button type="submit">Login</Button>
                    </div>
                    <div id="button-register" className="actions">
                        <Button type="button" onClick={handleRegisterClick}>Register</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default LoginPage;