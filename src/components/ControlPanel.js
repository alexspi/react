import {Box, Fab, TextField} from "@material-ui/core";
import React, {useCallback, useState} from "react";
import {Send} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessagesWithFB} from "../store/middleware";


const ControlPanel = () => {

    const [value, setValue] = useState("");
    const { name } = useSelector(state => state.profile)
    const {chatId} = useParams();
    const dispatch = useDispatch();

    // const messages = useSelector(state => state.messages.messageList);

    const handleButton = () => {
        if (value !== "") {
            const message = {
                text: value,
                author: name
            }
            dispatch(addMessagesWithFB(chatId, message))
            setValue("");
        }
    };

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value]);

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