import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'
import FullSizedWidget from '../../components/FullSizedWidget'
import Content
 from '../../components/Content'
import PageBody from '../../components/PageBody'
import MainWrapper from '../../components/MainWrapper'
import Title from '../../components/Title'

const CreateGallery = () => {
  const [formData, setFormData] = useState({
    image: '',
    service: '',
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
      image: '',
      service: '',
    });
  };

  return (
    <div className='h-screen p-0 m-0 '>
    <Content>
      <Sidebar />
      <PageBody>
          <MainWrapper>
            <Title>
              <div className='text-xl md:text-2xl'>Create Gallery</div>
            </Title>
        <FullSizedWidget color="bg-white">
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
          <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="cleaning">Cleaning</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrician">Electrician</option>
            <option value="teaching">Teaching</option>
            <option value="cooking">Cooking</option>
            <option value="hairstylist">Hairstylist</option>
            
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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


export default CreateGallery;
