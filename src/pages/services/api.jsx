import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
});

export const createSession = async (email, password) => {
    return api.post("/auth/signin", { email, password });
}

export const registerNewUser = async (password, name, email, birthday) => {
    console.log({
        name: name,
        password: password,
        email: email,
        birthday: birthday
    })
    return api.post("/auth/signup",
        {
            name: name,
            password: password,
            email: email,
            birthday: birthday
        }
    );
}