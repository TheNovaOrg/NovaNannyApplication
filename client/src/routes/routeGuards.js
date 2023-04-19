import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    if (!username) {
        return <Navigate to={'/login'} replace={true}></Navigate>;
    }
    return children;
}