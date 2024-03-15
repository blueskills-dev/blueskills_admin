import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import QuaterWidget from '../../components/QuaterWidget'
import FullSizedWidget from '../../components/FullSizedWidget'
import SideBarWidget from '../../components/SideBarWidget'
import Content
 from '../../components/Content'
import PageBody from '../../components/PageBody'
import MainWrapper from '../../components/MainWrapper'
import ScollableFlex from '../../components/ScollableFlex'
import Title from '../../components/Title'
import DetailsList from '../../components/DetailsList'
import HarvestSlides from '../../components/HarvestSlides'
import Table from '../../components/Table'
import { Link } from 'react-router-dom'



const AudioContextLatencyCategory = () => {
    const [toggleNav, setToggleNav] = useState(false)

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
        {
            "id": 1,
            "service": "Cleaning",
            "description": "Offering professional cleaning services for homes and offices.",
            "status": "active"
        },
        {
            "id": 2,
            "service": "Plumbing",
            "description": "Providing expert plumbing solutions for residential and commercial properties.",
            "status": "inactive"
        },
        {
            "id": 3,
            "service": "Electrical and Electronics",
            "description": "Specializing in electrical and electronics repair and installation services.",
            "status": "active"
        },
        {
            "id": 4,
            "service": "Hair stylist",
            "description": "Creating trendy hairstyles for men and women.",
            "status": "inactive"
        },
        {
            "id": 5,
            "service": "Laundry",
            "description": "Professionally cleaning and ironing clothes with care.",
            "status": "active"
        },
        {
            "id": 6,
            "service": "AC Repairs and maintenance",
            "description": "Offering maintenance and repair services for air conditioning systems.",
            "status": "active"
        },
        {
            "id": 7,
            "service": "Barbers",
            "description": "Providing grooming services and modern haircuts for men.",
            "status": "inactive"
        },
        {
            "id": 8,
            "service": "Meals",
            "description": "Serving delicious and nutritious meals for breakfast, lunch, and dinner.",
            "status": "active"
        },
        {
            "id": 9,
            "service": "Fumigation",
            "description": "Eliminating pests and insects from homes and commercial spaces.",
            "status": "active"
        },
        {
            "id": 10,
            "service": "Generators",
            "description": "Repairing and maintaining generators for uninterrupted power supply.",
            "status": "inactive"
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
        id:"description",
      },
      {
        id:"Status",
      },
      {
        id:"Subcategory",
      },
      {
        id:"Offerings",
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
              "description": (
                <div>{row["description"]}</div>
              ),
              "Status": 
              (<div className="">
                {row["status"]}</div>
              ),
              "Subcategory": 
                (<Link to={`/category/${row.id}`}>
                  <div className="w-auto h-[30px] bg-blue-500 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"> 
                  Go to subcategory
              </div>
              </Link>),
              "Offerings": 
              (<Link to={`/subcategory/${row.id}`}>
              <div className="w-auto h-[30px] bg-orange-500 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"> 
              Go to offerings
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
                      title="Category"
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

export default AudioContextLatencyCategory
