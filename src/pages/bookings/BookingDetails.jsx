import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const BookingDetails = () => {
  const { bookingId } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth_token = localStorage.getItem('auth_token');
        const response = await fetch(
          `https://blueskills3-latest.onrender.com/booking/${bookingId}/`,
          {
            headers: {
              Authorization: `Token ${auth_token}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl mb-4">User Details</h1>
      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Title: {userData.title}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Description: {userData.description}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Address: {userData.address}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Phone Number: {userData.phone} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">
          Image: <img src={userData.image} alt="Service Image" />
        </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Service: {userData.service.name}</p>
      </div>
      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">
          Expected Delivery Date:{' '}
          {userData.expected_delivery_date.substring(0, 10)}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Owner: {userData.owner.username}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Partner: {userData.partner.username}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Created At: {userData.created_at.substring(0, 10)}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Updated At: {userData.updated_at.substring(0, 10)}</p>
      </div>
    </div>
  );
};

export default BookingDetails;
