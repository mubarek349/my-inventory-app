import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import React from "react";
import CollapsibleLink from "./CollapsibleLink";
import { ChevronRight } from "lucide-react";
export default function SideBarDropDowmLink({links,title,Icon}){
    return(
        <div>
           <Collapsible>
                <CollapsibleTrigger className="flex justify-between items-center w-full">
                    <div className="p-2 flex items-center 
                            space-x-2 ">
                        <Icon className="w-4 h-4"/>
                        <span>{title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4"/>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {
                        links.map((items,i)=>{
                            return(
                                <CollapsibleLink title={items.title} href={items.href} key={i} /> 
                            );
                        })
                    } 
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}