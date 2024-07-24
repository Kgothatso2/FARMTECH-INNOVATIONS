import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/v1/users/check-auth', {
          method: 'GET',
          credentials: 'include',  // Important for including cookies
        });
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated);
          if (!data.isAuthenticated) {
            navigate('/login');  // Redirect to login if not authenticated
          }
        } else {
          navigate('/login');  // Redirect to login if response not ok
        }
      } catch (error) {
        navigate('/login');  // Redirect to login if there's an error
      } finally {
        setLoading(false);  // Set loading to false after check
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;  // Show a loading indicator while checking auth
  }

  if (!isAuthenticated) {
    return null;  // Optionally, render nothing while redirecting
  }

  return children;  // Render the nested component
};

export default ProtectedRoute;
