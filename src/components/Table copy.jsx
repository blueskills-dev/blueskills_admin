import React, { useEffect, useState } from 'react'

export default function Table({tabledata, pageSize}) {

  const [tableKeys, setTableKey] = useState([])
  const [page, setPage] = useState(1)
  const [pagerange, setPageRange] = useState([])
  const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  
  useEffect(()=>{
    let pages = arrayRange(1, Math.ceil(Number(tabledata.length)/Number(pageSize)), 1) // [1,2,3,4,5]
    setPageRange(pages)
  },[page])
  useEffect(()=>{
    let firstObject = tabledata[0];
    var keys = [];
    for (var key in firstObject) {
        keys.push(key);
    }
    setTableKey(keys)
  },[tabledata])
  return (
    <div>
      <div className='flex flex-row'>
        <div className='h-[40px] w-[200px] bg-gray-100'></div>
      </div>
      <table class="min-w-full border divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            {tableKeys.map((keys)=>{
              return(
                <th
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  {keys}
                </th>
              )})}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {tabledata.slice((page - 1) * pageSize , pageSize + ((page - 1) * pageSize) ).map((tr, index_)=>{
          return(
          <tr key={index_}>
            {tableKeys.map((td, index)=>{
            return(
            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {tr[td]}
            </td>
            )})}
          </tr>
          )})}
        </tbody>
      </table>
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
