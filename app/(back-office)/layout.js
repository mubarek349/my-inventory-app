"use client"
import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";
export default function Layout({children}){
    const [showSideBar,setShowSideBar]=useState(false);
    return(
        <div className="flex">
            <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <main className="lg:ml-60 ml-0 w-full bg-slate-100 min-h-screen">
                <Header setShowSideBar={setShowSideBar}/>
                {children}
            </main>
        </div>
    );
}
