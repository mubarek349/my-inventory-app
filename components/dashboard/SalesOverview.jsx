import React from "react";
import InventorySummaryCard from "@/components/dashboard/InventorySummaryCard";
import SalesActivityCard from "@/components/dashboard/SalesActivityCard";
export default function SalesOverview(){
    const inventorySummary=[
        {
            title: "Quantity in Hand",
            number: 15 
        },
        {
            title: "Quantity to be received",
            number: 10 

        }
    ];
    const salesActivity=[
        {
           title : "To be Packed",
           number : 10,
           unit : "Qty",
           href : "#",
           color :"text-blue-600"
        },
        {
            title : "To be Shipped",
            number : 2,
            unit : "Pkgs",
            href : "#",
            color :"text-red-600"
         },
         {
            title : "To be Delivered",
            number : 5,
            unit : "Pkgs",
            href : "#",
            color :"text-green-600"
         },
         {
            title : "To be Invoiced",
            number : 8,
            unit : "Qty",
            href : "#",
            color :"text-orange-600"
        }
   ];
    return(
        <div className=" bg-blue-50 gap-4 border-b border-slate-300 grid grid-cols-12">
            {/*Sales Activity*/}
            <div className="col-span-full lg:col-span-8 border-slate-300 border-r p-8 py-16 lg:py-8 ">
               <h2 className="mb-6 text-xl">Sales Activity</h2>
               {/*Cards*/}
               <div className="pr-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    salesActivity.map((item,i)=>{
                        return(
                            <SalesActivityCard item={item} key={i}/>
                        )
                    })
                }
                    
                  </div>  
            </div>
            {/*Inventory Summary*/}

            <div className="col-span-full lg:col-span-4 p-8">
                <h2 className="mb-6 text-xl">Inventory Summary</h2>
                <div className="">
                   {
                    inventorySummary.map((item,i)=>{
                        return(
                            <InventorySummaryCard item={item} key={i}/>  
                        )
                    })
                   }   
                </div>
            </div>
               
        </div> 
    ); 
}