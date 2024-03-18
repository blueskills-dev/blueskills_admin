import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import QuaterWidget from '../../components/QuaterWidget'
import FullSizedWidget from '../../components/FullSizedWidget'
import Content
 from '../../components/Content'
import PageBody from '../../components/PageBody'
import MainWrapper from '../../components/MainWrapper'
import ScollableFlex from '../../components/ScollableFlex'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { Link, useNavigate } from 'react-router-dom'



const Users = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
        { 
          "id": "1",
          "avatar": "user1_avatar.jpg",
          "email": "user1@example.com",
          "firstname": "John",
          "lastname": "Doe",
          "phone_number": "+1234567890",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "role": "client",
          "status": "active",
          "bank_name": "Access Bank",
          "account_no": "1234567890",
          "bank_username": "john_doe",
          "selfie": "user1_selfie.jpg",
          "id_image": "user1_id.jpg",
          "id_type": "NIN",
          "verification_channel": "email",
          "verification_status": "verified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.5
        },
        {
          "id": "2",
          "avatar": "user2_avatar.jpg",
          "email": "user2@example.com",
          "firstname": "Jane",
          "lastname": "Doe",
          "phone_number": "+1987654321",
          "bio": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "role": "partner",
          "status": "active",
          "bank_name": "Zenith Bank",
          "account_no": "0987654321",
          "bank_username": "jane_doe",
          "selfie": "user2_selfie.jpg",
          "id_image": "user2_id.jpg",
          "id_type": "Driver's License",
          "verification_channel": "sms",
          "verification_status": "verified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 3.8
        },
        {
          "id": "3",
          "avatar": "user3_avatar.jpg",
          "email": "user3@example.com",
          "firstname": "Alice",
          "lastname": "Smith",
          "phone_number": "+1122334455",
          "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "role": "business",
          "status": "active",
          "bank_name": "GT Bank",
          "account_no": "1122334455",
          "bank_username": "alice_smith",
          "selfie": "user3_selfie.jpg",
          "id_image": "user3_id.jpg",
          "id_type": "BVN",
          "verification_channel": "email",
          "verification_status": "pending",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.2
        },
        {
          "id": "4",
          "avatar": "user4_avatar.jpg",
          "email": "user4@example.com",
          "firstname": "Bob",
          "lastname": "Johnson",
          "phone_number": "+9876543210",
          "bio": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          "role": "admin",
          "status": "active",
          "bank_name": "Fidelity Bank",
          "account_no": "9876543210",
          "bank_username": "bob_johnson",
          "selfie": "user4_selfie.jpg",
          "id_image": "user4_id.jpg",
          "id_type": "NIN",
          "verification_channel": "sms",
          "verification_status": "unverified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.0
        },
        {
          "id": "5",
          "avatar": "user5_avatar.jpg",
          "email": "user5@example.com",
          "firstname": "Emily",
          "lastname": "Williams",
          "phone_number": "+1122334455",
          "bio": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "role": "client",
          "status": "active",
          "bank_name": "OPay Microfinance Bank",
          "account_no": "1122334455",
          "bank_username": "emily_williams",
          "selfie": "user5_selfie.jpg",
          "id_image": "user5_id.jpg",
          "id_type": "Driver's License",
          "verification_channel": "email",
          "verification_status": "verified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.8
        },
        {
          "id": "6",
          "avatar": "user6_avatar.jpg",
          "email": "user6@example.com",
          "firstname": "Michael",
          "lastname": "Brown",
          "phone_number": "+9876543210",
          "bio": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          "role": "partner",
          "status": "active",
          "bank_name": "United Bank of Africa",
          "account_no": "9876543210",
          "bank_username": "michael_brown",
          "selfie": "user6_selfie.jpg",
          "id_image": "user6_id.jpg",
          "id_type": "NIN",
          "verification_channel": "sms",
          "verification_status": "verified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.3
        },
        {
          "id": "7",
          "avatar": "user7_avatar.jpg",
          "email": "user7@example.com",
          "firstname": "Olivia",
          "lastname": "Jones",
          "phone_number": "+1234567890",
          "bio": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          "role": "business",
          "status": "active",
          "bank_name": "Access Bank",
          "account_no": "1234567890",
          "bank_username": "olivia_jones",
          "selfie": "user7_selfie.jpg",
          "id_image": "user7_id.jpg",
          "id_type": "BVN",
          "verification_channel": "email",
          "verification_status": "pending",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.1
        },
        {
          "id": "8",
          "avatar": "user8_avatar.jpg",
          "email": "user8@example.com",
          "firstname": "William",
          "lastname": "Davis",
          "phone_number": "+1987654321",
          "bio": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          "role": "admin",
          "status": "active",
          "bank_name": "Zenith Bank",
          "account_no": "0987654321",
          "bank_username": "william_davis",
          "selfie": "user8_selfie.jpg",
          "id_image": "user8_id.jpg",
          "id_type": "NIN",
          "verification_channel": "sms",
          "verification_status": "verified",
          "created_at": "2024-03-11T08:00:00",
          "updated_at": "2024-03-11T08:00:00",
          "ratings": 4.9
        }
      ]
      
  
    // table tab for filtering (takes in <row> and <options>) <options> are values in row for the tab filtering 
    const tab = {
      row:'status',
      options:['active', 'inactive']
    }
    //dataSource --- settings for each column [id, search[boolean]]
    const headers = [
      {
        id:"id"
      },
      {
        id:"firstname",
        search: true
      },
      {
        id:"lastname",
        search: true
      },
      {
        id:"role",
        search: true
      },
      {
        id:"email",
        search: true
      },
      {
        id:"bio",
      },
      {
        id:"ratings",
        search: true
      },
      {
        id:"details",
      },

    ]
    //dataSource --- the filterable data source
    const [dataSource, setDataSource] = useState(tableData);
    //table rows state
    const [dataRows, setDataRows] = useState([])
    // creating table rows state based on filtered datasource
    useEffect(()=>{
      const dS =
      dataSource &&
        dataSource.length > 0
          ? dataSource.map((row, idx) => {
            return {
              id: idx + 1,
              "firstname": 
              (<div className="">
                {row["firstname"]}</div>
              ),
              "lastname": (
                <div>{row["lastname"]}</div>
              ),
              "role": 
              (<div className="">
                {row["role"]}</div>
              ),
              "email": 
              (<div className="">
                {row["email"]}</div>
              ),
              "bio": 
              (<div className="">
                {row["bio"]}</div>
              ),
              "ratings": 
              (<div className="">
                {row["ratings"]}</div>
              ),
              "details": 
              (<Link to={`/user-details/${row.id}`}>
              <div className="w-auto h-[30px] bg-blue-500 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"> 
              Details
          </div>
          </Link>),
              
            };
          })
        : [];
        setDataRows(dS)
    },[dataSource])
  
    //table action
    const tableButton = {
      text: 'Create',
      action: () => {
        navigate('/user/create')
      }
    }

    return (
        <div className='h-screen p-0 m-0 '>
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
                      tableData={tableData}
                      dataSource={dataSource}
                      dataRows={dataRows}
                      setDataSource={setDataSource}
                      pageSize={5} 
                      title="Users"
                      tab={tab} 
                      headers={headers}
                      tableButton={tableButton}
                    />
                  </FullSizedWidget>
                
              </MainWrapper>
          </PageBody>
        </Content>
    
        </div>
      )
    }

export default Users