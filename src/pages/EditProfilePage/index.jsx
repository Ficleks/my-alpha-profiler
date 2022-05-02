import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { AuthContext } from "../contexts/auth";

import "./styles.css"

const EditProfilePage = () => {
    const { session, saveEditProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        setName(session.name);
        setEmail(session.email);
        setBirthday(session.birthday);
        setImage("");
    }, [session])

    const handleSubmit = (e) => {
        e.preventDefault();
        //const newDate = birthday.replace(/-/g, "/");

        console.log('Edit', { name, birthday, email, password });

        saveEditProfile(email, password, birthday, name);
    }

    const handleBackHomeClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Editar Perfil</h1>
                <Button onClick={handleBackHomeClick}>Voltar</Button>
            </div>
            <div className="profile-data">
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
                    <div className="field">
                        <label htmlFor="image">Imagem</label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="actions">
                        <Button type="submit">Salvar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditProfilePage;