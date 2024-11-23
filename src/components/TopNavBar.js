"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon, Languages, Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { useState } from "react"
import LanguageDialog from "./LanguageDialog"  
  

export default function TopNavBar() {
  const [openLanguageModel, setLanguageModel] = useState(false);
  const [language, setLanguage] = useState('English');
  

    
  return (
    <header className="flex sticky  top-5 z-40 justify-center items-center ">
      <div className="flex bg-white border-4 border-white bg-opacity-50 backdrop-blur-md h-20 shadow-lg w-[90vw] rounded-2xl shrink-0 items-center px-4 md:px-6">
        {/* navbar logo */}

      <Link href="#" className="mr-6 flex gap-2" prefetch={false} >
        {/* <MountainIcon className="h-6 w-6" /> */}
        <p className="font-semibold text-lg">LegalBuddy</p>
      </Link>
      
      <div className="flex  justify-center">

        {/* top navbar */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group bg-transparent inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group   grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Upgrade your reporting with advanced analytics.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group  grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Extend your application with our developer tools.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group  grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Security &amp; Compliance
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Keep your data secure with our security features.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group   grid h-auto w-full items-center justify-start gap-1 rounded-md  p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Scale your application with our infrastructure.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[550px] grid-cols-2 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Blog Posts</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Case Studies</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Read our customer case studies.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Documentation</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how to use our product.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Help Center</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get help with our product.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      
      </div>
     

      {/* navbar buttons */}
      <div className="ml-auto hidden lg:flex gap-2 items-center">
        <Button variant="outline" className="flex items-center gap-2" onClick={()=>{setLanguageModel(true)}}>
          <Languages size={15} />
          {language}
        </Button>
        <Button variant="outline" className="">Sign in</Button>
        <Button>Contact</Button>
      </div>

      {/* responsive navbar */}
      <div className="flex lg:hidden">
        <Sheet>
            <SheetTrigger className=""><Menu/></SheetTrigger>
        
            <SheetContent className="w-[290px] p-4 pt-8 flex flex-col gap-3">

            
            <Collapsible className="grid gap-4">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Pricing
                </Link>
                  <CollapsibleTrigger className="flex  items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                    Features <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className=" grid gap-6 bg-muted p-6">
                      <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                        <div className="text-sm font-medium leading-none group-hover:underline">Analytics</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Upgrade your reporting with advanced analytics.
                        </div>
                      </Link>
                      <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                        <div className="text-sm font-medium leading-none group-hover:underline">Developer Tools</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Extend your application with our developer tools.
                        </div>
                      </Link>
                      <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Security &amp; Compliance
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Keep your data secure with our security features.
                        </div>
                      </Link>
                      <Link href="#" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                        <div className="text-sm font-medium leading-none group-hover:underline">Scalability</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Scale your application with our infrastructure.
                        </div>
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Pricing
                </Link>
                
            </SheetContent>
        </Sheet>

        
      </div>
      
      <LanguageDialog open={openLanguageModel} setLanguage={setLanguage} setOpen={setLanguageModel}/>
    
      </div>
      </header>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}