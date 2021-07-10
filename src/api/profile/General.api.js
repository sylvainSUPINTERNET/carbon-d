
import {config} from "./config";

export const userDetails = async () => {
    return await fetch(`${config.URL}/users/testuser`, {
        "method": "GET",
        "credentials": "include",
        "mode": "cors"
    });
}

export const me = async (scopesList) => {
    return await fetch(`${config.URL}/users/me?details=${scopesList.join("&")}`, {
        "method": "GET",
        "credentials": "include",
        "mode":"cors"
    });
}

export const getClasses = async () => {
    return await fetch(`${config.URL}/classes`, {
        "method": "GET",
        "credentials": "include",
        "mode":"cors"
    });
}

export const joinClasses = async (classeName) => {
    return await fetch(`${config.URL}/classes/${classeName}`, {
        "method": "PUT",
        "credentials": "include",
        "mode":"cors"
    });
}