import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AlertBoxActions } from '../redux/slice/alertBoxSlice';
import { AuthActions } from '../redux/slice/authSlice';

export function useAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const authTimer = useCallback((data) => {
        // add new token in local storage and set expiry date
        localStorage.setItem("token", data.token);

        const remainingMilliseconds = 24 * 60 * 60 * 1000;

        const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
        );

        localStorage.setItem("expiryDate", expiryDate.toISOString());

        autoLogout(remainingMilliseconds);
        //dispatch(AlertBoxActions.getAlertBoxReducer(data));
        navigate("/home");
    }, []);

    const logout = useCallback(() => {
        dispatch(AuthActions.resetAuth());
        localStorage.clear();
        navigate("/login");
    }, [dispatch]);

    const autoLogout = useCallback((milliseconds) => {
        setTimeout(() => {
            logout();
        }, milliseconds);
    }, [logout]);

    return { logout, autoLogout, authTimer };
}