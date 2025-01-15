"use client"
import { CreditCardIcon, X } from "lucide-react";
import React, { useState } from "react";
export default function DashboardBanner(){
    const [hidden,setHidden]=useState(false);
    return(
        <div className={`${hidden?"hidden":"hidden lg:grid grid-cols-12 py-6 px-16 items-center bg-white gap-4 relative"}`}>
            
            {/* icon */}

          <div className="col-span-2">
            <CreditCardIcon className="w-16 h-16 text-slate-500"/>
          </div>

            {/* text */}

          <div className=" col-span-6">
            <h2 className="mb-2 font-bold text-2xl opacity-75">Start accepting online payments</h2>
            <p>Businesses are moving towards online payments 
                as they're easy,secure and fast.Try them 
                for your business today</p> 
          </div>

            {/* button */}

          <div className="ml-10 px-16 col-span-3">
            <button className="uppercase text-white px-8 py-1  
            rounded-lg bg-blue-400">Enable</button>
          </div>
            {/*  close button */}

            <button onClick={()=>setHidden(true)} className="absolute top-4 right-8"> <X className="w-5 h-5"/> </button>
        </div>
    ); 
}