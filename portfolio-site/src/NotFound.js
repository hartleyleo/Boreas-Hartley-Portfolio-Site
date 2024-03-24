import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="not-found-page">
            <div className="emoji">🤨</div>
            <h1>Oops... We're on a page that isn't part of our site</h1>
            <h1>Let me take you back...</h1>
            <button 
                onClick={handleGoHome}
                className="not-found-button animated-button"
            >
                <div className="middle-emoji">👈</div>
            </button>
        </div>
    );
}

export default NotFound;