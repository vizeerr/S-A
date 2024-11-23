import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const Process = () => {
  return (
    <div className="relative">
        <div className="absolute h-[20vmin] blur-[100px] bottom-28  end-20 w-[50vmin] bg-cyan-400     rounded-full"></div>
        <div className="absolute h-[30vmin] blur-[100px] top-28 w-[50vmin] bg-fuchsia-400 start-20  rounded-full"></div>
        <div className="w-[90vw] border-4 border-white relative bg-opacity-30 bg-white md:p-16 p-8 rounded-[60px] mx-auto ">
        
        <h1 className="lg:text-6xl text-4xl text-left  leading-normal"> Easy And Clear Process, Concise </h1>
        
        <div className="grid grid-row-3   lg:mt-12 mt-5 ">
            <Card className="shadow-none bg-transparent rounded-none border-0 border-t-2 border-neutral-700">
                <CardHeader>
                    <CardTitle>
                        <h2 className="lg:text-2xl text-xl">1. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 lg:text-base text-sm"> Easy And Clear Process Easy And Clear Process  Easy And Clear Process  Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-none bg-transparent rounded-none border-0 border-t-2 border-neutral-700">
                <CardHeader>
                    <CardTitle>
                        <h2 className="lg:text-2xl text-xl">2. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 lg:text-base text-sm"> Easy And Clear Process Easy And Clear Process Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="shadow-none bg-transparent rounded-none border-0 border-y-2 border-neutral-700">
                <CardHeader>
                    <CardTitle>
                        <h2 className="lg:text-2xl text-xl">3. Fell Free To Do</h2>
                    </CardTitle>
                    <CardDescription>
                        <p className="ms-5 lg:text-base text-sm"> Easy And Clear Process Easy And Clear Process Easy And Clear Process</p>
                    </CardDescription>
                </CardHeader>
            </Card>
           
        </div>
        <Button className="mt-8 rounded-full text-lg h-14 px-8">
            Consult Us
        </Button>
        </div>

        
      
    </div>
  )
}

export default Process
