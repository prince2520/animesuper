import { initialAlertBoxState } from "../slice/alertBoxSlice";

export const getAlertBoxReducer = (state, action) => {
    const { message, success } = action.payload;

    state.success = success ?? false;
    state.message = message ?? "Something goes wrong";
    state.isVisible = true;
};


export const closeAlertBoxReducer = () => {
    return {...initialAlertBoxState}
};
