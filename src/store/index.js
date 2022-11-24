import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from "../store/profile/profileReducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));