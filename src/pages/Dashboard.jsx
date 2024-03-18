import React from 'react'
import Sidebar from './../components/Sidebar'
import QuaterWidget from './../components/QuaterWidget'
import Content
 from './../components/Content'
import PageBody from './../components/PageBody'
import MainWrapper from './../components/MainWrapper'
import ScollableFlex from './../components/ScollableFlex'
import Title from './../components/Title'



const Dashboard = () => {
    return (
        <div className='h-screen p-0 m-0 '>
        <Content>
          <Sidebar />
          <PageBody>
              <MainWrapper>
                <Title>
                  <div className='text-xl md:text-2xl'>Welcome Admin</div>
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
              </MainWrapper>
          </PageBody>
        </Content>
    
        </div>
      )
    }

export default Dashboard
