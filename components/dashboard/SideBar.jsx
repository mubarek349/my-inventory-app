import { BaggageClaim, BarChart4, ChevronLeft,ChevronRight,CloudCog,FolderClosed,Home, ShoppingBag, ShoppingCart, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import SideBarDropDowmLink from "./SideBarDropDownLink";

export default function SideBar({showSideBar,setShowSideBar}) {
    console.log(showSideBar);
    const inventoryLinks=[
        {
          title : "All",
          href : "/dashboard/inventory",
        },
        {
            title : "Items",
            href : "/dashboard/inventory/items",
        },
        {
            title : "Categories",
            href : "/dashboard/inventory/categories",
        },
        {
            title : "Brands",
            href : "/dashboard/inventory/brands",
        },
        {
            title : "Units",
            href : "/dashboard/inventory/units",
        },
        {
            title : "Warehouse",
            href : "/dashboard/inventory/warehouse",
        },
    
        {
          title : "Inventory Adjustment",
          href : "/dashboard/inventory/adjustments",

        },
        {
            title : "Supplier",
            href : "/dashboard/inventory/suppliers",
  
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
           <div className={`${showSideBar ? "w-60 min-h-screen bg-slate-800 text-slate-50 fixed  lg:block z-50"
                                          : "w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"}`}>
                {/*top part sidebar  overflow-y-auto fixed z-50 */}
               <div className="flex flex-col">
                    {/*(logo part) */}
                    <div className="flex justify-between">
                        <Link href="/dashboard/home/overview" className="flex bg-slate-950 space-x-2
                        items-center py-3 px-2 w-full">
                            <BaggageClaim /> 
                            <span className="font-semibold">Inventory</span>
                        </Link>
                        <button className="bg-slate-950 px-4 py-3 lg:hidden" onClick={()=>setShowSideBar(false)}>
                            <X className="w-6 h-6 text-white"/>
                        </button>
                   </div>
                    {/*links */}
                     <nav className="flex flex-col 
                     gap-4 p-3 mt-4">
                        <Link className="flex items-center 
                        space-x-2 bg-blue-600 text-slate-50
                        p-2 rounded-md" href="/dashboard/home">
                            <Home  className="w-4 h-4"/>
                            <span>Home</span>
                        </Link>
                        <SideBarDropDowmLink links={inventoryLinks} title="inventory" Icon={BaggageClaim} setShowSideBar={setShowSideBar} />
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
