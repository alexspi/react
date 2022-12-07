import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import {CHANGE_NAME} from "../store/profile/chatActions";

const Profile = () => {
    const {name, showName} = useSelector(state => state.profile.name);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
        setValue(event.target.value)
    }, []);

    const setName = useCallback(() => {
        dispatch({type: CHANGE_NAME, payload: value})
    }, [dispatch, value])

    return (
        <div className="userProfile">
            <div>
                <h4>Profile</h4>
            </div>
            <div className="changeUserProfile">
                <input
                    type='text'
                    value={value}
                    onChange={handleChange}
                />
                <button onClick={setName}>Change Name</button>
            </div>

        </div>
    )
}

export default Profile;