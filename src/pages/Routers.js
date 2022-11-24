import {Box, Paper, ListItemButton, ListItem} from "@mui/material";
import React, {useState} from "react";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Chats from "./Chats";
import Profile from "./Profile";
import NoChats from "./NoChats";
import '../App.css';

const chatListInitial = [
    {id: '1', name: 'First'},
    {id: '2', name: 'Second'},
    {id: '3', name: 'Third'}
];

const Routers = () => {
    return (
        <div className='chatsList'>
            <Box sx={{display: 'flex', width: 300, color: 'D636C9'}}>
                <Paper className='box' elevation={0} sx={{display: 'flex', color: 'D636C9'}}>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{height: 56, color: 'D636C9'}}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/chats/:chatId" element={<Chats /> }/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="*" element={<NoChats />}/>
                </Routes>
            </div>

        </div>
    )
}
export default Routers;
