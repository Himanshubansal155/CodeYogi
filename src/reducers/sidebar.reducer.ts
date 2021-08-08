import { Reducer } from "redux"
import { SIDEBAR_TOGGLE } from "../actions/actions.constants";

export interface SidebarState {
    isSidebarOpen: boolean;
}

const initialState = {
    isSidebarOpen: true,
}

export const sidebarReducer:Reducer<SidebarState> = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            return {...state, isSidebarOpen: !state?.isSidebarOpen}
        default:
            return state;
    }
}