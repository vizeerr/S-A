"use client"
import { useEffect,useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { SearchBox } from "./SearchBox"
import justicImg from "../../public/images/justice2.png"
import taxImg from "../../public/images/tax3.jpeg"
import websiteImg from "../../public/images/website.png"
import solutionImg from "../../public/images/solutions.jpeg"
import ecommImg from "../../public/images/ecommerce.jpeg"
import Image from "next/image"
import {useTranslations} from 'next-intl';
  
const BigCarousel = () => {
    const [api, setApi] = useState()
    const [current, setCurrent] = useState(0)
    const t = useTranslations('BigCarousel');
    useEffect(() => {
        if (!api) {
          return
        }
        
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
    },[api])
        

  return (
    <div className="relative">
        <div className="absolute h-[30vmin] w-[30vmin] bg-pink-400 blur-[12vmin] top-0  rounded-full"></div>
        <div className="absolute h-[30vmin] bottom-0 end-0 w-[30vmin] bg-indigo-400 blur-[12vmin]  rounded-full"></div>
    <Carousel setApi={setApi}  plugins={[
        Autoplay({
            delay: 5000,
            stopOnInteraction: true
        }),
    ]}  className="lg:block  hidden w-[90vw] md:w-[80vw] lg:w-[90vw] mx-auto mt-14">
      <CarouselContent>
        
            <CarouselItem >
                
                <Card className="bg-green-950">
                    <CardContent className="flex flex-col sm:gap-8 gap-6 h-[60vh] w-full items-center justify-center p-3">
                    <h1 className="text-white text-[40px] sm:text-5xl  text-center leading-tight md:text-6xl">{t('slide1Title')}</h1>
                    <p className="text-zinc-300  sm:text-lg text-base leading-6 text-center">{t('slide1Description')}</p>
                    <SearchBox/>
                    <div className="md:flex gap-5 flex-wrap hidden">
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Criminal Lawyer</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Gst Registration</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Income Tax</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Trademark Registration</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Legal Notice</p>
                    </div>
                    </CardContent>
                </Card>
                
            </CarouselItem>

            <CarouselItem >
                
                <Card className="bg-yellow-50">
                    <CardContent className="flex flex-row gap-8 h-[60vh] w-full items-center justify-center p-6">
                    <div className="flex flex-col gap-7 items-center justify-start">
            <h1 className="text-yellow-800 text-5xl  leading-relaxed md:text-6xl">{t('slide2Title')}
            </h1>
            <p className="text-zinc-700 sm:text-lg text-sm text-start w-full ">{t('slide2Description')}</p>
            <div className="flex w-full justify-start">

            <SearchBox theme={"dark"} className="self-start"/>
            </div>
            <div className="flex w-full gap-5 justify-start flex-wrap">
                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Legal Notice</p>
                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Rental Agreement</p>
                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Trade License</p>
                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Labour Lawyer</p>
                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Divorce Lawyer</p>
            </div>
            </div>
            <div>
                <Image src={justicImg} width={600} height={500} className="drop-shadow-2xl" alt=""/>
            </div>

                        
                    </CardContent>
                    
                </Card>
                
            </CarouselItem>

            <CarouselItem >   
                <Card className="bg-emerald-50">
                    <CardContent className="flex flex-row  h-[60vh]  items-center justify-around p-6">
                        <div className="flex  flex-col gap-10 w-1/2  justify-start">
                            <h1 className="text-stone-800 text-5xl  leading-normal md:text-6xl">{t('slide3Title')}</h1>
                            <p className="text-zinc-800 sm:text-lg text-sm ">{t('slide3Description')}</p>
                            <div className="flex w-full justify-start">
                                <SearchBox className="self-start" theme={"dark"}/>
                            </div>
                            <div className="flex w-full gap-5 justify-start flex-wrap">
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Tax</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Gst Registration</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Income Tax</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Gst Filling</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Accounting</p>

                            </div>
                        </div> 
                        <div>
                            <Image src={taxImg} width={350} height={350} className="rounded-3xl shadow-xl" alt=""/>
                        </div>
                    </CardContent>
                </Card>
                
            </CarouselItem>

            <CarouselItem >   
                <Card className="bg-zinc-100">
                    <CardContent className="flex flex-row  h-[60vh] w-full items-center justify-evenly p-6">
                    <div className="flex  flex-col gap-10 w-1/2 items-center justify-start">
                        <h1 className="text-black text-5xl w-full leading-normal md:text-6xl">{t('slide4Title')}</h1>
                            <p className="text-zinc-800 w-full sm:text-lg text-sm">{t('slide4Description')}</p>
                        
                            <div className="flex w-full justify-start">
                            <SearchBox className="self-start" theme={"dark"}/>
                            </div>
                            <div className="flex w-full gap-5 justify-start flex-wrap">
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Landing Page</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Ecommerce Website</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Business Website</p>
                                <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Startup Website</p>
                            </div>
                        
                        </div> 
                        <div>
                            <Image src={websiteImg} width={350} height={350} className="rounded-3xl shadow-xl" alt=""/>
                        </div>
                        
                    </CardContent>
                </Card>
                
            </CarouselItem>

            <CarouselItem >   
                <Card className="bg-orange-100">
                    <CardContent className="flex flex-row  h-[60vh] w-full items-center justify-evenly p-6">
                    <div className="flex  flex-col gap-10 w-3/5 items-center justify-start">
                    <h1 className="text-black text-5xl w-full leading-normal md:text-6xl">{t('slide5Title')}</h1>
                        <p className="text-zinc-800 w-full sm:text-lg text-sm">{t('slide5Description')}</p>
                    
                        <div className="flex w-full justify-start">
                        <SearchBox className="self-start" theme={"dark"}/>
                        </div>
                        <div className="flex w-full gap-5 justify-start flex-wrap">
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Custom Software</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Inventory Software</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Tally Addons</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Excel Addons</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Application</p>

                        </div>
                    
                    </div> <div>
                            <Image src={solutionImg} width={350} height={350} className="rounded-3xl shadow-xl" alt=""/>
                        </div>
                        
                    </CardContent>
                </Card>
                
            </CarouselItem>

            <CarouselItem >   
                <Card className="bg-red-100">
                    <CardContent className="flex flex-row  h-[60vh] w-full items-center justify-evenly p-6">
                    <div className="flex  flex-col gap-10 w-3/5 items-center justify-start">
                    <h1 className="text-black text-5xl w-full leading-normal md:text-6xl">{t('slide6Title')}</h1>
                        <p className="text-zinc-800 w-full sm:text-lg text-sm">{t('slide6Description')}</p>
                    
                        <div className="flex w-full justify-start">
                        <SearchBox className="self-start" theme={"dark"}/>
                        </div>
                        <div className="flex w-full gap-5 justify-start flex-wrap">
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 rounded-full  shadow-md">Reconciliation</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Inventory</p>
                            <p className="text-white px-3 py-2 text-xs bg-yellow-800 shadow-md rounded-full">Order Management</p>
                        </div>
                    
                    </div> <div>
                            <Image src={ecommImg} width={350} height={350} className="rounded-3xl shadow-xl" alt=""/>
                        </div>
                        
                    </CardContent>
                </Card>
                
            </CarouselItem>

            
       
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
      <div className="flex justify-center mt-4">

      <div className="flex space-x-2">
          {Array.from({ length: 6 }).map((_, index) => (
              <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`h-1 w-5 rounded-full p-0 ${
                current === index + 1 ? "bg-primary" : "bg-neutral-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                />
            ))}
        </div>
            </div>
    </Carousel>
    <Card className="bg-green-950 mt-12">
                    <CardContent className="flex flex-col sm:gap-8 gap-6 h-[60vh] w-full items-center justify-center p-3">
                    <h1 className="text-white text-[40px] sm:text-5xl  text-center leading-tight md:text-6xl">{t('slide1Title')}</h1>
                    <p className="text-zinc-300  sm:text-lg text-base leading-6 text-center">{t('slide1Description')}</p>
                    <SearchBox/>
                    <div className="md:flex gap-5 flex-wrap hidden">
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Criminal Lawyer</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Gst Registration</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Income Tax</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Trademark Registration</p>
                        <p className="text-black px-3 py-2 text-xs bg-white rounded-full opacity-70 shadow-md">Legal Notice</p>
                    </div>
                    </CardContent>
                </Card>
    </div>
  )
}

export default BigCarousel
