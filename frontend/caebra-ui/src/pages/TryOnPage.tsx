import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TryOnPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const refUserId = localStorage.getItem('ref_user_id');
        if (refUserId) {
            navigate('/');
        } else {
            // Example redirect logic
            navigate('/text2tone');
        }
    }, [navigate]);

    return (
        <div className="container">
            <h1>Redirecting...</h1>
        </div>
    );
};

export default TryOnPage;
