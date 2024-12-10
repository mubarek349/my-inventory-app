import { Circle, Plus } from "lucide-react";
import React from "react";
export default function SubmitButton({isloading,title}) {
  return (
    <div className="mt-6 sm:col-span-1">
    {isloading?
        (
            <button disabled type="button" className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800 inline-flex items-center ">
                    <Circle className="w-5 h-5 mr-2"/>
                    Saving {title} Please Wait...
            </button>
        ):
        (
            <button type="submit" className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800 inline-flex items-center">
                <Plus className="w-5 h-5 mr-2"/>
                <span>Save {title}</span>
            </button>
        )
    }
    
    </div>
  );
}

