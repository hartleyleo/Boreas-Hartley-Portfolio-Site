import React, { useState } from 'react';

import UserCommission from './UserCommission';
import LoginPopup from './Components/LoginPopup'

const Commissions = () => {

    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [pageView, setPageView] = useState('user');

    return (
        <div>
            
            {pageView === 'user' && <UserCommission />}

        </div>
    );

}

export default Commissions;