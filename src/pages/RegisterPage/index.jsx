import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/auth";
import "./styles.css";

const RegisterPage = () => {
    const { authenticated, register } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate = birthday.replace(/-/g, "/");

        console.log('register', { name, newDate, email, password });

        register(password, name, email, newDate);
    }

    return (
        <div id="register">
            <h1 className="title">Registro do sistema</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="birthday">Data de Nascimento</label>
                    <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
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
                <div className="actions">
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterPage;