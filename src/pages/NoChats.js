import ChatList from "../components/ChatList";

const NoChats = ({ chats }) => {
    return (
        <div>
            <ChatList chats={chats}/>
        </div>

    );
};


export default NoChats;