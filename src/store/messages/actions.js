export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});


export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    console.log(addMessageWithThunk, chatId, message);

    if (message.author !== 'bot') {
        const botMessage = {text: "привет, я бот - лови сообщение", author: 'bot'}
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 2000);
    }
};