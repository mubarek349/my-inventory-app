import { Bell, History, Plus, Settings,Users,ChevronDown,LayoutGrid } from "lucide-react";
import React from "react";
import SearchInput from "@/components/dashboard/SearchInput";
export default function Header() {
  return (
    <div className="flex bg-gray-100 h-12 
    justify-between items-center px-8 border-b 
    border-slate-200 " >
       <div className="flex gap-3">
        {/*recent activities*/}
        <button>
          <History className="w-6 h-6"/>
        </button>
        {/*search*/}
        <SearchInput />
       </div>
       <div className="flex items-center gap-3">
           {/*plus icon*/}
           <div className="pr-2 border-r border-gray-300">

              <button className="p-1 rounded-lg bg-blue-600">
                  <Plus className="text-slate-50 w-4 h-4"/>
              </button>

           </div>
           {/*Users,bell and settings*/}
           <div className="flex border-r border-gray-300 space-x-2">
              
              <button className="p-1 rounded-lg hover:bg-slate-200">
                  <Users className="text-slate-900 w-4 h-4"/>
              </button>
           
              <button className="p-1 rounded-lg hover:bg-slate-200">
                  <Bell className="text-slate-900 w-4 h-4"/>
              </button>
           
              <button className="p-1 rounded-lg hover:bg-slate-200">
                  <Settings className="text-slate-900 w-4 h-4"/>
              </button>
           </div>
            
           {/*other activities*/}
           <div className="flex gap-6 items-center">
              
              <button className="flex ">
                 <span>Grant</span>
                 <ChevronDown className="w-4 h-4"/>
              </button> 
              <button className="flex">
                  <img 
                  src="https://res.cloudinary.com/diiq04gvo/image/upload/v1730273494/all.jpg"
                  alt="user image" width={96}
                   height={96} className="rounded-full w-9 h-9 
                   border border-slate-900"
                   />
              </button>
           
              <button className="flex ">
                  <LayoutGrid className="w-6 h-6 text-slate-900"/>
              </button>
           </div>
       </div>
    </div>
  );
}
