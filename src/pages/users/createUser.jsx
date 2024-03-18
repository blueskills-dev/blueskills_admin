import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'
import FullSizedWidget from '../../components/FullSizedWidget'
import Content
 from '../../components/Content'
import PageBody from '../../components/PageBody'
import MainWrapper from '../../components/MainWrapper'
import Title from '../../components/Title'

const CreateUser = () => {
  const [formData, setFormData] = useState({
    avatar: '',
    bio: '',
    role: '',
    bank_name: '',
    account_no: '',
    bank_username: '',
    selfie: '',
    id_image: '',
    id_type: '',
    verification_channel: '',
    verification_status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form data after submission if needed
    setFormData({
        avatar: '',
        bio: '',
        role: '',
        bank_name: '',
        account_no: '',
        bank_username: '',
        selfie: '',
        id_image: '',
        id_type: '',
        verification_channel: '',
        verification_status: '',
    });
  };



  return (
    <div className='h-screen p-0 m-0 '>
    <Content>
      <Sidebar />
      <PageBody>
          <MainWrapper>
            <Title>
              <div className='text-xl md:text-2xl'>Create User</div>
            </Title>
        <FullSizedWidget color="bg-white">
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar</label>
          <input type="img" name="avatar" id="avatar" value={formData.avatar} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
          <input type="img" name="bio" id="bio" value={formData.bio} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select name="role" id="role" value={formData.role} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="client">Client</option>
            <option value="partner">Partner</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="bank_name" className="block text-sm font-medium text-gray-700">Bank Name</label>
          <input type="text" name="bank_name" id="bank_name" value={formData.bank_name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="account_no" className="block text-sm font-medium text-gray-700">Account Number</label>
          <input type="number" name="account_no" id="account_no" value={formData.account_no} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="bank_username" className="block text-sm font-medium text-gray-700">Bank Username</label>
          <input type="text" name="bank_username" id="B" value={formData.bank_username} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
        <label htmlFor="selfie" className="block text-sm font-medium text-gray-700">Selfie</label>
          <input type="img" name="selfie" id="selfie" value={formData.selfie} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
        <label htmlFor="id_image" className="block text-sm font-medium text-gray-700">Id image</label>
          <input type="img" name="id_image" id="id_image" value={formData.id_image} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="id_type" className="block text-sm font-medium text-gray-700">Id Type</label>
          <select name="id_type" id="id_type" value={formData.id_type} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="nin">NIN</option>
            <option value="drivers_linces">Drivers License</option>
            <option value="bvn">BVN</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="verification_channel" className="block text-sm font-medium text-gray-700">Verification Channel</label>
          <input type="text" name="verification_channel" id="verification_channel" value={formData.verification_channel} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="verification_channel" className="block text-sm font-medium text-gray-700">Verification Channel</label>
          <select name="verification_channel" id="verification_channel" value={formData.verification_channel} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="verified">Verified</option>
            <option value="unverified">Unverified</option>
            <option value="pending">Pending</option>
          </select>
        </div>

       
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </div>
    </form>
              </FullSizedWidget>
            
          </MainWrapper>
      </PageBody>
    </Content>

    </div>
  )
}


export default CreateUser;
