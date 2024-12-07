"use client"
import Link from "next/link";
import React from "react";
export default function OptionCard({optionData}){
    const {title,icon:Icon,description,enabled,link,linkTitle}=optionData;

    return(
        <div className="shadow-md bg-white flex flex-col items-center
        justify-center gap-4 p-6 rounded">
             <h2 className="text-xl font-semibold">{title}</h2>
             <div>
                <Icon strokeWidth="0.5px" className="w-32 h-32"/>
             </div>
             <p className="line-clamp-1">{description}</p>
             {enabled ? 
                (
                    <Link href={link} className="py-2 rounded-sm bg-blue-600 px-3 inline-flex 
                    items-center space-x-2 text-white">
                {linkTitle}
                </Link>
                ) : 
                (
                    <button className="py-2 rounded-sm bg-blue-600 px-3 inline-flex 
                    items-center space-x-2 text-white">
                        Enable
                    </button>
                )
            }
        </div>
    );
}