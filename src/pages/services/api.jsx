import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Credentials':true,
    }
});

export const getSession = async () => {
    return api.get("/user/data", { withCredentials:true });
}

export const createSession = async (email, password) => {
    return api.post("/auth/signin", { email, password }, { withCredentials: true });
}

export const registerNewUser = async (email, password, birthday, name) => {
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