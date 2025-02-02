"use client"
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function CollapsibleLink({title,href,setShowSideBar}){
    return(
        <Link onClick={()=>setShowSideBar(false)} href={href} className="flex items-center justify-between pl-8 pr-4 py-2 
        transition-all duration-300 rounded-md space-x-3 hover:bg-slate-900">
           <span className="text-sm">{title}</span>
           <PlusCircle className="w-4 h-4"/>
        </Link>
    );
}