import AllServices from "@/components/AllServices";
import BigCarousel from "@/components/BigCarousel";
import Connecting from "@/components/Connecting";
import CustomerReview from "@/components/CustomerReview";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Index from "@/components/Index";
import OurLegalAi from "@/components/OurLegalAi";
import Process from "@/components/Process";
import ServicesTabs from "@/components/ServicesTabs";
import TalkTo from "@/components/TalkTo";
import WhyUs from "@/components/WhyUs";
import Wrappers from "@/components/Wrappers";

export default function Home() {


  return (
   <main className="flex flex-col gap-20">
    <BigCarousel/>
    <Index/>
    <Connecting/>
    <ServicesTabs/>
    <Wrappers></Wrappers>
    <Process/>
    {/* <TalkTo/> */}
    <WhyUs/>
    <CustomerReview/>
    {/* <AllServices/> */}
    <OurLegalAi/>
    <Faqs/>
    <Footer/>

   </main>

  );
}
