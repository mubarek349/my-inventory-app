import { HelpCircle, HelpCircleIcon, HelpingHand, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function FixedHeader({newLink}){
    return(
        <div className="py-5 px-4  flex justify-between items-center bg-white">
            <button>All items</button>
            <div className="flex gap-4">
                {/* New */}
                <Link href={newLink} className=" space-x-2 text-white flex
                 items-center bg-blue-600 rounded-md py-1 px-3">
                    <Plus className="w-4 h-4"/>
                    <span className="text-sm">New</span>
                </Link>
                {/* Layout */}
                <div className="flex items-center gap-2 ">
                    <div className="flex rounded-md overflow-hidden">
                        <button className="bg-gray-300 p-2 border-r border-slate-400">
                            <List className=" w-4 h-4"/>
                        </button>
                        <button className="bg-gray-100 p-2">
                            <LayoutGrid className="w-4 h-4"/>
                        </button>
                    </div>
                {/* More */}
                
                    <button className="bg-slate-100 p-2 rounded-md">
                        <MoreHorizontal className="w-4 h-4"/>
                    </button>
                {/* Help */}
                    <button className="bg-orange-400 p-2 rounded-md text-white ">
                        <HelpCircle className="w-4 h-6"/>
                    </button>
                </div>

            </div>
        </div>
    );
}