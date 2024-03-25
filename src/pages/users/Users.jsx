import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import QuaterWidget from '../../components/QuaterWidget';
import FullSizedWidget from '../../components/FullSizedWidget';
import Content from '../../components/Content';
import PageBody from '../../components/PageBody';
import MainWrapper from '../../components/MainWrapper';
import ScollableFlex from '../../components/ScollableFlex';
import Title from '../../components/Title';
import Table from '../../components/Table';

const Users = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("https://blueskills3-latest.onrender.com/auth/token/login")
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                // Handle error if needed
            });
    }, []);

    // Tab for filtering (takes in <row> and <options>) <options> are values in row for the tab filtering
    const tab = {
        row: 'status',
        options: ['active', 'inactive']
    };

    // Settings for each column [id, search[boolean]]
    const headers = [
        { id: "id" },
        { id: "firstname", search: true },
        { id: "lastname", search: true },
        { id: "role", search: true },
        { id: "email", search: true },
        { id: "bio" },
        { id: "ratings", search: true },
        { id: "details" }
    ];

    return (
        <div className='h-screen p-0 m-0'>
            <Content>
                <Sidebar />
                <PageBody>
                    <MainWrapper>
                        <Title>
                            <div className='text-xl md:text-2xl'>Projects</div>
                        </Title>
                        <ScollableFlex>
                            <QuaterWidget
                                title="Total Funding"
                                subtitle="N2,000,000"
                            />
                            <QuaterWidget
                                title="Total Expenses"
                                subtitle="N2,000,000"
                            />
                            <QuaterWidget
                                title="Total Yield"
                                subtitle="N2,000,000"
                            />
                        </ScollableFlex>

                        <FullSizedWidget color="bg-white">

                            <Table
                                tableData={userData} // Use fetched data here
                                dataSource={userData}
                                pageSize={5}
                                title="Users"
                                tab={tab}
                                headers={headers}
                            />
                        </FullSizedWidget>

                    </MainWrapper>
                </PageBody>
            </Content>
        </div>
    );
};

export default Users;
