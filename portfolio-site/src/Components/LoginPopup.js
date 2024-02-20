const LoginPopup = ({ onClose }) => {

    return (
        <div className="login-container" >

            <div>
                <div>Username:</div>
                <input></input>
            </div>

            <div>
                <div>Password:</div>
                <input></input>
            </div>    

            <button className="popup-button" onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default LoginPopup;