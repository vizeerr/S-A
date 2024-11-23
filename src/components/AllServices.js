import React from 'react'

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
const AllServices = () => {
  return (
    
    <div className=" ">
        <div className="w-[90vw] bg-slate-100 p-20 rounded-[50px] mx-auto ">
            <h1 className="text-6xl text-left  leading-normal"> All Services </h1>
            <div>
            <div className="grid grid-cols-3 gap-8 mt-12 ">
            <Card className="shadow-[8px_10px_30px_0px] border border-fuchsia-300 shadow-fuchsia-200 h-[30vh] rounded-[35px] flex items-center ">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl">1. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 text-base"> Easy And Clear Process Easy And Clear Process  Easy And Clear Process  Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-[8px_10px_30px_0px] border border-fuchsia-300 shadow-fuchsia-200 h-[30vh] rounded-[35px] flex items-center ">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl">1. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 text-base"> Easy And Clear Process Easy And Clear Process  Easy And Clear Process  Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-[8px_10px_30px_0px] border border-fuchsia-300 shadow-fuchsia-200 h-[30vh] rounded-[35px] flex items-center ">
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-2xl">1. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 text-base"> Easy And Clear Process Easy And Clear Process  Easy And Clear Process  Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
            
            
          
           
                </div>    
            </div>    
        </div>
    </div>      
  )
}

export default AllServices
