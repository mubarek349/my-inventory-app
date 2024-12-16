import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function ImageInput({label,imageUrl="",setImageUrl,endpoint="imageUploader",className="col-span-full"}){
    return(
        <div className={className}>
        <div className="flex justify-between items-center mb-4">
             <label htmlFor="item-image"
             className="block text-sm font-medium leading-6 text-gray-900">
               {label}
             </label>
             {imageUrl && (
                 <button
                 onClick={()=>setImageUrl("")}
                 type="button"
                 className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
                 >
                    <Pencil className="w-5 h-5"/>
                    <span>Change Image</span>
                 </button>
             )}
        </div> 
        {imageUrl ? 
              (<Image 
                src={imageUrl}
                alt="item image"
                width={1000}
                height={667}
                className="w-full h-64 object-cover"
              />) : 
            (
              <UploadDropzone
                endpoint={endpoint}
                onClientUploadComplete={(res) => {
                // Do something with the response
                setImageUrl(res[0].appUrl)
                console.log("Files: ",res[0].appUrl);
                console.log("Upload Completed");
                }}
                onUploadError={(error) => {
                // Do something with the error.
                console.log(`ERROR! ${error.message}`);
                }}
         />
        )}
    </div>
    );
}