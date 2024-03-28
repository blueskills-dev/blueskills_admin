import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import FullSizedWidget from '../../components/FullSizedWidget';
import Content from '../../components/Content';
import PageBody from '../../components/PageBody';
import MainWrapper from '../../components/MainWrapper';
import Title from '../../components/Title';

const CreateSubcategory = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
    });
    const [cata, setCata] = useState({ results: [] });

    useEffect(() => {
        fetch('https://blueskills3-latest.onrender.com/category/')
            .then((response) => response.json())
            .then((data) => setCata(data))
            .catch((error) =>
                console.error('Error fetching categories:', error),
            );
    }, []);

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
            const auth_token = localStorage.getItem('auth_token');
            const response = await fetch(
                'https://blueskills3-latest.onrender.com/subcategory/',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${auth_token}`,
                    },
                    body: JSON.stringify(formData),
                },
            );

            if (response.ok) {
                console.log('Form submitted successfully');
                setFormData({
                    name: '',
                    description: '',
                    category: '',
                });
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div className="h-screen p-0 m-0 ">
            <Content>
                <Sidebar />
                <PageBody>
                    <MainWrapper>
                        <Title>
                            <div className="text-xl md:text-2xl">
                                Create Subcategory
                            </div>
                        </Title>
                        <FullSizedWidget color="bg-white">
                            <form
                                className="w-1/2 mx-auto"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        id="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option value="">Select</option>
                                        {cata.results.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
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

export default CreateSubcategory;
