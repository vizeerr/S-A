import React from 'react'

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
const OurLegalAi = () => {
  return (
    <div className="relative">
        <div className="absolute h-[20vmin] blur-[100px] top-28 start-20  w-[50vmin] bg-cyan-400     rounded-full"></div>
        <div className="absolute h-[30vmin] blur-[100px]  bottom-28  end-20 w-[50vmin] bg-fuchsia-400  rounded-full"></div>
        <div className="w-[90vw]  border-4 border-white relative grid lg:grid-cols-2 grid-cols-1 bg-opacity-30 bg-white lg:p-16 p-10 rounded-[60px] mx-auto ">
        <div>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-left inline lg:leading-normal"><span className='text-cyan-600'>Legal AI</span> Your Legal Assistant</h1>
          {/* <p className='lg:text-2xl text-xl inline ms-4'></p> */}
          <p className='md:text-xl text-lg mt-4'>Use Our Best Legal AI that will assit you in various legal tasks such as 
            case summary, all legal laws, legal help and documentation </p>
          <ul className='list-inside list-disc mt-5'>
            <li>Vivek</li>
            <li>Vivek</li>
            <li>Vivek</li>
            <li>Vivek</li>
            <li>Vivek</li>
            <li>Vivek</li>
            <li>Vivek</li>
           
          </ul>

        </div>

        <img src="images/dw.svg" alt="" className='opacity-70'/>
        </div>
        

        
      
    </div>
  )
}

export default OurLegalAi
