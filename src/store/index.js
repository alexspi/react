import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from "../store/profile/profileReducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import gistsReducer from "./gists/reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, allReducers);


export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

// создаем persistor
export const persistor = persistStore(store);