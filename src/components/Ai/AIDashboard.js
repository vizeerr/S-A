import React from 'react'
import AIChatAside from './AIChatAside'
import AIChatBase from './AIChatBase'

const AIDashboard = ({chatID}) => {
  return (
    <div className='h-[82vh] "bg-white relative  p-5 border-4 border-white  bg-opacity-5   shadow-sm  rounded-3xl mt-10 mx-5'>
       <div className="absolute h-[30vmin]  -z-10 blur-[80px] bottom-0 end-0 w-[30vmin] bg-pink-400     rounded-full"></div>
        <div className="absolute h-[30vmin] -z-10 blur-[80px] top-0 w-[30vmin] bg-indigo-400   rounded-full"></div>
        <div className="absolute h-[50vmin] -z-10 blur-[100px]  bottom-0 top-[30%] left-[40%]  w-[50vmin] bg-amber-400  rounded-full"></div>
        <div className='flex gap-4 h-full'>
        <AIChatAside chatID={chatID}/>
        <AIChatBase chatID={chatID}/>
        </div>
    </div>
  )
}

export default AIDashboard
