import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      if (`https://office3i.com/admin/organizationchart`) {
        navigate('/login');
      }
    }
  }, [navigate]);

  return children;
};

export default AuthRoute;
