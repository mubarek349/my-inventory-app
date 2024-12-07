import Link from "next/link";
import React from "react";
export default function SubscriptionCard() {
  return (
        <div className="px-1 py-3 rounded-lg p-3 m-1 mt-8 bg-slate-900">
            <div className="border-b border-slate-600 pb-3">
                <p className="text-sm border-l-2 border-orange-400 pl-2">Your premium plan's trial expires in {" "}
                    <span className="text-orange-400 ">13 days</span>.
                </p>
            </div>
            <div className="text-sm  flex">
                <button className="p-1 border-r border-slate-600">
                    Change Plan
                </button>
                <Link href="#" className="p-1">
                    Upgrade
                </Link>
            </div> 
        </div>
  );
}
