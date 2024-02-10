import {useContext, useState} from "react";

import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";

import AuthContext from '../../../Context/auth';

import Button from "../../../components/Button/Button";
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
            <h2>Sign up</h2>

            <div>
                <h5>Username</h5>
                <span className="input-box">
                    <Icon
                        icon="gg:profile"
                        />
                    <input
                        name={'username'}
                        type="text" placeholder="example_123"/>
                </span>
            </div>

            <div>
                <h5>Email</h5>
                <span className="input-box">
                    <Icon
                        icon="ic:outline-email"
                        />
                    <input
                        name={'email'}
                        type="email"
                        placeholder="example@email.com"/>
                </span>
            </div>

            <div>
                <h5>Password</h5>
                <span className="input-box">
                    <input
                        name={'password'}
                        type={!showPassword ? 'password' : 'text'}
                        placeholder="Pick a strong password"/>
                    <ZoomInZoomOut width={"fit-content"}>
                        <Icon
                            className={'cursor-btn'}
                            icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                            onClick={() => setShowPassword(!showPassword)}
                            />
                    </ZoomInZoomOut>
                </span>
            </div>

            <div>
                <h5>Confirm Password</h5>
                <span className="input-box">
                    <input
                        name={'confirm-password'}
                        type={!showConfirmPassword ? 'password' : 'text'}
                        placeholder="Confirm your password"/>
                    <ZoomInZoomOut width={"fit-content"}>
                        <Icon
                            className={'cursor-btn'}
                            icon={!showConfirmPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                    </ZoomInZoomOut>
                </span>
            </div>

            <Button width={'60%'} backgroundColor={'var(--primary)'}>
                <h5 className="color-text">Create Account</h5>
            </Button>
            
            <div className="change-box">
                <p className="color-text-extra-light">Already have an account? </p>
                <Link to='/login'><p className="color-text-light highlight">Login</p></Link>
            </div>
        </form>);
};

export default SignupForm;