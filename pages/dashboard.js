import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { logout } from '../services/authService';
import styles from './dashboard.module.css';

function Dashboard() {
  const [loading, setLoading] = useState(true); // Added loading state for better control
  const [error, setError] = useState(null); // For error handling
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        if (!token) {
          router.push('/login'); // Redirect to login if token is not found
        } else {
          // If token exists, attempt to fetch user data
          const response = await axios.get('/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`, // Send the token in the header
            },
          });
          setLoading(false); // Set loading to false once data is fetched
        }
      } catch (error) {
        setLoading(false);
        setError('Failed to fetch user data'); // Set error if API call fails
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [router]); // Re-run effect if router changes

  const handleLogout = async () => {
    try {
      await logout(); // Call logout function to clear session
      localStorage.removeItem('token'); // Remove the token from localStorage
      alert('Logged out successfully');
      router.push('/login'); // Redirect to login page after logout
    } catch (error) {
      alert('Logout failed');
      console.error(error.response?.data || error); // Handle any logout errors
    }
  };

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className={styles['dashboard-container']}>
      <h1>Welcome to the Dashboard</h1>

      {/* Logout Button */}
      <button onClick={handleLogout} className={styles['logout-btn']}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
