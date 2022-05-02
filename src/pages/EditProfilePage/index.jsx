import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { AuthContext } from "../contexts/auth";
import imageFile from "../../scripts/imageFile.js"
import pic from "../../assets/avatar.png";

import "./styles.css"

const EditProfilePage = () => {
    const { session, saveEditProfile, deleteProfile, saveEditPhoto } = useContext(AuthContext);
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

        ifImageExist(image);
    }, [session])

    const handleSubmit = (e) => {
        e.preventDefault();
        //const newDate = birthday.replace(/-/g, "/");

        console.log('Edit', { name, birthday, email, password });

        saveEditProfile(password, name, email, birthday, image);
    }

    const handleBackHomeClick = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const handleDeleteClick = (e) => {
        e.preventDefault();
        deleteProfile();
    }

    const changeImgHandler = async (event) => {
        const file = event.target.files[0];
        console.log(file);
        //const fileSize = imageFile.size_of_image(file);

        if (file.size / 1024 < 2000) {
            console.log("Imagem pronta!");
            const finalFile = await imageFile.process_image(file);
            saveEditPhoto(finalFile);
            //setImage(finalFile);
            //finalFile file.name

        }
        else {
            console.log(event.target.files);
            event.target.value = "";
        }
    };

    function ifImageExist(image) {
        if (!image) {
            setImage(pic);
        } else {
            setImage(session.photo);
        }
    }

    return (
        <div className="edit-container-body">
            <div className="edit-container">
                <div className="edit-header">
                    <button className="edit-delete-btn" onClick={handleDeleteClick}>Deletar</button>
                    <h2>Editar Perfil</h2>
                    <Button onClick={handleBackHomeClick}>Voltar</Button>
                </div>
                <div className="edit-profile-data">
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
                        <div className="edit-actions">
                            <Button type="submit">Salvar</Button>
                        </div>
                    </form>
                    <div className="edit-image">
                        <img
                            alt="avatar"
                            className="my-img"
                            src={image}
                        />
                        <input type="file" onChange={changeImgHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditProfilePage;