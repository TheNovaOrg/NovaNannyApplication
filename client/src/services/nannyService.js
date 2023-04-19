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

export async function addNanny(formData) {
    try {
        const { data, status } = (
            await axios.post(`/api/nanny/create`, { nanny: formData }
            )
        );
        return { data, status };
    } catch (error) {
        return { error: "Something went wrong. Failed to create nanny." };
    }
}

export async function updateNanny(nannyId, formData) {
    try {
        const { data, status } = (
            await axios.put(`/api/nanny/${nannyId}`, { nanny: formData }
            )
        );
        return { data, status };
    } catch (error) {
        return { error: "Something went wrong. Failed to create nanny." };
    }
}

export async function removeNanny(nannyId) {
    try {
        const { data, status } = (
            await axios.delete(`/api/nanny/${nannyId}`
            )
        );
        return { data, status };
    } catch (error) {
        return { error: "Something went wrong. Failed to delete nanny." };
    }
} 