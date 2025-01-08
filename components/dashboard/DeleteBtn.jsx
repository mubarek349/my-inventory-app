"use client";
import { CloudCog, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteBtn({ id, endpoint  }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const router = useRouter();
  const [loading,setLoading]=useState(false);
  async function handleDelete() {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          const res = await fetch(`${baseUrl}/api/${endpoint}?id=${id}`, {
            method: "DELETE",
          });

          if (!res.ok) {
            setLoading(false);
            throw new Error(`Failed to delete: ${res.statusText}`);
          }

          console.log(res);
          setLoading(false);
          toast.success("Deleted Successfully");

          // Ensure refresh works after the operation
          router.refresh();
        } catch (error) {
          console.error("Error deleting resource:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the resource.",
            icon: "error",
          });
        }
      }else{
        setLoading(false);
      }
    });
  }

  return (
    <>
    {loading?
      (
          <button disabled type="button" className="text-white bg-red-700 
              hover:bg-red-800 focus:ring-4 focus:outline-none 
              focus:ring-red-300 font-medium rounded-lg text-sm px-5 
              py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 
              dark:focus:ring-red-800 inline-flex items-center ">
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
         Deleting Please Wait...     
          </button>
      ):
      (
        <button
        onClick={handleDelete}
        className="flex items-center space-x-1 font-medium text-red-600 dark:text-red-500"
      >
        <Trash2 className="w-4 h-4" />
        <span>Delete</span>
      </button>
      )
  }
  </>
    
  );
}
