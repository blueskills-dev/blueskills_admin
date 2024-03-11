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



const Subcategory = () => {
    const [toggleNav, setToggleNav] = useState(false)

  
    //dataSource --- the non-filterable data source
    const tableData = 
    [
      {   "id": 1,
          "service": "Home Cleaning",
          "description": "Site Cleaning",
          "status": "active"
      },
      {
        "id": 2,
          "service": "Street Cleaning",
          "description": "Creating custom metal structures, gates, and decorative pieces.",
          "status": "active"
      },
      {
        "id": 3,
          "service": "Site Cleaning",
          "description": "Site Cleaning",
          "status": "active"
      },
      {
        "id": 4,
          "service": "Street Cleaning",
          "description": "Creating custom metal structures, gates, and decorative pieces.",
          "status": "active"
      },
     
      {
        "id": 5,
          "service": "Shop Cleaning",
          "description": "Designing and producing unique textiles for fashion and home decor.",
          "status": "active"
      },
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
              (<div className="w-auto h-[30px] bg-red-600 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"
              onClick={()=>{
                alert("Delete Button")
              }}
              > 
                  Delete
              </div>),
              "Offerings": 
              (<Link to={`/category/${row.id}/offerings`}>
              <div className="w-auto h-[30px] bg-blue-500 text-white pt-[7px] px-[10px] rounded-[5px] cursor-pointer text-center"> 
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

export default Subcategory