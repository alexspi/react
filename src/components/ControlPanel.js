import {Box, Fab, TextField} from "@material-ui/core";
import React, {useCallback, useState} from "react";
import {Send} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessageWithThunk} from "../store/messages/actions";


const ControlPanel = () => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const profileName = useSelector(state => state.profile.name)
    const {chatId} = useParams();

    // const messages = useSelector(state => state.messages.messageList);

    const handleButton = useCallback(()=> {
        dispatch(addMessageWithThunk(chatId, {
            text: value,
            author: profileName
        }))
        setValue("")
    }, [chatId, value, dispatch]);

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);

    // Использовали для создания сообщения бота, без
    // useEffect(() => {
    //     let timer;
    //     const currentChat = messages[chatId];
    //
    //     if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
    //         timer = setInterval(() => {
    //             const currentMessage = 'Сообщение сгенерировано автоматически';
    //             sendMessage(currentMessage, 'bot');
    //             console.log(currentChat[currentChat.length - 1]?.author);
    //         }, 1500);
    //     }
    //
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [chatId])

    return (
        <>
            <Box sx={{
                margin: '20px 0px 0px 110px'
            }}
                 component='form'
                 noValidate
                 autoComplete='off'
                 flexDirection='row'
                 justifyContent='space-between'
            >
                <div className='controlPanel' style={{margin: "10px 20px"}}>
                    <TextField
                        style={{margin: '0 20px'}}
                        id="outlined-basic"
                        label="Insert message"
                        variant="filled"
                        value={value}
                        onChange={handleChange}
                        autoFocus
                    />
                    <Fab color="primary" aria-label="edit" onClick={handleButton}>
                        <Send/>
                    </Fab>

                </div>
            </Box>
        </>)
}

export default ControlPanel;