import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import FullSizedWidget from '../../components/FullSizedWidget';
import Content from '../../components/Content';
import PageBody from '../../components/PageBody';
import MainWrapper from '../../components/MainWrapper';
import Title from '../../components/Title';

const CreatePartner = () => {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        express: '',
        express_charge: '',
        express_edd: '',
        etd: '',
        location: '',
        owner: '',
        blueskills_service: '',
    });

    const [service, setService] = useState({ results: [] });

    useEffect(() => {
        fetch('https://blueskills3-latest.onrender.com/service/')
            .then((response) => response.json())
            .then((data) => setService(data))
            .catch((error) =>
                console.error('Error fetching categories:', error),
            );
        console.log(service.results);
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
    
    try {
        const auth_token = localStorage.getItem('auth_token');
        const response = await fetch(
            'https://blueskills3-latest.onrender.com/service_partner/',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify(formData), 
            },
        );

        if (response.ok) {
            console.log('Form submitted successfully');
            setFormData({
                description: '',
                amount: '',
                express: '',
                express_charge: '',
                express_edd: '',
                etd: '',
                location: '',
                owner: '',
                blueskills_service: '',
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
                                Create Partners
                            </div>
                        </Title>
                        <FullSizedWidget color="bg-white">
                            <form
                                className="w-1/2 mx-auto"
                                onSubmit={handleSubmit}
                            >
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
                                        htmlFor="amount"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="express"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Express
                                    </label>
                                    <select
                                        name="express"
                                        id="express"
                                        value={formData.express}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                {formData.express === 'yes' && (
                                    <>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="express_charge"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Express Charge
                                            </label>
                                            <input
                                                type="number"
                                                name="express_charge"
                                                id="express_charge"
                                                value={formData.express_charge}
                                                onChange={handleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="express_edd"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Express Expected Delivery Date
                                            </label>
                                            <input
                                                type="date"
                                                name="express_edd"
                                                id="express_edd"
                                                value={formData.express_edd}
                                                onChange={handleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="mb-4">
                                    <label
                                        htmlFor="etd"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Expected Time of Delivery
                                    </label>
                                    <input
                                        type="date"
                                        name="etd"
                                        id="etd"
                                        value={formData.etd}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="location"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="owner"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Owner
                                    </label>
                                    <input
                                        type="text"
                                        name="owner"
                                        id="owner"
                                        value={formData.owner}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="blueskills_service"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Blueskills Service
                                    </label>
                                    <select
                                        name="blueskills_service"
                                        id="blueskills_service"
                                        value={formData.blueskills_service}
                                        onChange={handleChange}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    >
                                        <option value="">Select</option>
                                        {service.results.map((category) => (
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

export default CreatePartner;
