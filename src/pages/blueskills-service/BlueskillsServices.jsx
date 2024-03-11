import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import QuaterWidget from '../../components/QuaterWidget'
import FullSizedWidget from '../../components/FullSizedWidget'
import Content from '../../components/Content'
import PageBody from '../../components/PageBody'
import MainWrapper from '../../components/MainWrapper'
import ScollableFlex from '../../components/ScollableFlex'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'



const BlueskillsServices = () => {
    const [toggleNav, setToggleNav] = useState(false)
    
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {
        "id": 1,
        "name": "Cleaning Services",
        "category": "Household",
        "subcategory": "Home Cleaning",
        "owner": "Seyi's Cleaning",
        "description": "Professional home cleaning service",
        "amount": 5000,
        "express": "yes",
        "express_charge": 1000,
        "express_edd": "2024-03-15",
        "etd": "2 hours",
        "image": "cleaning.jpg",
        "location": "Yaba, Lagos",
        "price_range": "Medium",
        "status": "active",
        "created_at": "2024-03-10",
        "updated_at": "2024-03-10"
      },
      {
        "id": 2,
        "name": "Electronics Repair",
        "category": "Electronics",
        "subcategory": "Phone Repair",
        "owner": "Deji's Electronics",
        "description": "Expert phone repair services",
        "amount": 7000,
        "express": "no",
        "express_charge": null,
        "express_edd": null,
        "etd": "24 hours",
        "image": "phone_repair.jpg",
        "location": "Surulere, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-11",
        "updated_at": "2024-03-11"
      },
      {
        "id": 3,
        "name": "Plumbing Services",
        "category": "Household",
        "subcategory": "Pipe Installation",
        "owner": "Mike's Plumbing",
        "description": "Professional plumbing installation",
        "amount": 10000,
        "express": "yes",
        "express_charge": 1500,
        "express_edd": "2024-03-12",
        "etd": "3 hours",
        "image": "plumbing.jpg",
        "location": "Victoria Island, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-12",
        "updated_at": "2024-03-12"
      },
      {
        "id": 4,
        "name": "Car Wash Services",
        "category": "Automotive",
        "subcategory": "Exterior Cleaning",
        "owner": "Lekan's Car Wash",
        "description": "Professional car wash service",
        "amount": 3000,
        "express": "yes",
        "express_charge": 500,
        "express_edd": "2024-03-13",
        "etd": "1 hour",
        "image": "car_wash.jpg",
        "location": "Ikeja, Lagos",
        "price_range": "Low",
        "status": "active",
        "created_at": "2024-03-13",
        "updated_at": "2024-03-13"
      },
      {
        "id": 5,
        "name": "Laundry Services",
        "category": "Household",
        "subcategory": "Dry Cleaning",
        "owner": "Bola's Laundry",
        "description": "Professional dry cleaning service",
        "amount": 6000,
        "express": "no",
        "express_charge": null,
        "express_edd": null,
        "etd": "6 hours",
        "image": "laundry.jpg",
        "location": "Lekki, Lagos",
        "price_range": "Medium",
        "status": "active",
        "created_at": "2024-03-14",
        "updated_at": "2024-03-14"
      },
      {
        "id": 6,
        "name": "Painting Services",
        "category": "Household",
        "subcategory": "Interior Painting",
        "owner": "Femi's Painters",
        "description": "Professional interior painting service",
        "amount": 8000,
        "express": "no",
        "express_charge": null,
        "express_edd": null,
        "etd": "2 days",
        "image": "painting.jpg",
        "location": "Ajah, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-15",
        "updated_at": "2024-03-15"
      },
      {
        "id": 7,
        "name": "Catering Services",
        "category": "Events",
        "subcategory": "Food Catering",
        "owner": "Chioma's Catering",
        "description": "Professional food catering service",
        "amount": 12000,
        "express": "yes",
        "express_charge": 2000,
        "express_edd": "2024-03-16",
        "etd": "4 hours",
        "image": "catering.jpg",
        "location": "Magodo, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-16",
        "updated_at": "2024-03-16"
      },
      {
        "id": 8,
        "name": "Tutoring Services",
        "category": "Education",
        "subcategory": "Math Tutoring",
        "owner": "Grace's Tutors",
        "description": "Professional math tutoring service",
        "amount": 15000,
        "express": "no",
        "express_charge": null,
        "express_edd": null,
        "etd": "1 hour session",
        "image": "tutoring.jpg",
        "location": "Ogba, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-17",
        "updated_at": "2024-03-17"
      },
      {
        "id": 9,
        "name": "Gardening Services",
        "category": "Household",
        "subcategory": "Lawn Maintenance",
        "owner": "Segun's Gardeners",
        "description": "Professional lawn maintenance service",
        "amount": 9000,
        "express": "yes",
        "express_charge": 1000,
        "express_edd": "2024-03-18",
        "etd": "4 hours",
        "image": "gardening.jpg",
        "location": "Gbagada, Lagos",
        "price_range": "Medium",
        "status": "active",
        "created_at": "2024-03-18",
        "updated_at": "2024-03-18"
      },
      {
        "id": 10,
        "name": "Event Planning Services",
        "category": "Events",
        "subcategory": "Wedding Planning",
        "owner": "Nike's Events",
        "description": "Professional wedding planning service",
        "amount": 20000,
        "express": "no",
        "express_charge": null,
        "express_edd": null,
        "etd": "2 weeks",
        "image": "event_planning.jpg",
        "location": "Ikoyi, Lagos",
        "price_range": "High",
        "status": "active",
        "created_at": "2024-03-19",
        "updated_at": "2024-03-19"
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
        id:"category",
      },
      {
        id:"owner",
      },
      {
        id:"description",
      },
      {
        id:"amount",
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
              "name": 
              (<div className="">
                {row["name"]}</div>
              ),
              "category": (
                <div>{row["category"]}</div>
              ),
              "owner": 
              (<div className="">
                {row["owner"]}</div>
              ),
              "description": 
              (<div className="">
                {row["description"]}</div>
              ),
              "amount": 
              (<div className="">
                {row["amount"]}</div>
              ),
              "details": 
              (<Link to={`/blueskills-details/:serviceId`}>
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
                      title="Offerings"
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

export default BlueskillsServices
