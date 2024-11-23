import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

const Wrappers = () => {
  return (
    <div>
        <Card className="border-0 cardR grid grid-cols-2 lg:h-[90vh] ">
            <div className="bg-amber-100 lg:px-20 sm:p-5 p-0  flex flex-col   justify-center ">
                <CardHeader className="flex ">
                    <CardTitle className="text-5xl mb-5">

                        Need A Legal Experts ?
                    </CardTitle>
                    <CardDescription className="text-neutral-700 leading-loose text-xl mb-5">
                     Our legal experts are here to provide you with a wide range of legal services, including legal advice, contract drafting, litigation management, and other legal solutions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <ul className=" flex cursor-pointer gap-3 mb-8 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Legal Notice</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Criminal Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Rental Agreement</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Labour Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Divorce Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">ITR Notice</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Property Registration</li>
                </ul>
                <Button className="flex justify-center items-center  rounded-full text-lg h-12 px-6 gap-4">
                    Consult Now
                    <MoveRight/>
                </Button>
                </CardContent>
            </div>
            <div className="bg-amber-300   flex justify-center items-center">
                <img src="/images/hammer3.jpeg" alt="" className="bg-amber-100 rounded-2xl shadow-2xl w-[70%] lg:mx-auto my-10 " />
            </div>
            
        </Card>
        <Card className="border-0 cardL grid grid-cols-2  lg:h-[90vh] ">
        <div className="bg-orange-400 flex justify-center items-center">
                <img src="/images/taxes.jpeg" alt="" className="bg-amber-100 rounded-2xl shadow-2xl w-[70%] lg:mx-auto my-10" />
            </div>
            <div className="bg-orange-200  flex flex-col lg:px-20 p-5 justify-center ">
                <CardHeader className="flex ">
                    <CardTitle className="text-5xl mb-5">

                        GST & Income Tax ?
                    </CardTitle>
                    <CardDescription className="text-neutral-700 leading-loose text-xl mb-5">
                        Our accounting experts are here to offer a wide range of tax and compliance services, including filing gst, registration, income tax filing and other accounting services
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <ul className=" flex cursor-pointer gap-3 mb-8 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Registrations</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">TDS Return Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Divorce Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Notice</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Assessment</li>

                </ul>
                <Button className="flex justify-center items-center rounded-full text-lg h-12 px-6 gap-4">
                    Consult Now
                    <MoveRight/>
                </Button>
                </CardContent>
            </div>
            
            
        </Card>
        <Card className="border-0 cardR grid grid-cols-2  lg:h-[90vh] ">
           
            <div className="bg-red-200  flex flex-col lg:px-20 p-5 justify-center ">
                <CardHeader className="flex ">
                    <CardTitle className="text-5xl mb-5">

                        Need A Customized Website
                    </CardTitle>
                    <CardDescription className="text-neutral-700 leading-loose text-xl mb-5">
                        Our accounting experts are here to offer a wide range of tax and compliance services, including filing gst, registration, income tax filing and other accounting services
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <ul className=" flex cursor-pointer gap-3 mb-8 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Registrations</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">TDS Return Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Divorce Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Notice</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Assessment</li>

                </ul>
                <Button className="flex justify-center items-center rounded-full text-lg h-12 px-6 gap-4">
                    Consult Now
                    <MoveRight/>
                </Button>
                </CardContent>
            </div>
            <div className="bg-red-500 flex justify-center items-center">
                <img src="/images/acc.jpeg" alt="" className="bg-amber-100 rounded-2xl shadow-2xl w-[70%] lg:mx-auto my-10" />
            </div>
            
            
        </Card> 
        <Card className="border-0 cardL grid grid-cols-2  lg:h-[90vh] ">
        <div className="bg-cyan-400 flex justify-center items-center">
                <img src="/images/ssol.jpeg" alt="" className="bg-amber-100 rounded-2xl shadow-2xl w-[70%] lg:mx-auto my-10" />
            </div>
            <div className="bg-cyan-100  flex flex-col lg:px-20 p-5 justify-center ">
                <CardHeader className="flex ">
                    <CardTitle className="text-5xl mb-5">

                        Build Your Own Software ?
                    </CardTitle>
                    <CardDescription className="text-neutral-700 leading-loose text-xl mb-5">
                        Our accounting experts are here to offer a wide range of tax and compliance services, including filing gst, registration, income tax filing and other accounting services
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <ul className=" flex cursor-pointer gap-3 mb-8 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Registrations</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">TDS Return Filing</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Divorce Lawyer</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Notice</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Assessment</li>

                </ul>
                <Button className="flex justify-center items-center rounded-full text-lg h-12 px-6 gap-4">
                    Consult Now
                    <MoveRight/>
                </Button>
                </CardContent>
            </div>
            
            
        </Card>
        <Card className="border-0 cardR grid grid-cols-2  lg:h-[90vh] ">
           
           <div className="bg-fuchsia-100  flex flex-col lg:px-20 p-5 justify-center ">
               <CardHeader className="flex ">
                   <CardTitle className="text-5xl mb-5">

                       Need A Customized Website
                   </CardTitle>
                   <CardDescription className="text-neutral-700 leading-loose text-xl mb-5">
                       Our accounting experts are here to offer a wide range of tax and compliance services, including filing gst, registration, income tax filing and other accounting services
                   </CardDescription>
               </CardHeader>
               <CardContent>
               <ul className=" flex cursor-pointer gap-3 mb-8 flex-wrap">
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Filing</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Gst Registrations</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Filing</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">TDS Return Filing</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Divorce Lawyer</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Notice</li>
                       <li className="border-2 border-red-950 rounded-full py-1 px-5">Income Tax Assessment</li>

               </ul>
               <Button className="flex justify-center items-center rounded-full text-lg h-12 px-6 gap-4">
                   Consult Now
                   <MoveRight/>
               </Button>
               </CardContent>
           </div>
           <div className="bg-pink-500 flex justify-center items-center">
               <img src="/images/bag.jpeg" alt="" className="bg-amber-100 rounded-2xl shadow-2xl w-[70%] lg:mx-auto my-10" />
           </div>
           
           
       </Card> 
    </div>
  )
}

export default Wrappers
