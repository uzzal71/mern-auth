import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SignUpPage = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = () => {
        alert('Sign Up not implemented yet?');
    };

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input 
                onChange={e => setEmailValue(e.target.value)}
                type ="text" 
                placeholder="someone@gmail.com" />
            <input 
                onChange={e => setPasswordValue(e.target.value)}
                type ="password" 
                placeholder="password" />
            <input 
                onChange={e => setConfirmPasswordValue(e.target.value)}
                type ="password" 
                placeholder="confirm password" />
            <hr />
            <button disabled={
                !emailValue || !passwordValue || 
                passwordValue !== confirmPasswordValue
                } onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={() => history.push('/login')}>Already have an account? Log In</button>
        </div>
    );
};