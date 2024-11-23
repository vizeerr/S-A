import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"

export function SearchBox({ theme }) {
  return (
    <div className={`w-[260px] h-[5vh] sm:h-[5.3vh] 3xl:h-[7vh]  sm:w-[350px] lg:w-[450px] flex items-center pe-3 rounded-full border-2 shadow-md ${theme === "dark" ? "bg-white bg-opacity-15 border-yellow-800" : "bg-white bg-opacity-15 text-white border-gray-300"}`}>
      {/* <input type="text" className="border-0 text-white text-sm bg-transparent w-full rounded-full" placeholder="Serach Here"/> */}
      <Input type="text" placeholder="Search Here" className="border-0 rounded-full h-[5vh]"/>
      <Search className={theme === "dark" ?"text-yellow-800": "text-white"} size={18} />
    </div>
   
  );
}
