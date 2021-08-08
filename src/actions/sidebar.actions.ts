import { bindActionCreators } from "redux";
import { store } from "../store";
import { SIDEBAR_TOGGLE } from "./actions.constants";

export const sidebarToggle = () => ({ type: SIDEBAR_TOGGLE });

export const sidebarActions = bindActionCreators(
  { sidebarToggle },
  store.dispatch
);
