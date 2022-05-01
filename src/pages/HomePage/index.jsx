import React, { useContext, useState } from "react";

import imageFile from "../../scripts/imageFile"
import { AuthContext } from "../contexts/auth";
import Button from "../../components/Button";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { logout, session } = useContext(AuthContext);
    const navigate = useNavigate();
    // async function getData() {
    //     const theUser = await getCookies();
    //     setUserData(theUser);
    // }

    // getData();

    //getCookies();

    //console.log('user data', userData);

    const handleEdit = () => {
        navigate("/editprofile");
    }

    const handleLogout = () => {
        logout();
    }
    /* const [selectedFile, setSelectedFile] = useState();
    const changeImgHandler = (event) => {
        const file = event.target.files[0];
        //console.log(imageFile);
        imageFile.loadImage(file);
        setSelectedFile(file);
        //setIsSelected(true);
    }; */

    const userName = session.name;//"Fulano";

    return (
        <div className="container">
            <div className="head">
                <h1>Olá, {userName}!</h1>
                <div>
                    <Button onClick={handleEdit}>Editar</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                    {/* <input type="file" name="file" onChange={changeImgHandler} /> */}
                </div>
            </div>
            <div className="user-profile">

            </div>
        </div>

    );
}

export default HomePage;