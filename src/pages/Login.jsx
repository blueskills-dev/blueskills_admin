import React, { useState } from 'react';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/blueskillslogo.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Step 1: Introduce loading state

  const showToast = (message, type) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  const handleLogin = async () => {
    setLoading(true); // Step 2: Set loading state to true

    try {
      const response = await fetch(
        'https://blueskills3-latest.onrender.com/auth/token/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: email, password }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('auth_token', data.auth_token);
        console.log('auth_token:', data.auth_token);
        navigate('/dashboard');
        showToast('Login successful', 'success'); // Step 3: Display success toast
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        showToast(errorData.message, 'error'); // Step 3: Display error toast
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
      showToast('An error occurred. Please try again.', 'error'); // Step 3: Display error toast
    } finally {
      setLoading(false); // Step 2: Set loading state back to false
    }
  };

  return (
    <div className="h-screen p-0 m-0 relative md:flex md:flex-row overflow-auto">
      <div className="w-full md:w-1/2 h-[100px] md:h-full bg-primary flex flex-col justify-center">
        <div className="w-[150px] md:w-[200px] h-[70px] mx-auto">
          <img src={logo} className="w-full h-full object-contain" alt="logo" />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-full bg-white overflow-auto">
        <div className="w-[300px] mx-auto py-[100px]">
          <div className="fontvariation-600 text-3xl text-center text-primary">
            Login
          </div>
          <InputField
            title="Username"
            value={email}
            inputAction={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Your email address"
          />

          <InputField
            title="Password"
            value={password}
            inputAction={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Your password"
          />

          {error && <div className="text-red-500">{error}</div>}

          <div
            title="Login"
            className={`h-[50px] bg-primary rounded-[5px] mt-[30px] cursor-pointer ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`} // Add cursor-not-allowed class when loading
            onClick={handleLogin}
          >
            <div className="fontvariation-600 text-white text-2xl text-center pt-[12px]">
              {loading ? 'Loading...' : 'Login'}
            </div>
          </div>

          <div className="cursor-pointer text-gray-400 mt-[15px] text-center">
            Forgot Password?
          </div>

          <div className="cursor-pointer text-primary underline mt-[20px] text-center">
            Don't have an account, Sign Up.
          </div>
        </div>
      </div>
    </div>
  );
}
