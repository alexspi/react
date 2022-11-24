import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button, Dialog, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {addChat, deleteChat} from "../store/chats/actions";
import {Delete} from "@material-ui/icons";


const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const {chatId} = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    }

    const handleDelete = (index) =>{
        dispatch(deleteChat(index));
    }

    return (
        <div className='chatList'>
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{color: chat.id === chatId ? `black` : `grey`}}>
                            {chat.name}
                        </b>
                        <Button onClick={()=> handleDelete(index)}>
                            <Delete style={{color: "white"}}/>
                        </Button>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Add chat</Button>
                <Dialog onClose={handleClose} open={visible}>
                    <DialogTitle> Please, insert chat`s name </DialogTitle>
                    <div className='chatNameBox'>
                        <TextField value={newChatName} onChange={handleChange}/>
                        <Button onClick={onAddChat} disabled={!newChatName}>Add chat</Button>
                    </div>
                </Dialog>
            </div>
        </div>

    )
}
export default ChatList;
