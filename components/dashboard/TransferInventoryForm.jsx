"use client"
import SelectInput from "@/components/form-inputs/SelectInput";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function TransferInventoryForm(){

     const selectOptions=[
        {
            label : "Branch A",
            value : "Branchdfj"
        },
        {
            label : "Branch B",
            value : "adlfkjredsklf"
        }
        
    ]
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors }, 
        } = useForm();
    const [loading,setLoading]=useState(false);
    async function onSubmit(data){
        console.log(data)
        setLoading(true);
        const baseUrl="http://localhost:3000"
        try {
            const response=await fetch(`${baseUrl}/api/adjustments`,
                {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
                });
                if(response.ok){
                    console.log(response);
                    setLoading(false);
                    reset();
                }
        } catch (error) {
            setLoading(false);
            console.log(error);
            
        }
        
    }
    return(
        <div>
            
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                border border-gray-200 rounded-lg 
                shadow sm:p-6 md:p-8 dark:bg-gray-800 
                dark:border-gray-700 my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                   <TextInput label="Enter amount of stock to transfer"
                        name="transferStockQty"
                        type="number"
                        register={register}
                        errors={errors}
                        className="w-full"
                   />
                   <SelectInput label="Select the branch that will receive the stock"
                        name="receivingBranchId"
                        register={register}
                        className="w-full"
                        options={selectOptions}
                   />
                   <TextAreaInput label="Adjustment Notes"
                        name="notes"
                        register={register}
                        errors={errors}
                   />                     
                </div>
               <SubmitButton isloading={loading} title="Adjustment"/>
            </form>
    
        </div>
    );
}