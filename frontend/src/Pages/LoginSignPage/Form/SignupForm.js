import {useContext, useState} from "react";

import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

import Button from "../../../shared/Button/Button";
import AuthContext from '../../../Context/auth'
import ZoomInZoomOut from "../../../animation/Wrapper/ZoomInZoomOut";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const authCtx = useContext(AuthContext);

    const signUpHandler = async (event) => {
        event.preventDefault();
        authCtx.signUpHandler(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
    }

    return (
        <form onSubmit={(event) => signUpHandler(event)}>
            <div className="heading">Sign up</div>
            <span>
                <label htmlFor="text">Username</label>
                <span className="input-box">
                    <Icon
                        icon="gg:profile"
                        />
                    <input
                        name={'username'}
                        style={{borderLeft: "0.095rem solid", paddingLeft: "0.5rem"}}
                        type="text" placeholder="example_123"/>
                </span>
            </span>
            <span>
                <label htmlFor="email">Email</label>
                <span className="input-box">
                    <Icon
                        icon="ic:outline-email"
                        />
                    <input
                        name={'email'}
                        style={{borderLeft: "0.095rem solid", paddingLeft: "0.5rem"}}
                        type="email"
                        placeholder="example@email.com"/>
                </span>
            </span>
            <span>
                <label htmlFor="password">Password</label>
                <span className="input-box">
                    <input
                        name={'password'}
                        type={!showPassword ? 'password' : 'text'}
                        style={{borderRight: "0.095rem solid", paddingRight: "0.5rem"}}
                        placeholder="Pick a strong password"/>
                    <ZoomInZoomOut width={"fit-content"}>
                        <Icon
                            className={'cursor-btn'}
                            icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                            onClick={() => setShowPassword(!showPassword)}
                            />
                    </ZoomInZoomOut>
                </span>
            </span>
            <span>
                <label htmlFor="confirm-password">Confirm Password</label>
                <span className="input-box">
                    <input
                        name={'confirm-password'}
                        type={!showConfirmPassword ? 'password' : 'text'}
                        style={{borderRight: "0.095rem solid", paddingRight: "0.5rem"}}
                        placeholder="Confirm your password"/>
                    <ZoomInZoomOut width={"fit-content"}>
                        <Icon
                            className={'cursor-btn'}
                            icon={!showConfirmPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                    </ZoomInZoomOut>
                </span>
            </span>
            <div className='form-btn-container'><Button title="Create Account"/></div>
            <span className="change-box">
                <p>Already have an account? </p>
                    <Link to='/login' className="change-form"> Login </Link>
            </span>
        </form>);
}

export default SignupForm;