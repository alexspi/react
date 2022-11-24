import {useState} from "react";

export const Count = ({name}) => {

    const [count, setCount] = useState(1);
    const handleClick = () => {
        setCount((prevCount)=>prevCount + 1)
    }
    return (
        <>
            <p>{name}</p>
            <p>Count state: {count}</p>
            <button type={"button"} onClick={handleClick}>click</button>
        </>
    )
}