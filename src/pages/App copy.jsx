import { useState } from 'react'
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

function App() {
  const [toggleNav, setToggleNav] = useState(false)

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
                <table class="table-auto">
                  <thead>
                    <tr>
                      <th>Song</th>
                      <th>Artist</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                      <td>Malcolm Lockyer</td>
                      <td>1961</td>
                    </tr>
                    <tr>
                      <td>Witchy Woman</td>
                      <td>The Eagles</td>
                      <td>1972</td>
                    </tr>
                    <tr>
                      <td>Shining Star</td>
                      <td>Earth, Wind, and Fire</td>
                      <td>1975</td>
                    </tr>
                  </tbody>
                </table>
              </FullSizedWidget>
            
          </MainWrapper>
        <SideBarWidget>
          <div className='details_list
            h-full flex flex-col p-[20px]
          '>
            <DetailsList title="Land Size" value="50 Hectares" />
            <DetailsList title="Location" value="Lagos" />
            <DetailsList title="Year of Experience" value="5" />
            <DetailsList title="Year of Experience" value="5" />
            <DetailsList title="Year of Experience" value="5" />
          </div>
          <FullSizedWidget color="bg-green-100">
            <div className='flex flex-row justify-between'>
              <div className='saira-600 text-md text-white'>Harvest</div>
              <div className='
                saira-600 
                text-md 
                text-white hover:text-yellow-400 
                underline 
                cursor-pointer'>
              Add</div>
            </div>
            <div className='pt-[30px] flex flex-col gap-[10px] overflow-y-auto'>
                <HarvestSlides title="12-01-2023" value="50 Metric tonnes" />
                <HarvestSlides title="12-01-2023" value="50 Metric tonnes" />
                <HarvestSlides title="12-01-2023" value="50 Metric tonnes" />
                <HarvestSlides title="12-01-2023" value="50 Metric tonnes" />
                <HarvestSlides title="12-01-2023" value="50 Metric tonnes" />
            </div>
          </FullSizedWidget>
        </SideBarWidget>
      </PageBody>
    </Content>

    </div>
  )
}

export default App
