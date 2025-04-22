import {createSlice} from '@reduxjs/toolkit';


const initialAlertBoxState = {
    data : {
        success: false,
        description: ''
    },
    isVisible: false
};


const AlertBoxSlice = createSlice({
    name: 'alertBox',
    initialState: initialAlertBoxState,
    reducers: {
        saveAlertBoxData(state, action) {
            state.data = {
                success: action.payload.success,
                description: action.payload.description
            }
            state.isVisible =  true;
        },
        closeAlertBox(state) {
            state.data  = {
                success: false,
                description: ''
            };
            state.isVisible = false;
        }
    }
});

export const AlertBoxActions = AlertBoxSlice.actions;
export default AlertBoxSlice.reducer;