import './Button.css'

const Button = (props) => {
    return (
        <button style={{cursor:'pointer'}} className="login-button">{props.title}</button>
    );
}
export default Button;