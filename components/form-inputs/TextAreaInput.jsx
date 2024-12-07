import { Plus } from "lucide-react";
import React from "react";
export default function TextAreaInput({label,name,isRequired=true,register,errors,className="sm:col-span-2"}) {
   return(
        <div className={className}>
            <label htmlFor={name} className="block text-sm 
            font-medium leading-6 text-gray-900 mb-2">
            {label}
            </label>
            <div className="mt-2">
                <textarea 
                {...register(`${name}`,{required:isRequired})}
                name={name}
                id={name}
                rows={3}
                className="block w-full rounded-md border-0 py-2 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                /> 
                {errors[`${name}`] && (
                    <span className="text-sm text-red-600">
                    {label} is required
                    </span>
                )}  
            </div>
        </div>
    );
}



