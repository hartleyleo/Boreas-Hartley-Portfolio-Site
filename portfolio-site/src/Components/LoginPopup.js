import React, { useState } from 'react'

const LoginPopup = ({ onClose, pageType }) => {
    
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

    const setPageTypeOwner = () => {
        pageType('owner');
    }

    const closePopup = () => {
        onClose();
    }

    const handleLogin = () => {
        // Fake login info for now bc no database
        if (username === 'boreas' && password === 'hartley') {
            setPageTypeOwner();
            closePopup();
        }  else {
            setShowWrongPasswordMessage(true);
        }
    }

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

                {showWrongPasswordMessage && 
                    <div className="wrong-password-message">
                        <div>ACCOUNT NOT FOUND</div>
                        <div>Username or Password Incorrect</div>
                    </div>
                }

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
                    <button className="close-popup-button" onClick={onClose}>
                        Close
                    </button>

                </div>

                
            </div>
        </div>
    );
};

export default LoginPopup;