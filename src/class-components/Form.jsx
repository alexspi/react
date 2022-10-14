import {Component} from "react";
import {Count} from "./Count";

export class Form extends Component {

    state = {
        count: 1,
        name: 'geeck',
        arr: ['ivanov', 'petrov', 'vasechkin']
    }
    handleChangeName = (ev) => {
        this.setState({name: ev.target.value})
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.state.name)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.arr.map((item,idx) => {
                    return <div key={idx}>{item}</div>
                })}
                <p>Name: {this.state.name}</p>
                <input type={"text"} onChange={this.handleChangeName}/>
                <button>change name</button>
            </form>
        );
    }
}