import {Link} from 'react-router-dom';

const ChatList = ({chats, chatId}) => {
    console.log({ chats })
    return (<div className={"ChatList"}>
        {chats?.map((chat, i) => {
            return (
                <Link to={`chats/${chat.id}`} key={i} style={{color: chat.id === chatId ? 'grey' : 'black', padding: 5}}>
                    {chat?.name}
                </Link>
            );
        })}
    </div>)
}
export default ChatList;
