import React from 'react';

const SpeechButton = ({ message }) => {
    const speak = () => {
        try {
            const utterance = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error while speaking:', error);
        }
    };

    return (
        <div>
            <button className="megaphone-button" onClick={speak}>
                📣
            </button>
        </div>
    );
};

export default SpeechButton;
