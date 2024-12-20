"use client"
import { useEffect,useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card'
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from 'embla-carousel-react'

const CustomerReview = () => {
    const [api, setApi] = useState()
    const cardData = Array(5).fill({
        description:
          "The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.",
        name: "Vivek Sagar",
        role: "Freelancer",
        image: "images/tax3.jpeg",
      });
  return (
    <div className="relative">
        
        <div>
            <h1  className="lg:text-6xl text-4xl pt-12 text-center  leading-normal">What Customers Says About Us?</h1>
            {/* <Carousel setApi={setApi}   opts={{
    
    loop: true,
  }}
  plugins={[
        Autoplay({
            delay: 1500,
            
        }),
    ]}  className="md:w-[75vw] w-[90vw] mx-auto  " 
            style={{
                "mask-image": "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
            }}>
      <CarouselContent className="-ml-10">
        
            <CarouselItem  className=" lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>

            
            
       
      </CarouselContent>
      </Carousel>
      <Carousel  setApi={setApi}  opts={{
    
    loop: true,
  }}
  plugins={[
        Autoplay({
            delay: 1600,
            
        }),
    ]}  className="w-[75vw] mx-auto " 
            style={{
                "mask-image": "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
            }}>
      <CarouselContent className="-ml-10">
        
            <CarouselItem  className=" lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl   shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10">
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>
            <CarouselItem  className="lg:basis-1/3  basis-1/2  lg:pl-10 my-10" >
                
                <Card className="shadow-[5px_8px_40px_0px] rounded-3xl  shadow-violet-200"> 
                    <CardHeader>
                        <CardDescription>
                        <p className="text-neutral-500 text-base">The litigation analysis feature is a godsend. It has helped me in identifying trends and preparing better for my cases. The app is a true companion for any modern-day lawyer.</p>

                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <div className="flex gap-2 items-center">
                            <img src="images/tax3.jpeg" width={35} className="rounded-full shadow-md" alt="" />
                            <div>
                                <p className="font-semibold">
                                    Vivek Sagar
                                </p>
                                <p className="text-xs">Freelancer</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                
            </CarouselItem>

            
            
       
      </CarouselContent>
      </Carousel> */}

<div className="slider-container overflow-hidden  w-full">
      <div className="slider-track inline-flex gap-10 ">
        
        {cardData.concat(cardData).map((item, index) => (
             <Card  key={index} className="shadow-[5px_8px_40px_0px] rounded-3xl w-[350px] my-10 shadow-violet-200"> 
             <CardHeader>
                 <CardDescription>
                 <p className="text-neutral-500 text-base">{item.description}</p>

                 </CardDescription>
             </CardHeader>
             <CardFooter>
                 <div className="flex gap-2 items-center">
                     <img src={item.image} width={35} className="rounded-full shadow-md" alt="" />
                     <div>
                     <p className="font-semibold">{item.name}</p>
                     <p className="text-xs">{item.role}</p>
                     </div>
                 </div>
             </CardFooter>
         </Card>
          
        ))}
      </div>
    </div>
        </div>
    </div>
  )
}

export default CustomerReview
