import {useParams} from "react-router-dom";

import NoChats from "./NoChats";

const Chats = ({chats}) => {
    let {chatId} = useParams();

    return chats[chatId] ? (
        <div className={'chats'}>
            {chatId}
        </div>
    ) : <NoChats/>;
}
export default Chats;


