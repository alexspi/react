export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const UPDATE_MESSAGES_WITH_FB = 'MESSAGES::UPDATE_MESSAGES_WITH_FB';


export const updateMessages = (chatId, messages) => ({
    type: UPDATE_MESSAGES_WITH_FB,
    chatId,
    messages
});


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));
    console.log(addMessageWithThunk, chatId, message);

    if (message.author !== 'bot') {
        const botMessage = {text: "привет, я бот - лови сообщение", author: 'bot'}
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 2000);
    }
};