import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Faqs = () => {
  return (
    <div className='bg-zinc-100'>
        <div className='lg:w-[70vw] w-[90vw] mx-auto'>
        <h1  className="lg:text-6xl text-4xl pt-12 text-center leading-normal">Frequently Asked Questions?</h1>

        <Accordion type="single" collapsible className='my-10 flex flex-col gap-3'>
            <AccordionItem  className=" bg-white   px-5 rounded-xl" value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem  className=" bg-white   px-5 rounded-xl" value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            
        </Accordion>
        </div>

      
    </div>
  )
}

export default Faqs
