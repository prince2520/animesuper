import {useContext, useState} from "react";

import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

import Button from "../../../shared/Button/Button";
import AuthContext from "../../../Context/auth";
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";

const LoginForm = () => {
    const authCtx = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const loginHandler = (event) => {
        event.preventDefault();
        authCtx.loginHandler(event.target[0].value, event.target[1].value)
    }

    return (
        <form onSubmit={(event) => loginHandler(event)}>
            <div className="heading">Login</div>
            <span>
                <label htmlFor="email">Email</label>
                <span className="input-box">
                    <Icon
                        icon="ic:outline-email"
                        />
                    <input
                        name='email'
                        style={{borderLeft: "0.095rem solid var(--border)", paddingLeft: "0.5rem"}}
                        type="email"
                        placeholder="Enter your username"/>
                </span>
            </span>
            <span>
                <label htmlFor="password">Password</label>
                <span className="input-box">
                    <input
                        name='password'
                        type={!showPassword ? 'password' : 'text'}
                        style={{borderRight: "0.095rem solid var(--border)", paddingRight: "0.5rem"}}
                        placeholder="Enter your password"
                    />
                    <ZoomInZoomOut width={"fit-content"}>
                        <Icon
                            className={'cursor-btn'}
                            icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                            onClick={() => setShowPassword(!showPassword)}
                            />
                    </ZoomInZoomOut>
                </span>
            </span>
            <div className='form-btn-container'><Button title="Login"/></div>
            <span className="change-box">
                <p>Don't have an account?</p>
                    <Link to='/signup' className="change-form">Sign up</Link>
            </span>
        </form>
    );
}

export default LoginForm;