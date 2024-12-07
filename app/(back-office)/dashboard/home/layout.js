import HomeNavBar from "@/components/dashboard/HomeNavBar";
import React from "react";
export default function Layout({children}){
    return(
        <div className="bg-black-800">
            <HomeNavBar/>
            <div>
               {children} 
            </div>
        </div>
    );
}