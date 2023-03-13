import { authenticateUser } from '../services/authService';

export async function validateUserName(username) {
    if (username && username !== " ") {
        const { status } = await authenticateUser(username);
        if (status === 200) return true;
    }
    return false;
}