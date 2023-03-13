import axios from "axios";
import { getUserInfo } from "./userService";
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

export async function generateOTP(username) {
    try {
        const { data: { OTP }, status } = await axios.get('/api/generateOTP', { params: { username } });
        // send mail with OTP
        if (status === 200) {
            const { data: { email } } = await getUserInfo(username);
            const text = `Your Password Recovery OTP is ${OTP}. Verify and recover your password.`;
            await axios.post('/api/registerEmail', { username, userEmail: email, text, subject: "Password Recovery OTP" });
        }
        return Promise.resolve(OTP);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function verifyOTP(username, OTP) {
    try {
        const { data, status } = await axios.get(`/api/verifyOTP`, { params: { username, OTP } });
        return Promise.resolve(status, data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function resetPassword(username, password) {
    try {
        const { data, status } = await axios.put(`/api/resetPassword`, { username, password });
        return Promise.resolve(status, data);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function createResetSession() {
    try {
        const { data, status } = await axios.put(`/api/createResetSession`);
        console.log(data);
        return Promise.resolve(status, data);
    } catch (error) {
        return Promise.reject(error);
    }
}
