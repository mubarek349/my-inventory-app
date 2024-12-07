import React from "react";
export default function InventorySummaryCard({item}) {
  return (
    <div className="shadow rounded-lg border border-slate-200
         hover:border-blue-400 bg-white px-4 py-2 cursor-pointer 
         flex items-center justify-between m-4 transition-all duration-300">
        <span className="uppercase text-sm text-slate-500 opacity-50">{item.title}</span>
        <h4 className="text-2xl">{item.number}</h4>
   </div> 
  );   
}
