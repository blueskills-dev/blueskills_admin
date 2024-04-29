import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth_token = localStorage.getItem('auth_token');
        const response = await fetch(
          `https://blueskills3-latest.onrender.com/users/${userId}/`,
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

  console.log(userData)

  if (loading) {
    return (
        <div className="text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
</div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl mb-4">User Details</h1>
      <div className="mb-4">
        <p className="mt-1 p-2 w-full "><img src={userData.avatar} alt="avatar" /></p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Last Login: {userData.last_login}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Username: {userData.username}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Firstname: {userData.first_name}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Lastname: {userData.last_name}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Phone Number: {userData.phone} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Email: {userData.email} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Bank Name: {userData.bank_name} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Bank Username: {userData.bank_username} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Bio: {userData.bio} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Role: {userData.role} </p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Staff: {userData.is_staff}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Active: {userData.is_active}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">ID Type: {userData.id_type}</p>
      </div>

      <div className="mb-4">
        <p className="mt-1 p-2 w-full ">Verification Status: {userData.verification_status}</p>
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

export default UserDetails;
