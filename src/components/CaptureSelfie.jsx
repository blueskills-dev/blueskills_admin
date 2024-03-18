import React, { useCallback, useRef, useState } from 'react'
import captureIcon from '../assets/icons/capture.svg'
import next from '../assets/icons/next.svg'
import cancel from '../assets/cancel.svg'
import Webcam from "react-webcam"


export default function CaptureSelfie({gotoNext}) {
  const [status, setStatus] = useState(0)
  const statuses = ["not capture","captured"]
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null)

  // create a capture function
  const capture = useCallback(() => {
   
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc);
    setStatus(1)
  }, [webcamRef]);

  // const capture = () => {
  //   const imageSrc = getScreenshot();
  //   setImgSrc(imageSrc);
  // };


  const retake = () => {
    setStatus(0)
    setImgSrc(null);
  };


  return (
    <div className='w-[250px] h-full mx-auto mt-[20px] overflow-auto'>
        <div className='w-[250px] h-[250px] rounded-full border-2 border-solid border-primary relative'>
          {status === 1 &&  
            <div className='absolute w-[30px] 
            h-[30px] cursor-pointer 
            mt-[20px] mr-[20px]
            rounded-full right-0 bg-gray-100 p-1'
            onClick={()=>{
              retake()
            }}
            >
              <img src={cancel} className="w-full h-full object-cover"/>
            </div>
          }
          <div className='w-[240px] 
          h-[240px] rounded-full 
          mt-[2.5px] ml-[2.5px] 
          bg-gray-300 border-primary'
          >
            {imgSrc ? (
              <img src={imgSrc} className='w-full h-full rounded-full object-cover' alt="webcam" />
            ) : (
              <Webcam 
              ref={webcamRef} 
              screenshotFormat="image/jpeg"
              screenshotQuality={0.8}
              className='w-full h-full rounded-full object-cover'
              />
            )}
          </div>

        </div>

        <div className={`w-full h-[40px] 
        ${status === 0 ? 'bg-secondary hover:bg-primary': 'bg-primary'} 
        mt-[20px] rounded-[5px] cursor-pointer 
        p-[7px]`}>
          {status === 0 &&
          <div className='flex flex-row gap-2 justify-center align-center'
          onClick={capture}
          >
            <img src={captureIcon} className="w-[25px] h-[25px]"/>
            <div className='text-white fontvariation-500 text-xl pt-[3px]'>Capture</div>
          </div>
          }
          {status === 1 &&
          <div className='flex flex-row gap-2 justify-center align-center'
          onClick={()=>{
            gotoNext()
          }}
          >
            <div className='text-white fontvariation-500 text-xl pt-[3px]'>Next</div>
            <img src={next} className="w-[15px] h-[15px] mt-[6px]"/>
          </div>
          }
        </div>
    </div>
  )
}
