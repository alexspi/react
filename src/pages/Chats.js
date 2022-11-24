import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from "../components/ControlPanel";

const Chat = () => {

    return (
        <div className='chatsList'>
            <ChatList />
            <div style={{height: "300" }}>
                <MessageList />
                <ControlPanel />
            </div>
        </div>
    )
}
export default Chat;



