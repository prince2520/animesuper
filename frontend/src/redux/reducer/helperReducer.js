import { initialHelperState } from "../slice/helperSlice";

export const searchBarReducer = (state, action) => {
    state.showSearchBar = action.payload;
};

export const blurNavbarReducer = (state, action) =>{
    state.blurNavbar = action.payload;
};

export const showMobileSideBarReducer = (state, action) =>{
    state.showMobileSideBar = action.payload
}

export const resetHelperReducer = () =>{
    return {...initialHelperState};
}