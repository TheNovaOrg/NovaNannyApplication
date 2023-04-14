import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function fetchNannies() {
    try {
        console.log(token);
        const { data } = (
            await axios.get(`/api/nanny/getNannies`)
        );
        return data;
    } catch (error) {
        return { error: "Failed to fetch Nanny Data." };
    }
}

export async function fetchNanniesBySpecialization(speciality) {
    try {
        console.log(token);
        const { data } = (
            await axios.get(`/api/nanny/getNanniesBySpecialization/${speciality}`
            )
        );
        return data;
    } catch (error) {
        return { error: "Failed to fetch Nanny Data for selected specilization." };
    }
}