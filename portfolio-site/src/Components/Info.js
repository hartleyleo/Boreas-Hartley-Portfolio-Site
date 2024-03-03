// import React, { useEffect } from 'react';
// import { loadHTML, loadJQHTML } from '../JS/GetLoads';

// import path from 'https://hartleyleo.rhody.dev/portfolio-site-v5/Data/Home.html';

const Info = () => {

    // useEffect(() => {
    //     loadHTML(path);
    // }, []);

    // useEffect(() => {
    //     loadJQHTML(path);
    // }, []);

    return (
        <div className="info-container">
            <div className="info-body-container" id="info-body-container">
                <h2 className="info-body-title">About me</h2>
                <div className="info-body-text">This site will be used for ordering commissions, as well as looking over their artwork and overall style they use for their designs. This page is most likely going to slowly turn into a page that shows their tattoo work once they get into that field.</div>
            </div>
        </div>
    );

}

export default Info;