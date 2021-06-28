
import {config} from "./config";

export const userDetails = async () => {
    return await fetch(`${config.URL}/users/testuser`, {
        "method": "GET",
        "credentials": "include",
        "mode": "cors"
    });
}

export const me = async (scopesList) => {
    return await fetch(`${config.URL}/users/me`, {
        "method": "GET",
        "credentials": "include",
        "mode":"cors"
    });
}