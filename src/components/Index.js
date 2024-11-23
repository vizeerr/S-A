import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const Index = () => {
  return (
    <div className="w-[90vw] mx-auto">
        <h1 className="text-center sm:text-5xl text-4xl font-bold">Providing Professioal Services</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:mt-16 mt-10 justify-center">
            <Card className="bg-yellow-100 bg-opacity-70 rounded-3xl border-none">
                <CardHeader>
                    <CardTitle className="text-3xl">
                            Who We Are?
                    </CardTitle>
                    <CardDescription className='text-neutral-600 text-base'>
                    We are an organization offering a wide range of professional services, committed to delivering cost-effective solutions for your business, allowing you to focus more on growth. We prioritize growth and quality work over anything else. Our team of experts provides comprehensive services in business management, accounting services, legal issues, and software solutions etc.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="bg-red-100 rounded-3xl border-none">
                <CardHeader>
                    <CardTitle className="text-3xl">
                            What We Do?
                        
                    </CardTitle>
                    <CardDescription className='text-neutral-600 text-base'>
                        We Provide Various Professional Services such as :-
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                    <ul className="flex cursor-pointer gap-3 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Accounting </li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Legal</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Software Solutions</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Website Development</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Ecommerce Management</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="bg-purple-100 rounded-3xl border-none">
                <CardHeader>
                    <CardTitle className="text-3xl">
                            How We Do?
                    </CardTitle>
                    <CardDescription className='text-neutral-600 text-base'>
                    Our team of experts is here to assist you with a wide range of services, offering the best solutions tailored to your business needs. Once you request a service, we will consult with you, and after finalizing the details, our specialists will work to deliver the best possible solutions and services
                    </CardDescription>
                </CardHeader>
                
            </Card>
            
        </div>
      
    </div>
  )
}

export default Index
