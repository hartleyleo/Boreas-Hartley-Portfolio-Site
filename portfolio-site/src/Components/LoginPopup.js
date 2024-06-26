import React, { useState } from 'react'
// import validateCredentials from '../php/validation.php'

const LoginPopup = ({ onLogin, setState, prevState }) => {
    
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [showWrongPasswordMessage, setShowWrongPasswordMessage] = useState(false);

    // const [adminCredential, setAdminCredential] = useState('');
    // const [adminVisible, setAdminVisible] = useState(false); 

    const handleUsernameInputChange = (event) => {
        setUsername(event.target.value);

        // if (username == 'admin-hartley01') {
        //     setAdminVisible(!adminVisible);
        // } else {
        //     setAdminVisible(false);
        // }
    };

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleadminCredentialInputChange = (event) => {
    //     setAdminCredential(event.target.value);
    // };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // const handleLogin = async () => {
    //     const response = await fetch('../php/login.php', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ username, password })
    //     });
        
    //     const data = await response.json();
        
    //     if (data.success) {
    //         onLogin(username);
    //     } else {
    //         setShowWrongPasswordMessage(true);
    //     }
    // }

    const handleLogin = () => {
        // Fake login info for now bc no database
        if (username === 'csc372' && password === 'hartley') {
            // setPageTypeOwner();
            // closePopup();
            onLogin(username);
        }  else {
            setShowWrongPasswordMessage(true);
        }
    }

    // Used for the assignment // will most likely not keep in the page
    const wrongPasswordMessageElement = showWrongPasswordMessage && React.createElement(
        'div',
        { className: 'wrong-password-message' },
        React.createElement('div', null, 'ACCOUNT NOT FOUND'),
        React.createElement('div', null, 'Username or Password Incorrect')
    );

    return (
        <div className="overlay">
            <div className="login-container" >

                <h1>Login</h1>

                {/* USERNAME */}
                <div className="login-text">
                    <div className="username-field">Username</div>
                    <input
                        className="login-input"
                        value={username}
                        onChange={handleUsernameInputChange}
                    ></input>
                </div>

                {/* PASSWORD */}
                <div className="login-text">
                    <div>Password</div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="login-input password-field"
                        value={password}
                        onChange={handlePasswordInputChange}
                    ></input>
                    
                    {/* Display password eye */}
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                </div> 

                {/* DISPLAYS AN ERROR TO USER */}
                {wrongPasswordMessageElement}

                {/* ADMIN TOGGLE PAGE
                {adminVisible &&
                    <div className="login-text">
                        <div>Username</div>
                        <input
                            className="login-input"
                            value={adminCredential}
                            onChange={handleadminCredentialInputChange}
                        ></input>
                    </div> 
                }
                 */}



                <div className="login-button-field">

                    <button 
                        className="login-button"
                        onClick={() => handleLogin()}
                    >
                        Login
                    </button>
                    <button className="close-popup-button" onClick={() => setState(prevState)}>
                        Close
                    </button>

                </div>

                
            </div>
        </div>
    );
};

export default LoginPopup;