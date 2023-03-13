import axios from "axios";

// get user info/details
export async function getUserInfo(username) {
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error: "Password doesn't Match...!" };
    }
}