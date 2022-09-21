import "./button.css";

function Button(props) {
    return (
        <button className="generic-btn" type={props.type}>
            {props.value}
        </button>
    );
}

export default Button;