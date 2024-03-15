import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import QuaterWidget from '../components/QuaterWidget'
import FullSizedWidget from '../components/FullSizedWidget'
import Content
 from '../components/Content'
import PageBody from '../components/PageBody'
import MainWrapper from '../components/MainWrapper'
import ScollableFlex from '../components/ScollableFlex'
import Title from '../components/Title'
import Table from '../components/Table'
import { Link } from 'react-router-dom'



const Invoice = () => {
    const [toggleNav, setToggleNav] = useState(false)

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {
        "id": 1,
        "name": "Service 1",
        "amount": 5000,
        "status": "pending",
        "created_by": "John Doe",
        "created_at": "9th of March 2024 at 2:00pm",
        "updated_at": "9th of March 2024 at 2:00pm",
        "booking": "House Cleaning"
      },
      {
        "id": 2,
        "name": "Service 2",
        "amount": 8000,
        "status": "completed",
        "created_by": "Jane Smith",
        "created_at": "10th of March 2024 at 3:30pm",
        "updated_at": "10th of March 2024 at 3:30pm",
        "booking": "Car Wash"
      },
      {
        "id": 3,
        "name": "Service 3",
        "amount": 3000,
        "status": "canceled",
        "created_by": "Alice Johnson",
        "created_at": "11th of March 2024 at 1:15pm",
        "updated_at": "11th of March 2024 at 1:15pm",
        "booking": "Gardening Service"
      },
      {
        "id": 4,
        "name": "Service 4",
        "amount": 10000,
        "status": "pending",
        "created_by": "Bob Williams",
        "created_at": "12th of March 2024 at 11:00am",
        "updated_at": "12th of March 2024 at 11:00am",
        "booking": "Plumbing Service"
      },
      {
        "id": 5,
        "name": "Service 5",
        "amount": 6000,
        "status": "completed",
        "created_by": "Emily Brown",
        "created_at": "13th of March 2024 at 9:45am",
        "updated_at": "13th of March 2024 at 9:45am",
        "booking": "Electrical Repairs"
      },
      {
        "id": 6,
        "name": "Service 6",
        "amount": 7500,
        "status": "canceled",
        "created_by": "Michael Davis",
        "created_at": "14th of March 2024 at 8:30am",
        "updated_at": "14th of March 2024 at 8:30am",
        "booking": "Painting Service"
      },
      {
        "id": 7,
        "name": "Service 7",
        "amount": 9000,
        "status": "pending",
        "created_by": "Olivia Wilson",
        "created_at": "15th of March 2024 at 7:15am",
        "updated_at": "15th of March 2024 at 7:15am",
        "booking": "Pest Control"
      },
      {
        "id": 8,
        "name": "Service 8",
        "amount": 4000,
        "status": "completed",
        "created_by": "William Garcia",
        "created_at": "16th of March 2024 at 6:00am",
        "updated_at": "16th of March 2024 at 6:00am",
        "booking": "Window Cleaning"
      },
      {
        "id": 9,
        "name": "Service 9",
        "amount": 12000,
        "status": "canceled",
        "created_by": "Sophia Lee",
        "created_at": "17th of March 2024 at 4:45am",
        "updated_at": "17th of March 2024 at 4:45am",
        "booking": "Carpet Cleaning"
      },
      {
        "id": 10,
        "name": "Service 10",
        "amount": 5500,
        "status": "pending",
        "created_by": "Daniel Martinez",
        "created_at": "18th of March 2024 at 3:30am",
        "updated_at": "18th of March 2024 at 3:30am",
        "booking": "Roof Repairs"
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
        id:"name",
        search: true
      },
      {
        id:"amount",
      },
      {
        id:"status",
      },
      {
        id:"booking",
      },
      {
        id:"created_by",
      },
      {
        id:"created_at",
      },
      {
        id:"updated_at",
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
              "name": 
              (<div className="">
                {row["name"]}</div>
              ),
              "amount": (
                <div>{row["amount"]}</div>
              ),
              "status": 
              (<div className="">
                {row["status"]}</div>
              ),
              "booking": 
              (<div className="">
                {row["booking"]}</div>
              ),
              "created_by": 
              (<div className="">
                {row["created_by"]}</div>
              ),
              "created_at": 
              (<div className="">
                {row["created_at"]}</div>
              ),
              "updated_at": 
              (<div className="">
                {row["updated_at"]}</div>
              ),
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

export default Invoice