import React, { useState } from 'react'
import ButtonBox from './ButtonBox'
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';

export default function UploadFile({
    gotoNext,
    currentStep,
    ready=true
}) {
   
   const UPLOAD_STATUSES = ["not_started", "started", "done", "disable"]
   const [file, setFile] = useState(null)
   const [fileSrc, setFileSrc] = useState(null)
   const [status, setStatus] = useState(0)
   const [uploadedFiles, setUploadedFiles] = useState([]);
   const { getRootProps, getInputProps } = useDropzone({
     onDrop: (acceptedFiles) => {
       if(acceptedFiles.length === 1 && typeof acceptedFiles[0] !== "undefined"){
        setUploadedFiles(acceptedFiles);
       }else{
        alert('You can only upload one file')
       }
     },
   });

   const fileToBase64 = (file, callback) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var base64String = reader.result.split(',')[1];
            callback(base64String);
        };
        reader.onerror = function (error) {
            console.error('Error occurred while reading the file:', error);
        };
    }

    function fileToSrc(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = () => {
                resolve(reader.result);
            };
    
            reader.onerror = reject;
    
            reader.readAsDataURL(file);
        });
    }

   const setFileSource = async(this_file)=>{
    var src = await fileToSrc(this_file)
    setFileSrc(src) 
   }
   useEffect(()=>{
    if(typeof uploadedFiles[0] !== 'undefined'){
        setStatus(2)
        fileToBase64(uploadedFiles[0],
            (this_file)=>{
                setFile(this_file)
            }    
        )
        setFileSource(uploadedFiles[0])
    }else{
        setStatus(0)
        setFile(null)
    }
   },[uploadedFiles])

   useEffect(()=>{
    setFile(null)
    setFileSource(null)
    setFileSrc(null)
    setStatus(0)
    setUploadedFiles([])
   },[currentStep])
   return (
    <div className='w-full max-w-[350px] mx-auto'>
        <div className={`
        w-full max-w-[350px] h-[200px] 
        mx-auto mt-[15px] 
        bg-gray-200 rounded-[5px] flex 
        flex-col justify-center cursor-pointer 
        ${ready ? 'border-dashed border-solid border-[1px] border-primary' : '' }
        `}
        >

            {status === 0 && ready &&
            <div className='
            flex flex-col justify-center
            text-center w-[150px] fontvariation-600
            h-full w-full mx-auto text-gray-800
            ' {...getRootProps()}>
                
                <div>Drag & Drop file here</div>
                <div> <br/>
                <input  
                type="file"
                className="w-[100px] h-[30px] bg-black"
                {...getInputProps()}
                />
                </div>
                <div className='text-sm'>supports JPEG, JPG, PNG</div>
            </div>
            }

            {status === 1 &&
            <div className='text-center w-[150px] h-auto mx-auto text-gray-400 '>
                <div>Uploadig...</div>
            </div>
            }
            {status === 2 && file !== null &&
                <img className='w-full h-full object-cover rounded-[10px]' src={fileSrc} />
            }
        </div>
        <ButtonBox
        title="Upload"
        status={`${status === 0 ? 'inactive' :
        status === 1 ? 'loading' :
        'active'}`}
        buttonAction={(fileSrc)=>{
            console.log('ss')
            gotoNext(fileSrc)
        }}
        ></ButtonBox>
    </div>
  )
}
