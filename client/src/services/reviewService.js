import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function addReview(review, userId, nannyId) {
    try {
        const { data } = (
            await axios.post(`/api/reviews/${userId}/${nannyId}`, { review }
            )
        );
        return data;
    } catch (error) {
        return { error: "Failed to create review." };
    }
}

export async function deleteUserReview(userId, nannyId, reviewId) {
    try {
        const { data, status } = (
            await axios.delete(`/api/reviews/${userId}/${nannyId}/${reviewId}`
            )
        );
        return { data, status };
    } catch (error) {
        if (error.response.status === 403) return { status: 403, error: "Permission denied. Only the author of the review can delete the review." };
        else return { error: "Something went wrong. Failed to delete review." };
    }
}