import React from "react";
export default function TextInput({label,name,isRequired=true,min=0,register,errors,type="text",className="sm:col-span-2",defaultValue="",mesg=""}){
    return(
        <div className={className}>
            <label htmlFor={name} className="block text-sm 
            font-medium leading-6 text-gray-900 mb-2">
            {label}
            </label>
            <div className="mt-2">
                <input 
                
                {...register(`${name}`,{required:isRequired,min:min})}
                type={type} 
                name={name}
                id={name}
                defaultValue={defaultValue}
                autoComplete={name}
                className="block w-full rounded-md border-0 py-2 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder={`Type The ${label}`}
                /> 
                {errors[`${name}`] && (
                    <span className="text-sm text-red-600">
                    {label} field is required {mesg}
                    </span>
                )}  
            </div>
        </div>
    );
}