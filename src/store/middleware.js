import {API_URL_PUBLIC} from "../constants/endpoints";
import {getGistsFailure, getGistsRequest, getGistsSuccess} from "./gists/actions";
import {getDatabase, push, ref, set, onValue, remove} from "firebase/database";
import firebase from "../service/firebase";
import {chatListUpdate} from "./chats/actions";
import {updateMessages} from "./messages/actions";


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

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, {name: name}).then((res)=>{
        console.log(res);
    });
};

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then(res => console.log("removed chat:", res))
    remove(messagesRef).then(res => console.log("removed messages:", res))
};

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data =snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({id: item, name: data[item].name}));
        console.log("initTracker, chatArr.id:", chatArr[0].id);
        dispatch(chatListUpdate(chatArr))
    });
};

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot) => {
        const data = snapshot.val();
        const msg = data && Object.values(data);
        console.log("Msg:",msg);
        if(msg?.length > 0) {
            dispatch(updateMessages(chatId, msg));
        }
    });
};

export const addMessagesWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res)=> console.log("set:",res));
};
