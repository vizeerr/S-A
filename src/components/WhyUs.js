import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const WhyUs = () => {
  return (
    <div className=" ">
      <div className="w-[90vw] bg-slate-100 lg:p-20 p-8 lg:rounded-[50px] rounded-2xl mx-auto ">
        <h1 className="lg:text-6xl text-4xl text-left  leading-normal"> Why Customers Love Us? </h1>
       
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12 ">
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
  )
}

export default WhyUs
