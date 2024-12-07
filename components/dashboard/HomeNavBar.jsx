"use client"
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function HomeNavBar() {
    const pathname=usePathname();
    console.log(pathname);
    const navLinks=[
        {
           title : "Dashboard",
           href : "/dashboard/home/overview"
        },
        {
            title : "Getting Started",
            href : "/dashboard/home/getstarted"
         },
         {
            title : "Updates",
            href : "/dashboard/home/updates"
         },
         {
            title : "Announcements",
            href : "/dashboard/home/announcements"
         }
    ];
  return (
    <div className="h-32 p-5  border-b-3 border-black-800">
        <div className="flex space-x-3 ">
            <div className="flex rounded-lg bg-white w-12 h-12 items-center  justify-center">
               <Building2/>
            </div>
            <div className="flex flex-col">
               <p className="text-slate-700 font-semibold">Hello, MUBAREK WEBDEVELOPER</p>
               <span className="text-sm">Garat</span>
            </div>
        </div>
        <nav className=" mt-6 space-x-4 flex">
           {navLinks.map((item,i)=>{
            return(
                <Link
                    key={i}  
                    href={item.href}
                    className={`${ pathname===item.href ? "py-1 border-b-2 border-blue-700":"py-1"}`} 
                    >
                    {item.title}
               </Link>
            );
           })}
        </nav>
    </div>
  );
}
