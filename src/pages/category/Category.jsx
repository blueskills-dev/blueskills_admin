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



const Category = () => {
    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()

    // const tab = {
    //   row:'status',
    //   options:['active', 'inactive']
    // }
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
        id:"description",
      },
      {
        id:"Subcategory",
      },
      {
        id:"Offerings",
      },
    ]


    const [tableData, setTableData] = useState([]);


    const [dataSource, setDataSource] = useState(tableData);

    const [dataRows, setDataRows] = useState([])

    
    useEffect(() => {
      const fetchData = async () => {
          try {
            const auth_token = localStorage.getItem('auth_token');

            const response = await fetch('https://blueskills3-latest.onrender.com/category/', {
              method: "GET", 
              headers: {
                'Authorization': `Token ${auth_token}`
              }
            });
              const data = await response.json();
              setTableData(data.results);
              setDataSource(data.results);
              console.log(auth_token)
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);


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
              "description": (
                <div>{row["description"]}</div>
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
        navigate('/category/create')
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

export default Category