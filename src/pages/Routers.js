import {Box, Paper, ListItemButton, ListItem, Button} from "@mui/material";
import React, {useState} from "react";
import {Link, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Home from "./Home";
import Chats from "./Chats";
import Profile from "./Profile";
import NoChats from "./NoChats";
import '../App.css';
import Gists from "./Gists";
import SignUp from "./SignUp";
import RequiredAuth from "../hocs/RequiredAuth";
import Login from "./Login";
import useAuth from "../hook/useAuth";

const chatListInitial = [
    {id: '1', name: 'First'},
    {id: '2', name: 'Second'},
    {id: '3', name: 'Third'}
];

const Routers = () => {
    let auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

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
                    <ListItem disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/signup'>Sign Up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/login'>Login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Button onClick={() => auth.signout(() => {
                                navigate(from, {replace: true})
                            })}>Sign Out</Button>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route path="/" exact element={<Home message={"Hi"}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

                    <Route element={<RequiredAuth/>}>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/chats/:chatId" element={<Chats/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="*" element={<NoChats/>}/>
                        <Route path="/gists" element={<Gists/>}/>
                    </Route>
                </Routes>
            </div>

        </div>
    )
}
export default Routers;
