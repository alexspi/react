import {Form as FormClass} from "./class-components/Form";
import {Count as CountClass} from "./class-components/Count";
import {Form} from "./components/Form/Form";
import {Count} from "./components/Count";
import {Child} from "./components/Child";
import {useState} from "react";
import './index.css';

export const App = () => {

    const [name, setName] = useState('geeck')
    const [count, setCount] = useState(0)
    const arr=['ivanov', 'petrov', 'vasechkin']
    const handleChangeName = (ev) => {
        setName(ev.target.value)
    }
    return (
        <div className="App">
            <CountClass count={10}/>
            <h2>Class</h2>
            <FormClass/>
            <hr/>
            <Count name={"geeekkk"}/>
            <hr/>
            <h3>Parent</h3>
            <p>{count}</p>
            <input type={"text"} onChange={handleChangeName}/>
            <h3>Child</h3>
            <Child name={name} handleChangeCount={setCount}/>
            <hr/>
            <Form/>
            <hr/>
            {arr.map((item,idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    );
}


