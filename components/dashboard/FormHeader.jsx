import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function FormHeader({title,href}){
    return(
        <div className="flex items-center justify-between 
        py-3 px-16 bg-white">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Link href={href} >
            <X className="w-6 h-6"/>
            </Link>
        </div>
    );
}