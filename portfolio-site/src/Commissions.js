import React, { useState } from 'react';

import UserCommission from './UserCommission';
import LoginPopup from './Components/LoginPopup'

const Commissions = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [pageView, setPageView] = useState('user');

    return (
        <div>
            <button onClick={() => setLoginPopupOpen(true)}>erm</button>
            {pageView === 'user' && <UserCommission />}

            {isLoginPopupOpen && <LoginPopup onClose={() => setLoginPopupOpen(false)}/>}

        </div>
    );

}

export default Commissions;