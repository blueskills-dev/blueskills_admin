import React, { useState } from 'react';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/blueskillslogo.svg';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("https://blueskills3-latest.onrender.com/auth/token/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='h-screen p-0 m-0 relative md:flex md:flex-row overflow-auto'>
      <div className='w-full md:w-1/2 h-[100px] md:h-full bg-primary flex flex-col justify-center'>
        <div className='w-[150px] md:w-[200px] h-[70px] mx-auto'>
          <img src={logo} className="w-full h-full object-contain" alt="logo"/>
        </div>
      </div>
      <div className='w-full md:w-1/2 h-auto md:h-full bg-white overflow-auto'>
        <div className='w-[300px] mx-auto py-[100px]'>
          <div className='fontvariation-600 text-3xl text-center text-primary'>Login</div>
          <InputField
            title="Email"
            value={email}
            // onChange={handleEmailChange} 
            type="text"
            placeholder="Your email address"
          />

          <InputField
            title="Password"
            value={password}
            // onChange={handlePasswordChange} 
            type="password"
            placeholder="Your password"
          />

          {error && <div className="text-red-500">{error}</div>}

          <div
            title="Login"
            className='h-[50px] bg-primary rounded-[5px] mt-[30px] cursor-pointer'
            onClick={handleLogin}
          >
            <div className='fontvariation-600 text-white text-2xl text-center pt-[12px]'>
              Login
            </div>
          </div>

          <div className='cursor-pointer text-gray-400 mt-[15px] text-center'>Forgot Password?</div>

          <div className='cursor-pointer text-primary underline mt-[20px] text-center'>
            Don't have an account, Sign Up.
          </div>
        </div>
      </div>
    </div>
  );
}
