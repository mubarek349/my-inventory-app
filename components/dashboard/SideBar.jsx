import { BaggageClaim, BarChart4, ChevronLeft,ChevronRight,CloudCog,FolderClosed,Home, ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import SideBarDropDowmLink from "./SideBarDropDownLink";

export default function SideBar() {
    const inventoryLinks=[
        {
          title : "Items",
          href : "/dashboard/inventory",
        },
        {
            title : "Categories",
            href : "/dashboard/inventory",
        },
        {
            title : "Brands",
            href : "/dashboard/inventory",
        },
        {
            title : "Units",
            href : "/dashboard/inventory",
        },
        {
            title : "Warehouse",
            href : "/dashboard/inventory",
        },
    
        {
          title : "Inventory Adjustment",
          href : "/dashboard/inventory",

        },
    ];
    const salesLinks=[
        {
          title : "Customers",
          href : "#",
        },
        {
            title : "Sales Orders",
            href : "#",
        },
        {
          title : "Packages",
          href : "#",

        },
        {
            title : "Shipments",
            href : "#",
        },
        {
        title : "invoices",
        href : "#",
        },
        {
            title : "Sales Receipts",
            href : "#",
        },
        {
            title : "Payments Receivid",
            href : "#",
        }, 
        {
            title : "Sales Returns",
            href : "#",
        }, 
        {
            title : "Credit Notes",
            href : "#",
        },
    ];

  return (
           <div className="w-60 bg-slate-800
            text-slate-50 sidebar h-screen overflow-y-auto fixed ">
                {/*top part */}
               <div className="flex flex-col">
                    {/*(logo part) */}
                   <Link href="/dashboard/home/overview" className="flex bg-slate-950 space-x-2
                   items-center py-4 px-2 fixed top-0 left-0 right-900 z-10 w-60">
                       <BaggageClaim /> 
                       <span className="font-semibold">Inventory</span>
                   </Link>
                    {/*links */}
                     <nav className="flex flex-col 
                     gap-4 p-3 mt-14">
                        <Link className="flex items-center 
                        space-x-2 bg-blue-600 text-slate-50
                        p-2 rounded-md" href="/dashboard/home">
                            <Home  className="w-4 h-4"/>
                            <span>Home</span>
                        </Link>
                        <SideBarDropDowmLink links={inventoryLinks} title="inventory" Icon={BaggageClaim} />
                        <SideBarDropDowmLink links={salesLinks} title="Sales" Icon={ShoppingCart} />
                        <button className="flex items-center justify-between w-full" >
                            <div className="p-2 flex items-center 
                        space-x-2">
                                <ShoppingBag  className="w-4 h-4"/>
                                <span>Purchases</span>
                            </div>
                            <ChevronRight className="w-4 h-4"/>
                        </button>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/integrations">
                            <CloudCog  className="w-4 h-4"/>
                            <span>Integrations</span>
                        </Link>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/reports">
                            <BarChart4 className="w-4 h-4"/>
                            <span>Reports</span>
                        </Link>
                        <Link className="p-2 flex items-center 
                        space-x-2" href="/dashboard/documents">
                            <FolderClosed  className="w-4 h-4"/>
                            <span>Documents</span>
                        </Link>
                     </nav>
               </div>




                {/*bottom part */}
                <div className="flex flex-col justify-end items-center">
                    {/*subscription card */}
                    <div className="flex">
                       <SubscriptionCard />
                    </div>
                </div>
                    {/*footer icon*/}
                <div className="mt-4 flex flex-col
                ">
                    <button className="justify-center p-2 flex bg-slate-900 space-x-2
                    py-4 px-2">
                    <ChevronLeft /> 
                    </button>
                </div>
                    
                

            </div>
  );
}
