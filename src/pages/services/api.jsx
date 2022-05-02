import axios from "axios";

const apiUrl = 'http://localhost:3001';

export const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': true,
    }
});

// export const getSession = async () => {
//     return api.get("/user/data", { withCredentials: true });
// }

export const createSession = async (email, password) => {
    return api.post("/auth/signin", { email, password }, { withCredentials: true });
}

export const registerNewUser = async (password, name, email, birthday) => {
    return api.post("/auth/signup",
        {
            name: name,
            password: password,
            email: email,
            birthday: birthday
        }
    );
}

export const getSession = async () => {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
    };

    return await fetch(apiUrl + '/user/data', requestOptions)
        .then(resp => resp.text());
}

export const editProfile = async (password, name, email, birthday, image) => {
    return api.put("/user/edit",
        {
            name: name,
            password: password,
            email: email,
            birthday: birthday,
            photo: image
        }
    );
}

// export const editProfile = async (password, name, email, birthday, image) => {

//     const userData =
//     {
//         name: name,
//         password: password,
//         email: email,
//         birthday: birthday,
//         photo: image
//     }

//     const requestOptions = {

//         method: 'PUT',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//             'Access-Control-Allow-Credentials': true
//         },
//         credentials: 'include',
//         body: JSON.stringify(userData)
//     };

//     return await fetch(apiUrl + '/user/edit', requestOptions)
//         .then(resp => resp.text());
// }