import {useContext, useState} from "react";

import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

import Button from "../../../shared/Button/Button";
import AuthContext from '../../../Context/auth'

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const authCtx = useContext(AuthContext);

    const signUpHandler = async (event) => {
        event.preventDefault();
        authCtx.signUpHandler(
            event.target[0].value,
            event.target[1].value,
            event.target[2].value,
            event.target[3].value
        );
    }

    return (
        <form onSubmit={(event) => signUpHandler(event)}>
            <div className="heading">Sign up</div>
            <span>
                <label htmlFor="text">Username</label>
                <span className="input-box">
                    <Icon
                        icon="gg:profile"
                        style={{fontSize: '1.75rem', color: 'white'}}/>
                    <input
                        name={'username'}
                        style={{borderLeft: "0.095rem solid #636262", paddingLeft: "0.5rem"}}
                        type="text" placeholder="example_123"/>
                </span>
            </span>
            <span>
                <label htmlFor="email">Email</label>
                <span className="input-box">
                    <Icon
                        icon="ic:outline-email"
                        style={{fontSize: '1.75rem', color: 'white'}}/>
                    <input
                        name={'email'}
                        style={{borderLeft: "0.095rem solid #636262", paddingLeft: "0.5rem"}}
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
                        style={{borderRight: "0.095rem solid #636262", paddingRight: "0.5rem"}}
                        placeholder="Pick a strong password"/>
                    <Icon
                        icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{fontSize: '1.75rem', color: 'white'}}/>
                </span>
            </span>
            <span>
                <label htmlFor="confirm-password">Confirm Password</label>
                <span className="input-box">
                    <input
                        name={'confirm-password'}
                        type={!showConfirmPassword ? 'password' : 'text'}
                        style={{borderRight: "0.095rem solid #636262", paddingRight: "0.5rem"}}
                        placeholder="Confirm your password"/>
                    <Icon
                        icon={!showConfirmPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{fontSize: '1.75rem', color: 'white'}}/>
                </span>
            </span>
            <div className='form-btn-container'><Button title="Create Account"/></div>
            <span className="change-box">
                <p>Already have an account? </p>
                <Link to='/login' className="change-form"> Login </Link>
            </span>
        </form>
    );
}

export default SignupForm;