import React, { useState } from 'react';

const IncomingRequest = ({request, handleAcceptRequest, handleDeclineRequest}) => {

    const handleAccept = () => {
        handleAcceptRequest();
    }

    const handleDecline = () => {
        handleDeclineRequest();
    }

    // Will be used to get info from the request like the description and the like
    // const displayInfo = () => {
    // Will be implemented when database is functioning
    // }

    return (
        <li className="list-item">
            <p className="request-title">{request.title}</p>
            <button className="list-button info-commission animated-button">i</button>
            <button className="list-button accept-commission animated-button" onClick={() => handleAccept()}>Accept</button>
            <button className="list-button decline-commission animated-button" onClick={() => handleDecline()}>Decline</button>
        </li>
    );

}

const WIPCommission = ({request, handleCompleteCommission}) => {

    const handleComplete = () => {
        handleCompleteCommission();
    }

    return (
        <li className="list-item">
            <p className="request-title">{request.title}</p>
            <button className="list-button complete-commission animated-button" onClick={() => handleComplete()}>Complete</button>
        </li>
    );

}

const CompletedCommission = ({request}) => {

    return (
        <li className="list-item">
            <p className="request-title">{request.title}</p>
            <button className="list-button finalize-commission animated-button">Finalize</button>
        </li>
    );

}

const OwnerCommission = () => {

    // Will be an axios call once the db is setup
    const [incomingCommissions, setIncomingCommissions] = useState([
        {title: 'Commission 1'},
        {title: 'Commission 2'},
        {title: 'Commission 3'},
    ]);

    const [wipCommissions, setWipCommissions] = useState([
        {title: 'Commission 4'}
    ]);

    const [finishedCommissions, setFinishedCommissions] = useState([
        {title: 'Commission 5'}
    ]);

    const handleAcceptRequest = (request) => {
        setWipCommissions([...wipCommissions, request]);
        setIncomingCommissions(incomingCommissions.filter(commission => commission !== request));
    };

    const handleDeclineRequest = (request) => {
        setIncomingCommissions(incomingCommissions.filter(commission => commission !== request));
    };

    const handleCompleteCommission = (commission) => {
        setFinishedCommissions([...finishedCommissions, commission]);
        setWipCommissions(wipCommissions.filter(commissionItem => commissionItem !== commission));
    };

    return (
        <div className="owner">
            
            <h1>Owner Page</h1>

            <div>
                <h3>Incoming Commission Requests</h3>
                <ul className="commission-lists">
                    {incomingCommissions.length === 0 ? (
                        <li className="list-item">None!</li>
                    ) : ( incomingCommissions.map((request, index) => (
                        <IncomingRequest
                            key={index}
                            request={request}
                            handleAcceptRequest={() => handleAcceptRequest(request)}
                            handleDeclineRequest={() => handleDeclineRequest(request)}
                        ></IncomingRequest>
                    )))}
                </ul>
            </div>

            <div>
                <h3>WIP Commissions</h3>
                <ul className="commission-lists">
                    {wipCommissions.length === 0 ? (
                        <li className="list-item">None!</li>
                    ) : ( wipCommissions.map((commission, index) => (
                        <WIPCommission 
                            key={index}
                            request={commission}
                            handleCompleteCommission={() => handleCompleteCommission(commission)}
                        ></WIPCommission>
                    )))}
                </ul>
            </div>

            <div>
                <h3>Completed Commissions</h3>
                <ul className="commission-lists">
                    {finishedCommissions.length === 0 ? (
                        <li className="list-item">None!</li>
                    ) : ( finishedCommissions.map((commission, index) => (
                        <CompletedCommission
                            key={index}
                            request={commission}
                        ></CompletedCommission>
                    )))}
                </ul>
            </div>

        </div>
    );

}

export default OwnerCommission;