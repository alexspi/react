import {ADD_MESSAGE, addMessage} from "./messages/actions";

const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bot') {
        const botMessage = {text: "привет, я бот - лови сообщение", author: 'bot'}
        setTimeout(() => {
            store.dispatch(addMessage(action.chatId, botMessage))
        }, 2000);
    }
    return next(action);
}

export default middleware;
