import { createSlice } from '@reduxjs/toolkit';
import { closeAlertBoxReducer, getAlertBoxReducer } from '../reducer/alertBoxReducer';


export const initialAlertBoxState = {
    success: false,
    message: '',
    isVisible: false
};

const AlertBoxSlice = createSlice({
    name: 'alertBox',
    initialState: initialAlertBoxState,
    reducers: {
        getAlertBoxReducer,
        closeAlertBoxReducer
    }
});

export const AlertBoxActions = AlertBoxSlice.actions;
export default AlertBoxSlice.reducer;