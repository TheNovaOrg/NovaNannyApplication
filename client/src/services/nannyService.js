import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function fetchNannies() {
    console.log(token);
    try {
        const { data } = (
            await axios.get(`/api/nanny/getNannies`)
        );
        return data;
    } catch (error) {
        return { error: "Failed to fetch Nanny Data." };
    }
}

export async function fetchNanny(id) {
    try {
        const { data } = (
            await axios.get(`/api/nanny/getNanny/${id}`
            )
        );
        return data;
    } catch (error) {
        return { error: "Failed to fetch Nanny Data for selected specilization." };
    }
}

export async function fetchNanniesBySpecialization(speciality) {
    try {
        const { data } = (
            await axios.get(`/api/nanny/getNanniesBySpecialization/${speciality}`
            )
        );
        return data;
    } catch (error) {
        return { error: "Failed to fetch Nanny Data for selected specilization." };
    }
}