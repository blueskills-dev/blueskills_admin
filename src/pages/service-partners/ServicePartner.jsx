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



const ServicePartner = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
        {
          "status":"active",
          "id": 1,
          "description": "Cleaning Service",
          "amount": 5000,
          "express": true,
          "express_charge": 1000,
          "express_edd": "2024-03-15",
          "etd": "2 hours",
          "image": "cleaning_service.jpg",
          "created_at": "2024-03-10T08:00:00",
          "updated_at": "2024-03-10T12:30:00",
          "location": "Victoria Island, Lagos",
          "owner": "Seyi's Cleaning",
          "blueskills_service": "Cleaning"
        },
        {
          "status":"active",
          "id": 2,
          "description": "Electronic Servicing",
          "amount": 8000,
          "express": false,
          "express_charge": null,
          "express_edd": null,
          "etd": "24 hours",
          "image": "electronic_servicing.jpg",
          "created_at": "2024-03-09T10:45:00",
          "updated_at": "2024-03-10T15:20:00",
          "location": "Ikeja, Lagos",
          "owner": "Deji's Electronics Repair",
          "blueskills_service": "Electronic Servicing"
        },
        {
          "status":"active",
          "id": 3,
          "description": "Plumbing Service",
          "amount": 6000,
          "express": true,
          "express_charge": 1200,
          "express_edd": "2024-03-12",
          "etd": "3 hours",
          "image": "plumbing_service.jpg",
          "created_at": "2024-03-08T11:15:00",
          "updated_at": "2024-03-09T14:50:00",
          "location": "Surulere, Lagos",
          "owner": "Deji's Plumbing",
          "blueskills_service": "Plumbing"
        },
        {
          "status":"active",
          "id": 4,
          "description": "Car Washing Service",
          "amount": 3500,
          "express": false,
          "express_charge": null,
          "express_edd": null,
          "etd": "6 hours",
          "image": "car_washing_service.jpg",
          "created_at": "2024-03-07T09:30:00",
          "updated_at": "2024-03-08T13:10:00",
          "location": "Ajah, Lagos",
          "owner": "Chika's Car Wash",
          "blueskills_service": "Car Washing"
        },
        {
          "status":"active",
          "id": 5,
          "description": "Catering Service",
          "amount": 12000,
          "express": true,
          "express_charge": 2000,
          "express_edd": "2024-03-14",
          "etd": "12 hours",
          "image": "catering_service.jpg",
          "created_at": "2024-03-06T12:00:00",
          "updated_at": "2024-03-07T16:40:00",
          "location": "Lekki, Lagos",
          "owner": "Tolu's Catering",
          "blueskills_service": "Catering"
        },
        {
          "status":"active",
          "id": 6,
          "description": "Gardening Service",
          "amount": 4500,
          "express": false,
          "express_charge": null,
          "express_edd": null,
          "etd": "8 hours",
          "image": "gardening_service.jpg",
          "created_at": "2024-03-05T14:20:00",
          "updated_at": "2024-03-06T18:05:00",
          "location": "Ikorodu, Lagos",
          "owner": "Segun's Gardening",
          "blueskills_service": "Gardening"
        },
        {
          "status":"active",
          "id": 7,
          "description": "Courier Service",
          "amount": 2500,
          "express": true,
          "express_charge": 800,
          "express_edd": "2024-03-11",
          "etd": "4 hours",
          "image": "courier_service.jpg",
          "created_at": "2024-03-04T15:40:00",
          "updated_at": "2024-03-05T20:15:00",
          "location": "Yaba, Lagos",
          "owner": "Bola's Courier",
          "blueskills_service": "Courier"
        },
        {
          "status":"active",
          "id": 8,
          "description": "Tutoring Service",
          "amount": 10000,
          "express": false,
          "express_charge": null,
          "express_edd": null,
          "etd": "10 hours",
          "image": "tutoring_service.jpg",
          "created_at": "2024-03-03T16:50:00",
          "updated_at": "2024-03-04T22:30:00",
          "location": "Egbeda, Lagos",
          "owner": "Emeka's Tutoring",
          "blueskills_service": "Tutoring"
        },
        {
          "status":"active",
          "id": 9,
          "description": "Event Planning Service",
          "amount": 15000,
          "express": true,
          "express_charge": 2500,
          "express_edd": "2024-03-13",
          "etd": "16 hours",
          "image": "event_planning_service.jpg",
          "created_at": "2024-03-02T18:10:00",
          "updated_at": "2024-03-03T23:45:00",
          "location": "Ijegun, Lagos",
          "owner": "Ngozi's Event Planning",
          "blueskills_service": "Event Planning"
        },
        {
          "status":"active",
          "id": 10,
          "description": "Graphic Design Service",
          "amount": 7000,
          "express": false,
          "express_charge": null,
          "express_edd": null,
          "etd": "5 hours",
          "image": "graphic_design_service.jpg",
          "created_at": "2024-03-01T20:30:00",
          "updated_at": "2024-03-02T01:15:00",
          "location": "Mushin, Lagos",
          "owner": "Chinwe's Graphic Design",
          "blueskills_service": "Graphic Design"
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
          search: false
        },
        {
          id:"owner",
          search: true
        },
        {
          id:"description",
          search: true
        },
        {
          id:"express",
          search: false
        },
        {
          id:"expected delivery time",
        },
        {
          id:"location",
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
                "service": 
                (<div className="">
                  {row["blueskills_service"]}</div>
                ),
                "description": (
                  <div>{row["description"]}</div>
                ),
                "owner": 
                (<div className="">
                  {row["owner"]}</div>
                ),
                "express": 
                (<div className="">
                  {row["express"] ? "Available" : "Unavailable"}</div>
                ),
                "expected delivery time": 
                (<div className="">
                  {row["etd"]}</div>
                ),
                "location": 
                (<div className="">
                  {row["location"]}</div>
                ),
                "details": 
                (<Link to={`/service-details/${row.id}`}>
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
        navigate('/partner/create')
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

export default ServicePartner