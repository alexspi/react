import {Component} from "react";

export class Message extends Component {
    state = {
        message: 'вы можете изменить это сообщение',
    }

    handleChangeMessage = (ev) => {
        this.setState({message: ev.target.value})
    }
    handleClick = (ev) => {
        ev.preventDefault()
        console.log(this.state.message)
    }
    render() {
        return (
            <form >
                <p>Message props: {this.props.message}</p>
                <p>Message state: {this.state.message}</p>
                <input type={"text"} onChange={this.handleChangeMessage}/>
                <button type={"button"} onClick={this.handleClick}>change message</button>
            </form>
        );
    }
}