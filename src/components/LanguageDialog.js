"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

import { Button } from "./ui/button"
import { getUserLocale, setUserLocale } from "@/i18n/getUserLocale"
import toast from "react-hot-toast"
import { useEffect } from "react"

const LanguageDialog = ({open,setOpen,setLanguage}) => {
  
  const setLocale = async (locale)=>{
    const request = await setUserLocale(locale);
    if(request){
      setOpen(false)
      setLanguage(`${locale=="en" ?"English":"हिन्दी"} `)
      toast.success(`${locale=="en" ?'Language Changed':'भाषा बदल दी गई'}`)
    }
  }

  const getLocale = async ()=>{
    const request = await getUserLocale()
    if(request){
      setLanguage(`${request=="en" ?"English":"हिन्दी"}`)
    }else{
      setOpen(true)
    }
  }
  
  useEffect(()=>{
    getLocale();
  },[]);

  return (
    <div className="">

      <Dialog open={open} onOpenChange={setOpen}  className="" >
        
        <DialogContent className=" backdrop-blur-0 shadow-md">
            <DialogHeader>
            <DialogTitle className="text-3xl   text-center leading-relaxed">
              <h1>
                Choose Language ! भाषा चुने !
              </h1>
            </DialogTitle>
            <DialogDescription className="text-center text-sm py-4   text-neutral-700">
              <p className=" border-t pt-4 border-neutral-400 leading-[35px]">
              You can choose the language in which you prefer to view the content. <br/>
              आप अपने अनुसार भाषा का चयन कर सकते हैं जिसमें आप कंटेंट देखना चाहते हैं।
              </p>
            </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-5 px-7">
              <Button onClick={()=>{setLocale('hi')}} className="h-[5vh] rounded-full bg-amber-500">हिन्दी</Button>
              <Button onClick={()=>{setLocale('en')}} className="h-[5vh] rounded-full ">English</Button>
            </div>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default LanguageDialog
  