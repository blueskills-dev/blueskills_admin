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



const ServiceGallery = () => {
    const [toggleNav, setToggleNav] = useState(false)

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {
        "id": 1,
        "service": "Cleaning Service",
        "image": "cleaning_service.jpg",
        "created_at": "9th of March 2024 at 2:00pm",
        "updated_at": "10th of March 2024 at 3:30pm",
        "status": "active"
      },
      {
        "id": 2,
        "service": "Electronic Servicing",
        "image": "electronic_servicing.jpg",
        "created_at": "8th of March 2024 at 10:45am",
        "updated_at": "10th of March 2024 at 3:20pm",
        "status": "active"
      },
      {
        "id": 3,
        "service": "Plumbing Service",
        "image": "plumbing_service.jpg",
        "created_at": "7th of March 2024 at 11:15am",
        "updated_at": "9th of March 2024 at 2:50pm",
        "status": "active"
      },
      {
        "id": 4,
        "service": "Car Washing Service",
        "image": "car_washing_service.jpg",
        "created_at": "6th of March 2024 at 9:30am",
        "updated_at": "8th of March 2024 at 1:10pm",
        "status": "active"
      },
      {
        "id": 5,
        "service": "Catering Service",
        "image": "catering_service.jpg",
        "created_at": "5th of March 2024 at 12:00pm",
        "updated_at": "7th of March 2024 at 4:40pm",
        "status": "active"
      },
      {
        "id": 6,
        "service": "Gardening Service",
        "image": "gardening_service.jpg",
        "created_at": "4th of March 2024 at 2:20pm",
        "updated_at": "6th of March 2024 at 6:05pm",
        "status": "active"
      },
      {
        "id": 7,
        "service": "Courier Service",
        "image": "courier_service.jpg",
        "created_at": "3rd of March 2024 at 3:40pm",
        "updated_at": "5th of March 2024 at 8:15pm",
        "status": "active"
      },
      {
        "id": 8,
        "service": "Tutoring Service",
        "image": "tutoring_service.jpg",
        "created_at": "2nd of March 2024 at 4:50pm",
        "updated_at": "4th of March 2024 at 10:30pm",
        "status": "active"
      },
      {
        "id": 9,
        "service": "Event Planning Service",
        "image": "event_planning_service.jpg",
        "created_at": "1st of March 2024 at 6:10pm",
        "updated_at": "3rd of March 2024 at 11:45pm",
        "status": "active"
      },
      {
        "id": 10,
        "service": "Graphic Design Service",
        "image": "graphic_design_service.jpg",
        "created_at": "29th of February 2024 at 8:30pm",
        "updated_at": "2nd of March 2024 at 1:15am",
        "status": "active"
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
        id:"service",
        search: true
      },
      {
        id:"image",
      },
      {
        id:"created at",
      },
      {
        id:"updated at",
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
              "service": 
              (<div className="">
                {row["service"]}</div>
              ),
              "image": (
                <div>{row["image"]}</div>
              ),
              "created at": 
              (<div className="">
                {row["created_at"]}</div>
              ),
              "updated at": 
              (<div className="">
                {row["updated_at"]}</div>
              ),
                  "details": 
                  (<Link to={`/service-details/${row.id}`}>
                  <div className="w-auto h-[30px] bg-blue-500 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"> 
                  Details
              </div>
              </Link>)
              
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

export default ServiceGallery