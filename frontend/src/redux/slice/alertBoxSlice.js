import { createSlice } from '@reduxjs/toolkit';
import { closeAlertBoxReducer, saveAlertBoxDataReducer } from '../reducer/alertBoxReducer';


const initialAlertBoxState = {
    data: {
        success: false,
        description: ''
    },
    isVisible: false
};


const AlertBoxSlice = createSlice({
    name: 'alertBox',
    initialState: initialAlertBoxState,
    reducers: {
        saveAlertBoxDataReducer,
        closeAlertBoxReducer
    }
});

export const AlertBoxActions = AlertBoxSlice.actions;
export default AlertBoxSlice.reducer;