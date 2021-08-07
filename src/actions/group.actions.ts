import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED, SELECTED_ID_QUERY } from "./actions.constants";

export const groupQueryAction = (query: string) => ({type: GROUP_QUERY, payload: query});
export const groupQueryCompleted = (query:string, groups: Group[]) => ({type: GROUP_QUERY_COMPLETED, payload: {query, groups}});
export const groupSelectedIdAction = (selected: number) => ({type: SELECTED_ID_QUERY, payload: selected});

export const groupActions = bindActionCreators({
    groupQueryAction: groupQueryAction,
    groupQueryCompleted,
    groupSelectedIdAction,
}, store.dispatch)