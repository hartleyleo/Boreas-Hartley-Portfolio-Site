import React, { useState } from 'react'

const Upload = ({ setState }) => {
    
    const [password, setPassword] = useState('');
    const [ID, setID] = useState(0);
    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [descrip, setDescrip] = useState('');
    const [category, setCategory] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [wrongPasswordMessage, setWrongPasswordMessage] = useState('');

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleIDInputChange = (event) => {
        setID(event.target.value);
    };

    const handleLinkInputChange = (event) => {
        setLink(event.target.value);
    };

    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescripInputChange = (event) => {
        setDescrip(event.target.value);
    };

    const handleCategoryInputChange = (event) => {
        setCategory(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
    
        if (password === 'AdminUploadAuth_BO') {

            try {
                const response = await fetch('https://hartleyleo.rhody.dev/portfolio-site-v10/php/uploadImage.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ID,
                        link,
                        title,
                        descrip,
                        category,
                    }),
                });
            
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
            
                // Clear form fields after successful submission (optional)
                setID(0);
                setLink('');
                setTitle('');
                setDescrip('');
                setCategory('');
                setPassword('');
                setWrongPasswordMessage(data);
            } catch (error) {
                console.error('Error submitting data:', error);
                setWrongPasswordMessage('There was an error submitting the data. Please try again.');
            }

        } else {
            setWrongPasswordMessage("Wrong Password 🤨📸");
        }

    };

    return (
        <div className="overlay">
            <div className="login-container">

                <h1>Upload</h1>

                {/* ID */}
                <div className="login-text">
                    <div className="username-field">ID</div>
                    <input
                        className="login-input"
                        value={ID}
                        onChange={handleIDInputChange}
                    ></input>
                </div>

                {/* Title */}
                <div className="login-text">
                    <div className="username-field">Title</div>
                    <input
                        className="login-input"
                        value={title}
                        onChange={handleTitleInputChange}
                    ></input>
                </div>

                {/* Description */}
                <div className="login-text">
                    <div className="username-field">Description</div>
                    <input
                        className="login-input"
                        value={descrip}
                        onChange={handleDescripInputChange}
                    ></input>
                </div>

                {/* Category */}
                <div className="login-text">
                    <div className="username-field">Category</div>
                    <input
                        className="login-input"
                        value={category}
                        onChange={handleCategoryInputChange}
                    ></input>
                </div>

                {/* Link */}
                <div className="login-text">
                    <div className="username-field">Link</div>
                    <input
                        className="login-input"
                        value={link}
                        onChange={handleLinkInputChange}
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
                {wrongPasswordMessage}

                <div className="login-button-field">

                    <button 
                        className="login-button"
                        onClick={() => handleSubmit()}
                    >
                        Upload Entry
                    </button>
                    <button
                        className="login-button"
                        onClick={() => setState()}
                    >
                        Close
                    </button>

                </div>

                
            </div>
        </div>
    );
};

export default Upload;