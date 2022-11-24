import {useCallback, useState} from "react";
import { store } from '../store/index';
import {toggleShowName} from "../store/profile/chat";

const Profile = () => {
    const {showName, name} = store.getState();
    const dispatch = store.dispatch;
    const [dummy, setDummy] = useState();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
        setDummy({});
    }, [dispatch])

    return (
        <div className="userProfile">
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />

            {showName && <div>{name}</div>}
        </div>

    );
};

export default Profile;