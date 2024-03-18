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



const ServiceGallery = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {
        "id": 1,
        "title": "Washing of Dishes",
        "description": "Professional cleaning service for dishes including scrubbing and drying.",
        "address": "12A, Allen Avenue, Ikeja, Lagos, Nigeria",
        "phone": "+234-123-456-7890",
        "status": "pending",
        "image": "washing_dishes.jpg",
        "created_at": "9th of March 2024 at 2:00pm",
        "updated_at": "10th of March 2024 at 3:30pm",
        "owner": "John Doe",
        "partner": "CleanX Solutions",
        "service": "Cleaning"
      },
      {
        "id": 2,
        "title": "Car Seat Cleaning",
        "description": "Thorough cleaning service for car seats using professional-grade equipment and products.",
        "address": "22, Marina Street, Lagos Island, Lagos, Nigeria",
        "phone": "+234-987-654-3210",
        "status": "completed",
        "image": "car_seat_cleaning.jpg",
        "created_at": "8th of March 2024 at 10:45am",
        "updated_at": "10th of March 2024 at 3:20pm",
        "owner": "Jane Smith",
        "partner": "Sparkle Auto Spa",
        "service": "Cleaning"
      },
      {
        "id": 3,
        "title": "Window Cleaning",
        "description": "Professional window cleaning service for residential and commercial buildings.",
        "address": "5, Adeniji Adele Road, Victoria Island, Lagos, Nigeria",
        "phone": "+234-234-567-8901",
        "status": "canceled",
        "image": "window_cleaning.jpg",
        "created_at": "7th of March 2024 at 11:15am",
        "updated_at": "9th of March 2024 at 2:50pm",
        "owner": "Alice Johnson",
        "partner": "ClearView Services",
        "service": "Cleaning"
      },
      {
        "id": 4,
        "title": "Gardening Service",
        "description": "Comprehensive gardening service including lawn mowing, hedge trimming, and plant care.",
        "address": "15, Lekki-Epe Expressway, Lekki, Lagos, Nigeria",
        "phone": "+234-345-678-9012",
        "status": "pending",
        "image": "gardening_service.jpg",
        "created_at": "6th of March 2024 at 9:30am",
        "updated_at": "8th of March 2024 at 1:10pm",
        "owner": "Michael Brown",
        "partner": "GreenThumb Gardens",
        "service": "Gardening"
      },
      {
        "id": 5,
        "title": "Event Planning",
        "description": "Full-service event planning for weddings, parties, and corporate events.",
        "address": "3, Olusegun Obasanjo Way, Ikeja, Lagos, Nigeria",
        "phone": "+234-456-789-0123",
        "status": "completed",
        "image": "event_planning.jpg",
        "created_at": "5th of March 2024 at 12:00pm",
        "updated_at": "7th of March 2024 at 4:40pm",
        "owner": "Emily Williams",
        "partner": "Dream Events",
        "service": "Event Planning"
      },
      {
        "id": 6,
        "title": "Graphic Design Service",
        "description": "Professional graphic design service for logos, branding, and digital media.",
        "address": "8, Oba Akinjobi Way, GRA, Ikeja, Lagos, Nigeria",
        "phone": "+234-567-890-1234",
        "status": "canceled",
        "image": "graphic_design.jpg",
        "created_at": "4th of March 2024 at 2:20pm",
        "updated_at": "6th of March 2024 at 6:05pm",
        "owner": "Olivia Jones",
        "partner": "Pixel Perfect Designs",
        "service": "Graphic Design"
      },
      {
        "id": 7,
        "title": "Mobile Phone Repair",
        "description": "Expert repair service for all types of mobile phones including screen replacement and hardware repairs.",
        "address": "17, Allen Avenue, Ikeja, Lagos, Nigeria",
        "phone": "+234-678-901-2345",
        "status": "pending",
        "image": "phone_repair.jpg",
        "created_at": "3rd of March 2024 at 3:40pm",
        "updated_at": "5th of March 2024 at 8:15pm",
        "owner": "William Davis",
        "partner": "Mobile Master",
        "service": "Electronic Servicing"
      },
      {
        "id": 8,
        "title": "Laundry Service",
        "description": "Professional laundry service including washing, drying, and folding of clothes.",
        "address": "25, Ogunlana Drive, Surulere, Lagos, Nigeria",
        "phone": "+234-789-012-3456",
        "status": "completed",
        "image": "laundry_service.jpg",
        "created_at": "2nd of March 2024 at 4:50pm",
        "updated_at": "4th of March 2024 at 10:30pm",
        "owner": "William Davis",
        "partner": "Fresh Laundry",
        "service": "Cleaning"
      },
      {
        "id": 9,
        "title": "Fitness Training",
        "description": "Personalized fitness training sessions for individuals and groups.",
        "address": "9, Adeola Odeku Street, Victoria Island, Lagos, Nigeria",
        "phone": "+234-901-234-5678",
        "status": "pending",
        "image": "fitness_training.jpg",
        "created_at": "1st of March 2024 at 6:10pm",
        "updated_at": "3rd of March 2024 at 11:45pm",
        "owner": "David Johnson",
        "partner": "FitFam Fitness",
        "service": "Fitness"
      },
      {
        "id": 10,
        "title": "Tutoring Service",
        "description": "Expert tutoring service for various subjects and levels including mathematics, science, and language arts.",
        "address": "30, Herbert Macaulay Way, Yaba, Lagos, Nigeria",
        "phone": "+234-012-345-6789",
        "status": "canceled",
        "image": "tutoring_service.jpg",
        "created_at": "29th of February 2024 at 8:30pm",
        "updated_at": "2nd of March 2024 at 1:15am",
        "owner": "Jessica Smith",
        "partner": "Smart Learning Hub",
        "service": "Tutoring"
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
        id:"title",
        search: true
      },
      {
        id:"description",
      },
      {
        id:"address",
      },
      {
        id:"phone",
      },
      {
        id:"status",
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
              "title": 
              (<div className="">
                {row["title"]}</div>
              ),
              "description": (
                <div>{row["description"]}</div>
              ),
              "address": 
              (<div className="">
                {row["address"]}</div>
              ),
              "phone": 
              (<div className="">
                {row["phone"]}</div>
              ),
              "status": 
              (<div className="">
                {row["status"]}</div>
              ),
                  "details": 
                  (<Link to={`/booking-details/:bookingId`}>
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
        navigate('/bookings/create')
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