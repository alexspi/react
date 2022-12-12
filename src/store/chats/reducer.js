import {ADD_CHAT, CHAT_LIST_UPDATE, DELETE_CHAT} from "./actions";

const initialState = {
    chatList: []
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.name
                    }
                ]
            }
        case DELETE_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.slice(0, action.index),
                    ...state.chatList.slice(action.index + 1),
                    // ...state.chatList.slice(),
                ]
            }
        case CHAT_LIST_UPDATE:
            console.log('chatListUpdate, reducer', action);
            return {
                ...state,
                chatList: action.chats
            }

        default:
            return state
    }
}
export default chatsReducer;