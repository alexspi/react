import {ADD_MESSAGE, addMessage} from "./messages/actions";
import {getGistsFailure, getGistsRequest, getGistsSuccess} from "./gists/actions";
import {API_URL_PUBLIC} from "../constants/endpoints";

const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bot') {
        const botMessage = {text: "привет, я бот - лови сообщение", author: 'bot'}
        setTimeout(() => {
            store.dispatch(addMessage(action.chatId, botMessage))
        }, 2000);
    }
    return next(action);
}

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch (API_URL_PUBLIC);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status} `);
        }
        const result = await res.json();

        dispatch (getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
}
export default middleware;
