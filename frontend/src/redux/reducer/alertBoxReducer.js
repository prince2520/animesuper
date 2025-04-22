export const saveAlertBoxDataReducer = (state, action) => {
    state.data = {
        success: action.payload.success,
        description: action.payload.description
    }
    state.isVisible = true;
};


export const closeAlertBoxReducer = (state) => {
    state.data = {
        success: false,
        description: ''
    };
    state.isVisible = false;
};
