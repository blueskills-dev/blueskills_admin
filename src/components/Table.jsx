import React, { useEffect, useState } from 'react'
import search from '../assets/icons/search.svg'
import InputBox from './InputBox'

export default function Table({ 
  tableData,
  headers, 
  pageSize, 
  title, 
  dataSource, 
  setDataSource,
  dataRows, 
  tab,
  tableButton
}) {

  const [page, setPage] = useState(1)
  const [pagerange, setPageRange] = useState([])
  const [searchText, setSearchText] = useState("")
  const [dataFiltered, setDataFiltered] = useState([])
  const [tabValue, setTabValue] = useState("")
  const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  )
  useEffect(()=>{
    let pages = arrayRange(1, Math.ceil(Number(dataRows.length)/Number(pageSize)), 1) // [1,2,3,4,5]
    setPageRange(pages)
  },[page])
  
  useEffect(()=>{
    console.log(dataSource)
    let d = tableData.filter((this_data)=>{  
      let found = false
      for(let i = 0; i < headers.length; i++){
        console.log(headers[i].id, headers[i].search, this_data[headers[i].id])
        if(headers[i].search && this_data[headers[i].id].toString().toLowerCase().includes(searchText.toString().toLowerCase())){
          found = true

          break;
        }
      }

      if(found === true && typeof tab !== "undefined"){
        console.log(this_data[tab.row], tabValue, "here")
        if(this_data[tab.row].toLowerCase().includes(tabValue.toLowerCase())){
          found = true
        }else{
          found = false
        }
      }
      return found
    })
    setDataSource(d)
    console.log(d)
  },[searchText, tabValue])
  return (
    <div>
      <div className='flex flex-row align-center justify-between pb-[10px] flex-wrap'>
        <div className='text-xl w-full md:w-auto pt-[20px] md:py-[10px]'>{title}</div>
        <div className='flex flex-row-reverse gap-[10px] w-full 
          md:w-1/2 py-[20px] md:py-[0px]'>
          {typeof tableButton !== "undefined" &&
          <div className='h-[40px] min-w-[150px] rounded-[5px] px-[20px]
          bg-primary hover:bg-secondary cursor-pointer text-white text-lg text-center pt-[10px]'
          onClick={()=>tableButton.action()}
          >{tableButton.text}</div>
          }
          <div className='h-[40px] w-2/3 '>
            <InputBox inputIcon={search} inputAction={setSearchText} />
          </div>
          
        </div>
      </div>
      <div className=''>
        {typeof tab !== "undefined" &&
        <div className='flex flex-row gap-[1px] pt-[10px] pb-[20px]'>
          <div className={`h-[40px]  
          text-center py-[10px] cursor-pointer
          ${' w-1/'+(tab.options.length + 1)} md:w-[150px]
          ${tabValue === '' ? 'border-b-2 border-black': ''}
          `}
          onClick={()=>setTabValue("")}>All</div>
          {typeof tab.options !== "undefined" &&
          <div className={`flex flex-row
          ${' w-'+tab.options.length+'/'+(tab.options.length + 1)}
          `}>
            {/*  */}
            {tab.options.map((option, index)=>{
              return(
                <div className={`h-[40px] w-1/3 md:w-[150px]  
                py-[10px] cursor-pointer capitalize text-center
                ${' w-1/'+tab.options.length}
                ${tabValue === option ? 'border-b-2 border-black': ''}
                `} 
                onClick={()=>setTabValue(option)}
                key={index}>{option}</div>
              )})}
          </div>
          }
        </div>
        }
      </div>
      <div className='w-full overflow-auto'>
      <table className="min-w-full border divide-y divide-gray-200">
        <thead className="bg-secondary">
          <tr>
            {headers.map((keys, index)=>{
              return(
                <th key={index}
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                >
                  {keys.id}
                </th>
              )})}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataRows.slice((page - 1) * pageSize , pageSize + ((page - 1) * pageSize) ).map((tr, index_)=>{
          return(
          <tr key={index_}>
            {headers.map((td, index)=>{
            return(
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap" key={index}>
              {tr[td.id]}
            </td>
            )})}
          </tr>
          )})}
        </tbody>
      </table>
      </div>
      <div className='flex justify-center pt-[20px] gap-[5px]'>
        
        {pagerange.map((pageno, index)=>{
        return(
        <div key={index} className={`w-[30px] h-[30px] 
          p-[5px] bg-grey-100 
          text-center rounded-[5px] 
          cursor-pointer fontvariation-600
          ${pageno === page ? 'bg-primary text-white' : 'bg-white'}
          `}
          onClick={()=>setPage(pageno)}
          >{pageno}</div>
        )})}
      </div>
    </div>
  )
}
