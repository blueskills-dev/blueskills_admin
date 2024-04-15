import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import FullSizedWidget from '../../components/FullSizedWidget';
import Content from '../../components/Content';
import PageBody from '../../components/PageBody';
import MainWrapper from '../../components/MainWrapper';
import Title from '../../components/Title';
import { toast } from 'react-toastify';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const [formDataErrors, setFormDataErrors] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        'https://blueskills3-latest.onrender.com/profile/create/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        console.log('Form submitted successfully');
        toast.success('User created successfully');
        setFormData({
          username: '',
          password: '',
          password2: '',
          email: '',
          first_name: '',
          last_name: '',
          role: '',
        });
      } else {
        const errorData = await response.json();
        console.log();
        // Assuming the server returns error message in JSON format

        setFormDataErrors({
          username:
            typeof errorData.username !== 'undefined'
              ? errorData.username[0] || ''
              : '',
          email:
            typeof errorData.email !== 'undefined'
              ? errorData.email[0] || ''
              : '',
          first_name:
            typeof errorData.first_name !== 'undefined'
              ? errorData.first_name[0] || ''
              : '',
          last_name:
            typeof errorData.last_name !== 'undefined'
              ? errorData.last_name[0] || ''
              : '',
          password:
            typeof errorData.password !== 'undefined'
              ? errorData.password[0] || ''
              : '',
          role:
            typeof errorData.role !== 'undefined'
              ? errorData.role[0] || ''
              : '',
        });
        const errorMessage = 'Failed to create user. Please try again.';
        console.error('Error submitting form:', errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Network error:', error);
      if (typeof error.role !== 'undefined') {
        toast.error(error.role[0]);
      }
    }
  };

  return (
    <div className="h-screen p-0 m-0">
      <Content>
        <Sidebar />
        <PageBody>
          <MainWrapper>
            <Title>
              <div className="text-xl md:text-2xl">Create User</div>
            </Title>
            <FullSizedWidget color="bg-white">
              <form className="w-96 mx-auto" onSubmit={handleSubmit}>
                {/* Increase the width of the form for better visibility */}
                <div className="mb-4">
                  {formDataErrors.username}
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    placeholder="Please enter username"
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                {formDataErrors.password}
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    placeholder="Please enter password"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                {formDataErrors.password}
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    placeholder="Please enter password"
                    type="password"
                    name="password2"
                    id="password2"
                    value={formData.password2}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                {formDataErrors.email}
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Please enter your email"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                {formDataErrors.first_name}
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    placeholder="Please enter your first name"
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                {formDataErrors.last_name}
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    placeholder="Please enter last_name"
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                {formDataErrors.role}
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="">Select</option>
                    <option value="1">Client</option>
                    <option value="2">Organization</option>
                    <option value="3">Partner</option>
                  </select>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </FullSizedWidget>
          </MainWrapper>
        </PageBody>
      </Content>
    </div>
  );
};

export default CreateUser;
