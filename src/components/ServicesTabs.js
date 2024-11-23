"use client"
import {React,useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Atom, MoveRight } from 'lucide-react'
import { Button } from './ui/button'


const tabContent = [
  {
    id: 1,
    name: 'Business Setup',
    tabs: [
      {
        id: 1, name: "Business Registration", description: "All Services related to business registration", services: [
          { name: "Private Limited Company", details: "Details about Private Limited Company." },
          { name: "Limited Liability Partnership", details: "Details about Limited Liability Partnership." },
          { name: "One Person Company", details: "Details about One Person Company." },
          { name: "Sole Proprietorship", details: "Details about Sole Proprietorship." },
          { name: "Nidhi Company", details: "Details about Nidhi Company." },
          { name: "Producer Company", details: "Details about Producer Company." },
          { name: "Partnership Firm", details: "Details about Partnership Firm." },
          { name: "Startup India Registration", details: "Details about Startup India Registration." }
        ]
      },
      {
        id: 2, name: "Company Name Search", description: "All Services related to company name", services: [
          { name: "Company Name Search", details: "Details about Company Name Search." },
          { name: "Change Company Name", details: "Details about Change Company Name." }
        ]
      },
      {
        id: 3, name: "Licenses & Registrations", description: "All Services related to licensing and registrations", services: [
          { name: "Digital Signature Certificate", details: "Details about Digital Signature Certificate." },
          { name: "Udyam Registration", details: "Details about Udyam Registration." },
          { name: "MSME Registration", details: "Details about MSME Registration." },
          { name: "ISO Certification", details: "Details about ISO Certification." },
          { name: "FSSAI License", details: "Details about FSSAI License." },
          { name: "Hallmark Registration", details: "Details about Hallmark Registration." }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Tax & Compliance",
    tabs: [
      {
        id: 4, name: "Gst & Other Tax", description: "All Services related to taxes and gst", services: [
          { name: "Gst Registrations", details: "Details about Gst Registrations." },
          { name: "Gst Filing", details: "Details about Gst Filing." },
          { name: "Gst Login Portal", details: "Details about Gst Login Portal." },
          { name: "HSN Code Finder", details: "Details about HSN Code Finder." },
          { name: "Gst Cancellation & Revocation", details: "Details about Gst Cancellation & Revocation." },
          { name: "Indirect Tax", details: "Details about Indirect Tax." },
          { name: "RoDTEP", details: "Details about RoDTEP." }
        ]
      },
      {
        id: 5, name: "Pvt Ltd Company", description: "All Services related to Changes in Pvt Ltd Company", services: [
          { name: "Add a Director", details: "Details about Add a Director." },
          { name: "Remove a Director", details: "Details about Remove a Director." },
          { name: "Gst Login Portal", details: "Details about Gst Login Portal." },
          { name: "HSN Code Finder", details: "Details about HSN Code Finder." },
          { name: "Gst Cancellation & Revocation", details: "Details about Gst Cancellation & Revocation." },
          { name: "Indirect Tax", details: "Details about Indirect Tax." },
          { name: "RoDTEP", details: "Details about RoDTEP." }
        ]
      }
    ]
  }
]


const ServicesTabs = () => {
    const [selectedElement, setSelectedElement] = useState(tabContent[0].tabs[0]);
  
  return (
    <div className=" mx-auto ">
      
        <h1 className="text-center md:text-5xl text-3xl font-bold">Services We Offers</h1>
        <Tabs defaultValue="Business Setup" className="xl:w-[80vw] xl:mx-0 sm:mx-10 mx-2 md:mt-16 mt-10">
        <TabsList className="flex items-start justify-start xl:w-[65vw] mx-auto p-1 h-auto rounded-full  dark bg-white border-2  border-neutral-200 shadow-sm text-neutral-400">
          {tabContent.map((category,i)=>(
            <TabsTrigger
            key={category.id}
            value={category.name}
            className="py-2.5 px-4 rounded-full"
            onClick={()=>setSelectedElement(tabContent[i].tabs[0])}
          >
            {category.name}
          </TabsTrigger>
          ))}
          
      </TabsList>
      <div className="mt-8 relative ">
      <div className="absolute h-[30vmin] blur-[80px] bottom-0 end-0 w-[30vmin] bg-pink-400     rounded-full"></div>
      <div className="absolute h-[30vmin] blur-[80px] top-0 w-[30vmin] bg-indigo-400   rounded-full"></div>
      <div className="absolute h-[50vmin] blur-[100px]  bottom-0 top-[30%] left-[40%]  w-[50vmin] bg-amber-400  rounded-full"></div>

        {tabContent.map((tab)=>(
          <TabsContent value={tab.name} key={tab.id}>
          <Card className="bg-white relative z-10  border-4 border-white  bg-opacity-5   shadow-sm  rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl px-3">{tab.name}</CardTitle>
              <CardContent className="p-0 ">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5" >
              <div className=" bg-white bg-opacity-50 p-4 rounded-3xl md:col-span-1 space-y-4">
                {tab.tabs.map((element) => (
                  <div
                    key={element.id}
                    
                  >
                    <Card 
                      className={`cursor-pointer transition-all border-2 rounded-full  ${
                        selectedElement?.id === element.id 
                          ? 'bg-black text-white  border-black ring-primary shadow-lg' 
                          : 'hover:shadow-md hover:bg-opacity-90 bg-white bg-opacity-30  border-white'
                      } `}
                      onClick={() => setSelectedElement(element)}
                    >
                      <CardHeader className="px-4 py-2 flex flex-row justify-between items-center">
                          <div>
  
                          <CardTitle className="text-base">{element.name}</CardTitle>
                          {/* <CardDescription>{element.description}</CardDescription> */}
                          </div>
                          <div className="lg:rotate-0 rotate-90">
                            <MoveRight />
                          </div>
                      </CardHeader>
                    </Card>
                  
                  </div>
                ))}
              </div>
              <div className="md:col-span-3">
                <div>
                  
                    
                      <Card className="rounded-3xl border-none  shadow-none bg-white bg-opacity-50">
                      <CardHeader className="mb-5">
                          
                            <CardTitle className="text-2xl">{selectedElement.name}</CardTitle>
                            {/* <CardDescription className="text-base mt-2">{.description}</CardDescription> */}
                        
                      </CardHeader>
                      <CardContent className="max-h-[70vh] h-[70vh] overflow-y-auto">
                    
                      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {selectedElement.services.map((item,index)=>(

                          <Card className="rounded-3xl border-white border-2 bg-white bg-opacity-30 " key={index}>
                              <CardHeader className="pb-3">
                              
                                  <CardTitle className="text-lg">{item.name}</CardTitle>
                                  <CardDescription className="text-sm">{item.description}</CardDescription>
                                  
                             </CardHeader>
                              <CardContent className="pb-3">
                              </CardContent>
                              <CardFooter >
                                  <Button className="w-full bg-opacity-80 flex justify-between rounded-full">
                                      Learn More
                                      <MoveRight/>
                                  </Button>
                              </CardFooter>
                          </Card>
                          
                        ))}
  
                      </div>
                      </CardContent>
                    </Card>
                
                </div>
              </div>
              
            </div>
              </CardContent>
            </CardHeader>
            
            
          </Card>
        </TabsContent>
        ))}
       

       
        
      
      

     
      
      </div>
    </Tabs>
    </div>

  )
}

export default ServicesTabs
