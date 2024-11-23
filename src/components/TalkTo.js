import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const TalkTo = () => {
  return (

    <div className="w-[90vw] relative flex mx-auto my-10">
        
      <Card className="bg-stone-200 shadow-xl  flex gap-8 items-center rounded-3xl p-4">
       <CardHeader>
            <CardTitle>
                <h1 className="text-4xl">Talk To Lawyer</h1>
            </CardTitle>
            <CardDescription>
                <p className="text-xl">
                   Provide Legal Advice, draft contracts, handle litigation, and offer legal
                </p>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ul className=" flex cursor-pointer gap-3 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>

                    </ul>
            </CardContent>
      </Card>
      <Card className="bg-amber-100 absolute top-[150px] flex gap-8 items-center rounded-3xl p-4">
       <CardHeader>
            <CardTitle>
                <h1 className="text-4xl">Talk To Lawyer</h1>
            </CardTitle>
            <CardDescription>
                <p className="text-xl">
                   Provide Legal Advice, draft contracts, handle litigation, and offer legal
                </p>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ul className=" flex cursor-pointer gap-3 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>

                    </ul>
            </CardContent>
      </Card>
      <Card className="bg-blue-100  shadow-xl absolute top-[300px]  flex gap-8 items-center rounded-3xl p-4">
       <CardHeader>
            <CardTitle>
                <h1 className="text-4xl">Talk To Lawyer</h1>
            </CardTitle>
            <CardDescription>
                <p className="text-xl">
                   Provide Legal Advice, draft contracts, handle litigation, and offer legal
                </p>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ul className=" flex cursor-pointer gap-3 flex-wrap">
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Busine</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>
                        <li className="border-2 border-red-950 rounded-full py-1 px-5">Business</li>

                    </ul>
            </CardContent>
      </Card>
    </div>
  )
}

export default TalkTo

