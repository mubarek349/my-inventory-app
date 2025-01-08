import { Circle, Plus } from "lucide-react";
import React from "react";
export default function SubmitButton({isLoading,title}) {
  return (
    <div className="mt-6 sm:col-span-1">
    {isLoading?
        (
            <button disabled type="button" className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 
                dark:focus:ring-blue-800 inline-flex items-center ">
            <svg aria-hidden="false" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin"
             viewBox="0 0 100 101"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419
                    7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" 
                    fill="#E5E7EB" />
                <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419
                    7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" 
                    fill="currentColor" />
           </svg>
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





