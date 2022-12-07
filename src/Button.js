import PropTypes from "prop-types";


const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Increase count dude!</button>
        </div>
    )

}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button