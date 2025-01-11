"use client"
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Diff, Factory, LayoutGrid, LayoutPanelTop, Scale, Slack, Warehouse } from "lucide-react";
import React from "react";
export default function Inventory(){
    const optionCards =[ 
        {
            title : "Items",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/items/new",
            linkTitle : "New Item",
            enabled : true,
            icon : LayoutGrid,
         },
         {
            title : "Categories",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/categories/new",
            linkTitle : "New Categories",
            enabled : true,
            icon : LayoutPanelTop,
         },
         {
            title : "Brands",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/brands/new",
            linkTitle : "New Brand",
            enabled : true,
            icon : Slack,
         },
         {
            title : "Warehouse",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/warehouse/new",
            linkTitle : "New Watehouse",
            enabled : true,
            icon : Warehouse,
         },
         {
            title : "Units",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/units/new",
            linkTitle : "New Unit",
            enabled : true,
            icon : Scale,
         },
         {
            title : "Suppliers",
            description : "Create standalone items and services that you buy and sell",
            link : "/dashboard/inventory/suppliers/new",
            linkTitle : "New Supplier",
            enabled : true,
            icon : Factory,
         },

         {
            title : "Inventory Adjustments",
            description : "Trnasfer Stock from the main warehouse   ",
            link : "/dashboard/inventory/adjustments/new",
            linkTitle : "New Adjustment",
            enabled : true,
            icon : Diff,
         },
         
    ];
    return(
        <div>
            <FixedHeader title="" newLink="/dashboard/inventory/items/new"/>
            <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2  py-8 px-16 gap-6">
                {
                    optionCards.map((items,i)=>{
                        return(
                          <OptionCard optionData={items} key={i}/> 
                        );
                    })
                }     
            </div>
        </div>
    );
}