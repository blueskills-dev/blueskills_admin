import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar'
import FullSizedWidget from '../../../components/FullSizedWidget'
import Content
 from '../../../components/Content'
import PageBody from '../../../components/PageBody'
import MainWrapper from '../../../components/MainWrapper'
import Title from '../../../components/Title'


const CreateCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
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
        name: '', 
      description: '',
      image: '',
    });
  };

  return (
      <div className='h-screen p-0 m-0 '>
      <Content>
        <Sidebar />
        <PageBody>
            <MainWrapper>
              <Title>
                <div className='text-xl md:text-2xl'>Create Category</div>
              </Title>
          <FullSizedWidget color="bg-white">
        <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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


export default CreateCategory;
