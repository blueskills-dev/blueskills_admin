import React,{useState} from 'react'
import ButtonBox from '../ButtonBox'
import PageBody from '../PageBody'
import MainWrapper from '../MainWrapper'
import {useNavigate} from 'react-router-dom'
import Title from '../Title'
import FullSizedWidget from '../FullSizedWidget'
import InputField from '../InputField'
import InputTextField from '../InputTextField'
import SelectField from '../SelectField'
import { lgaList } from '../../utils/lgalist'
import { useEffect } from 'react'

export default function AddFarmDetails({gotoNext}) {
    const [states, setStates] = useState([])
    const [currentState, setCurrentState] = useState('Abia')
    const [currentLGAs, setCurrentLGAs] = useState([])
    
    useEffect(()=>{
        let states_ = []
        for (var thisstate in lgaList) {
            if (lgaList.hasOwnProperty(thisstate)) {
              states_.push({
                name: thisstate,
                value: thisstate
              })
            }
        }
        setStates(states_)        
    },[lgaList])

    useEffect(()=>{
        let selectedLga = []
        if(currentState !== ''){
            if (lgaList.hasOwnProperty(currentState)){
                for (var i = 0; i < lgaList[currentState].length; i++) {
                    selectedLga.push({
                        name: lgaList[currentState][i],
                        value: lgaList[currentState][i]
                    })
                }
            }
        }
        setCurrentLGAs(selectedLga)
    },[currentState, lgaList])

    useEffect(()=>{
        console.log(currentState,currentLGAs, states)
    },[currentLGAs, currentState, states])
    return (
    <div>

            <div className='w-full md:grid md:grid-cols-3 gap-4 bg-white'>

            <InputField
                title="Farm size" 
                inputAction={(value)=>{
                console.log(value)
                }}  
                type="number" 
                placeholder="First name"
            />

            <SelectField 
                title="Farm ownership"
                values={[
                  {
                    name:"Owned",
                    value:"owned"
                  },
                  {
                    name:"Rented",
                    value:"rented"
                  }
                ]}
                placeholder=""
                inputAction={(value)=>{
                    console.log(value)
                }}
            />


            <InputField
                title="Years of farming experience" 
                inputAction={(value)=>{
                console.log(value)
                }}  
                type="number" 
                placeholder="1"
            />



            <InputField
                title="Expected volume" 
                inputAction={(value)=>{
                console.log(value)
                }}  
                type="number" 
                placeholder="Volume in tonnes/hectares"
            />
            
            <InputField
                title="Expected price per tonnes" 
                inputAction={(value)=>{
                console.log(value)
                }}  
                type="number" 
                placeholder="Volume in tonnes/hectares"
            />

            <SelectField 
                title="Use of mechanization"
                values={[
                  {
                    name:"Yes",
                    value:"yes"
                  },
                  {
                    name:"No",
                    value:"no"
                  }
                ]}
                placeholder=""
                inputAction={(value)=>{
                    console.log(value)
                }}
            />


            <SelectField 
                title="State"
                values={states}
                placeholder=""
                inputAction={(value)=>{
                    console.log(value)
                }}
            />
            
            <SelectField 
                title="LGA"
                values={currentLGAs}
                placeholder=""
                inputAction={(value)=>{
                    console.log(value)
                }}
            />

            <div></div>
            <ButtonBox
                title="Add Farmer"
                buttonAction={()=>{
                  gotoNext()
            }}
            
            />

            </div>

        {/* <ButtonBox
          title="Add Farmer Details"
          buttonAction={()=>{
            gotoNext()
          }}
        /> */}
    </div>
  )
}
