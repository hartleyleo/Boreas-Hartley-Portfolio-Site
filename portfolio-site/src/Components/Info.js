// import React, { useEffect } from 'react';
// import { loadHTML, loadJQHTML } from '../JS/GetLoads';

// import path from 'https://hartleyleo.rhody.dev/portfolio-site-v5/Data/Home.html';

import SpeechButton from "./SpeechButton";

const Info = () => {

    const title = "About me";
    const body = "This site will be used for ordering commissions, as well as looking over their artwork and overall style they use for their designs. This page is most likely going to slowly turn into a page that shows their tattoo work once they get into that field.";

    return (
        <div className="info-container">
            <div className="info-body-container" id="info-body-container">
                <h2 className="info-body-title">{title}</h2>
                <div className="info-body-text">{body}</div>
            </div>
            <SpeechButton message={title + body} />
        </div>
    );

}

export default Info;