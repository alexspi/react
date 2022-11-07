import './App.css';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import {TextField, Fab} from "@material-ui/core";
import MessageList from "./components/MessageList";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


function App() {
    const [messageList, setMessagesList] = useState([]);
    // const [Chats, setChats] = useState([{numid: 1, name: 'Chat 1'},
    //     {numid: 2, name: 'Chat 2'},
    //     {numid: 3, name: 'Chat 2'}]);

    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [])


    const handleSend = () => {
        setMessagesList([...messageList, {text: value, author: 'me'}]);
        setValue('');
    }
    useEffect(() => {
        let timer;
        if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
            timer = setInterval(() => {
                setMessagesList([...messageList, {
                    text: 'сообщение бота',
                    author: 'bot'
                }]);
            }, 1500);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [messageList])

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div className='App'>
            <div className='chatsList'>
                <Box sx={{width: '100%', maxWidth: 360}}>
                    <nav aria-label="ListFolders" className="ListFolders"> Чаты:
                        <List className='chatName'>

                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="ЧАТ №1"/>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="ЧАТ №2"/>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="ЧАТ №3"/>
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="ЧАТ №4"/>
                            </ListItemButton>
                        </List>
                    </nav>
                    <Divider/>
                </Box>
            </div>
            <MessageList messageList={messageList}></MessageList>
            <div className='controlPanel' style={{margin: "10px 20px"}}>
                <TextField
                    ref={inputRef}
                    style={{margin: '0 20px'}}
                    id="outlined-basic"
                    label="Пиши здесь"
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    autoFocus={true}
                />
                <Fab color="primary" aria-label="edit" onClick={handleSend}>Send</Fab>

            </div>
        </div>
    );
}

export default App;