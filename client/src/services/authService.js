import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export async function authenticateUser(username) {
    try {
        return await axios.post('/api/authenticate', { username: username });
    } catch (error) {
        return { error: "Username doesn't exist!" };
    }
}

export async function registerUser({ username, email, password }) {
    try {
        const { status, data } = await axios.post('/api/register', { username, email, password });
        /** send registration success email */
        if (status === 201) {
            await axios.post('/api/registerEmail', { username, userEmail: email, text: data })
        }
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({ error });
    }
}

export async function loginUser(credentials) {
    try {
        const { data } = await axios.post('/api/login', credentials);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({ error: "Password doesn't Match...!" });
    }
}