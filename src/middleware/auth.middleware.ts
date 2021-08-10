import { authAction } from "../actions/auth.actions";
import { me as meAPI } from "../api/Auth";

export const me = () => {
    meAPI().then((u) => authAction.fetch(u));
}