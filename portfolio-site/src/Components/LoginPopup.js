const LoginPopup = ({ onClose }) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="overlay">
            <div className="login-container" >

                <h1>Login</h1>

                <div className="login-text">
                    <div>Username</div>
                    <input className="login-input"></input>
                </div>

                <div className="login-text">
                    <div>Password</div>
                    <input type="password" className="login-input password-field"></input>
                </div>    

                <div className="login-button-field">

                    <button className="login-button">
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