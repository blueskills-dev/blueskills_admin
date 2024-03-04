import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import QuaterWidget from './components/QuaterWidget'
import FullSizedWidget from './components/FullSizedWidget'
import SideBarWidget from './components/SideBarWidget'
import Content
 from './components/Content'
import PageBody from './components/PageBody'
import MainWrapper from './components/MainWrapper'
import ScollableFlex from './components/ScollableFlex'
import Title from './components/Title'
import DetailsList from './components/DetailsList'
import HarvestSlides from './components/HarvestSlides'
import Table from './components/Table'

function App() {
  const [toggleNav, setToggleNav] = useState(false)

  
  //dataSource --- the non-filterable data source
  const tableData = [
      {
          "Name": "Wheat Farming",
          "Start date": "2024-02-01",
          "Expected duration": "4 months",
          "Expenses": "$8000",
          "Harvest": "Wheat",
          "Funding": "$12000",
          "Status": "completed"
      },
      {
          "Name": "Corn Cultivation",
          "Start date": "2024-03-10",
          "Expected duration": "6 months",
          "Expenses": "$10000",
          "Harvest": "Corn",
          "Funding": "$15000",
          "Status": "active"
      },
      {
          "Name": "Tomato Greenhouse Project",
          "Start date": "2024-04-15",
          "Expected duration": "8 months",
          "Expenses": "$15000",
          "Harvest": "Tomato",
          "Funding": "$20000",
          "Status": "active"
      },
      {
          "Name": "Potato Plantation",
          "Start date": "2024-05-20",
          "Expected duration": "5 months",
          "Expenses": "$12000",
          "Harvest": "Potato",
          "Funding": "$18000",
          "Status": "active"
      },
      {
          "Name": "Rice Paddy Expansion",
          "Start date": "2024-06-25",
          "Expected duration": "7 months",
          "Expenses": "$20000",
          "Harvest": "Rice",
          "Funding": "$25000",
          "Status": "active"
      },
      {
          "Name": "Soybean Cultivation",
          "Start date": "2024-07-30",
          "Expected duration": "6 months",
          "Expenses": "$11500",
          "Harvest": "Soybean",
          "Funding": "$17000",
          "Status": "active"
      },
      {
          "Name": "Apple Orchard Establishment",
          "Start date": "2024-08-05",
          "Expected duration": "1 year",
          "Expenses": "$25000",
          "Harvest": "Apple",
          "Funding": "$35000",
          "Status": "active"
      },
      {
          "Name": "Grape Vineyard Expansion",
          "Start date": "2024-09-10",
          "Expected duration": "9 months",
          "Expenses": "$18500",
          "Harvest": "Grape",
          "Funding": "$22000",
          "Status": "active"
      },
      {
          "Name": "Pumpkin Patch Project",
          "Start date": "2024-10-15",
          "Expected duration": "3 months",
          "Expenses": "$7000",
          "Harvest": "Pumpkin",
          "Funding": "$10000",
          "Status": "active"
      },
      {
          "Name": "Cabbage Farming Initiative",
          "Start date": "2024-11-20",
          "Expected duration": "4 months",
          "Expenses": "$9500",
          "Harvest": "Cabbage",
          "Funding": "$14000",
          "Status": "active"
      },
      {
          "Name": "Carrot Cultivation Project",
          "Start date": "2025-01-01",
          "Expected duration": "6 months",
          "Expenses": "$11000",
          "Harvest": "Carrot",
          "Funding": "$16000",
          "Status": "active"
      },
      {
          "Name": "Lettuce Hydroponics Farm",
          "Start date": "2025-02-05",
          "Expected duration": "8 months",
          "Expenses": "$14000",
          "Harvest": "Lettuce",
          "Funding": "$20000",
          "Status": "active"
      },
      {
          "Name": "Blueberry Orchard Establishment",
          "Start date": "2025-03-10",
          "Expected duration": "1 year",
          "Expenses": "$27000",
          "Harvest": "Blueberry",
          "Funding": "$40000",
          "Status": "active"
      },
      {
          "Name": "Bean Plantation Expansion",
          "Start date": "2025-04-15",
          "Expected duration": "9 months",
          "Expenses": "$19500",
          "Harvest": "Bean",
          "Funding": "$28000",
          "Status": "active"
      },
      {
          "Name": "Strawberry Field Project",
          "Start date": "2025-05-20",
          "Expected duration": "6 months",
          "Expenses": "$13500",
          "Harvest": "Strawberry",
          "Funding": "$19000",
          "Status": "active"
      },
      {
          "Name": "Onion Farming Initiative",
          "Start date": "2025-06-25",
          "Expected duration": "4 months",
          "Expenses": "$8500",
          "Harvest": "Onion",
          "Funding": "$12500",
          "Status": "active"
      },
      {
          "Name": "Melon Patch Establishment",
          "Start date": "2025-07-30",
          "Expected duration": "3 months",
          "Expenses": "$6000",
          "Harvest": "Melon",
          "Funding": "$9000",
          "Status": "active"
      },
      {
          "Name": "Pepper Cultivation Project",
          "Start date": "2025-09-05",
          "Expected duration": "6 months",
          "Expenses": "$10500",
          "Harvest": "Pepper",
          "Funding": "$15000",
          "Status": "active"
      },
      {
          "Name": "Cucumber Greenhouse Farm",
          "Start date": "2025-10-10",
          "Expected duration": "8 months",
          "Expenses": "$16000",
          "Harvest": "Cucumber",
          "Funding": "$22000",
          "Status": "active"
      },
      {
          "Name": "Olive Grove Expansion",
          "Start date": "2025-11-15",
          "Expected duration": "1 year",
          "Expenses": "$30000",
          "Harvest": "Olive",
          "Funding": "$45000",
          "Status": "active"
      }
    ]
  // table tab for filtering (takes in <row> and <options>) <options> are values in row for the tab filtering 
  const tab = {
    row:'Status',
    options:['active', 'completed']
  }
  //dataSource --- settings for each column [id, search[boolean]]
  const headers = [
    {
      id:"id"
    },
    {
      id:"Name",
      search: true
    },
    {
      id:"Status",
    },
    {
      id:"Start date",
    },
    {
      id:"Expected duration",
      search: true
    },
    {
      id:"Expenses"
    },{
      id:"Harvest"
    },{
    id:"Funding"
    }
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
            "Name": 
            (<div className="">
              {row["Name"]}</div>
            ),
            "Status": (
              <div>{row["Status"]}</div>
            ),
            "Start date": 
            (<div className="">
              {row["Start date"]}</div>
            ),
            "Expected duration": 
            (<div className="">
              {row["Expected duration"]}
            </div>),
            "Expenses": 
            (<div className="">
              {row["Expenses"]}
            </div>),
            "Harvest": 
            (<div className="">
              {row["Harvest"]}
            </div>),
            "Funding": 
            (<div className="">
            {row["Funding"]}
            </div>)
          };
        })
      : [];
      setDataRows(dS)
  },[dataSource])

  //table action
  const tableButton = {
    text: 'View Farmers',
    action: () => {
      alert("this is the action")
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
                  title="Projects"
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

export default App
