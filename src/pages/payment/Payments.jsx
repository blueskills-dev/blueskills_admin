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
import { Link } from 'react-router-dom'



const Users = () => {
    const [toggleNav, setToggleNav] = useState(false)

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {
        "id": 1,
        "amount": 5000,
        "reference": "abc123xyz",
        "currency": "NGN",
        "status": "pending",
        "payment_method": "ussd",
        "metadata": "random_string_1",
        "created_at": "9th of March 2024 at 2:00pm",
        "updated_at": "9th of March 2024 at 2:00pm",
        "booking": "House Cleaning",
        "invoice": "invoice_1.jpg"
      },
      {
        "id": 2,
        "amount": 8000,
        "reference": "def456uvw",
        "currency": "NGN",
        "status": "completed",
        "payment_method": "transfer",
        "metadata": "random_string_2",
        "created_at": "10th of March 2024 at 3:30pm",
        "updated_at": "10th of March 2024 at 3:30pm",
        "booking": "Car Wash",
        "invoice": "invoice_2.jpg"
      },
      {
        "id": 3,
        "amount": 3000,
        "reference": "ghi789rst",
        "currency": "NGN",
        "status": "canceled",
        "payment_method": "card",
        "metadata": "random_string_3",
        "created_at": "11th of March 2024 at 1:15pm",
        "updated_at": "11th of March 2024 at 1:15pm",
        "booking": "Gardening Service",
        "invoice": "invoice_3.jpg"
      },
      {
        "id": 4,
        "amount": 10000,
        "reference": "jkl012mno",
        "currency": "NGN",
        "status": "pending",
        "payment_method": "ussd",
        "metadata": "random_string_4",
        "created_at": "12th of March 2024 at 11:00am",
        "updated_at": "12th of March 2024 at 11:00am",
        "booking": "Plumbing Service",
        "invoice": "invoice_4.jpg"
      },
      {
        "id": 5,
        "amount": 6000,
        "reference": "pqr345uvw",
        "currency": "NGN",
        "status": "completed",
        "payment_method": "transfer",
        "metadata": "random_string_5",
        "created_at": "13th of March 2024 at 9:45am",
        "updated_at": "13th of March 2024 at 9:45am",
        "booking": "Electrical Repairs",
        "invoice": "invoice_5.jpg"
      },
      {
        "id": 6,
        "amount": 7500,
        "reference": "stu678xyz",
        "currency": "NGN",
        "status": "canceled",
        "payment_method": "card",
        "metadata": "random_string_6",
        "created_at": "14th of March 2024 at 8:30am",
        "updated_at": "14th of March 2024 at 8:30am",
        "booking": "Painting Service",
        "invoice": "invoice_6.jpg"
      },
      {
        "id": 7,
        "amount": 9000,
        "reference": "vwx901abc",
        "currency": "NGN",
        "status": "pending",
        "payment_method": "ussd",
        "metadata": "random_string_7",
        "created_at": "15th of March 2024 at 7:15am",
        "updated_at": "15th of March 2024 at 7:15am",
        "booking": "Pest Control",
        "invoice": "invoice_7.jpg"
      },
      {
        "id": 8,
        "amount": 4000,
        "reference": "yza234def",
        "currency": "NGN",
        "status": "completed",
        "payment_method": "transfer",
        "metadata": "random_string_8",
        "created_at": "16th of March 2024 at 6:00am",
        "updated_at": "16th of March 2024 at 6:00am",
        "booking": "Window Cleaning",
        "invoice": "invoice_8.jpg"
      },
      {
        "id": 9,
        "amount": 12000,
        "reference": "bcd567ghi",
        "currency": "NGN",
        "status": "canceled",
        "payment_method": "card",
        "metadata": "random_string_9",
        "created_at": "17th of March 2024 at 4:45am",
        "updated_at": "17th of March 2024 at 4:45am",
        "booking": "Carpet Cleaning",
        "invoice": "invoice_9.jpg"
      },
      {
        "id": 10,
        "amount": 5500,
        "reference": "efg890jkl",
        "currency": "NGN",
        "status": "pending",
        "payment_method": "ussd",
        "metadata": "random_string_10",
        "created_at": "18th of March 2024 at 3:30am",
        "updated_at": "18th of March 2024 at 3:30am",
        "booking": "Roof Repairs",
        "invoice": "invoice_10.jpg"
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
        id:"reference",
        search: true
      },
      {
        id:"amount",
        search: true
      },
      {
        id:"payment_method",
        search: true
      },
      {
        id:"booking",
        search: true
      },
      {
        id:"status",
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
              "reference": 
              (<div className="">
                {row["reference"]}</div>
              ),
              "amount": (
                <div>{row["amount"]}</div>
              ),
              "payment_method": 
              (<div className="">
                {row["payment_method"]}</div>
              ),
              "booking": 
              (<div className="">
                {row["booking"]}</div>
              ),
              "status": 
              (<div className="">
                {row["status"]}</div>
              ),
              "details": 
              (<Link to={`/payment-details/:paymentId`}>
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
        alert("take me to create")
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
                      title="Sub category"
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