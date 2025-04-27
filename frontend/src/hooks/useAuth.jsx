import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../redux/slice/authSlice';
import { MyFavoriteActions } from '../redux/slice/myFavoriteSlice';
import { MyWatchlistActions } from '../redux/slice/myWatchlistSlice';
import { OverlayActions } from '../redux/slice/overlaySlice';
import { helperActions } from '../redux/slice/helperSlice';

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
        dispatch(OverlayActions.resetOverlayReducer());
        dispatch(helperActions.resetHelperReducer());
        dispatch(MyFavoriteActions.resetFavoriteReducer());
        dispatch(MyWatchlistActions.resetWatchlistReducer());

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