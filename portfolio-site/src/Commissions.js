import React, { useState } from 'react';

import UserCommission from './UserCommission';
import OwnerCommission from './OwnerCommission';
import LoginPopup from './Components/LoginPopup'

const Commissions = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [pageView, setPageView] = useState('user');

    return (
        <div className="overflow-handler">
            <button className="access-login-button animated-button" onClick={() => setLoginPopupOpen(true)}>Login</button>
            {pageView === 'user' && <UserCommission />}
            {pageView === 'owner' && <OwnerCommission />}

            {isLoginPopupOpen && 
            <LoginPopup 
                onClose={() => setLoginPopupOpen(false)}
                pageType={setPageView}
            />}
        </div>
    );

}

export default Commissions;