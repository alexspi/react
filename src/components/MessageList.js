import {Adb, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText} from "@mui/material";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useCallback} from "react";

const MessageList = () => {
    let {chatId} = useParams();
    const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    const getMessagesById = messages[chatId];

    const renderMessage = useCallback((message, index) => {
        return (
            <ListItem
                button
                key={index}
            >
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: message.author === 'bot' ? 'green' : "blue"}}>
                        {message.author !== profileName ? <Adb/> : <Face/>}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className='styleMessages' primary={message.text} secondary={message.author}/>
            </ListItem>
        )
    }, [profileName])

    return (
        <Box className={"dashboard"} sx={{ border: '1px solid #ссс'}}>
            <List sx={{mb: 2, width: 500, }}>
                {getMessagesById?.map((message, index) => renderMessage( message, index ))}
            </List>
        </Box>
    );
};

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList