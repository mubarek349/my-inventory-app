"use client"
import SelectInput from "@/components/form-inputs/SelectInput";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function AddInventoryForm({items,warehouses}){
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors }, 
        } = useForm();
    const [loading,setLoading]=useState(false);

    async function onSubmit(data){
        console.log(data)
        makePostRequest(setLoading,"api/adjustments/add",data,"Stock Adjustment",reset);
    }
    return(
        <div>
            
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                border border-gray-200 rounded-lg 
                shadow sm:p-6 md:p-8 dark:bg-gray-800   
                dark:border-gray-700 my-3">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                   <TextInput label="Reference Number"
                        name="referenceNumber"
                        type="number"
                        register={register}
                        errors={errors}
                        className="w-full"
                   />
                   <SelectInput label="Select the Item"
                        name="itemId"
                        register={register}
                        className="w-full"
                        options={items}
                   />
                   <TextInput label="Enter Quantity of stock to Add"
                        name="addStockQty"
                        type="number"
                        register={register}
                        min={1}
                        mesg="and can not be less than 1"
                        errors={errors}
                        className="w-full"
                   />
                   
                   <SelectInput label="Select the Warehouse that will receive the stock"
                        name="warehouseId"
                        register={register}
                        className="w-full"
                        options={warehouses}
                   />
                   <TextAreaInput label="Adjustment Notes"
                        name="notes"
                        register={register}
                        isRequired = {false}
                        errors={errors}
                   />                     
                </div>
               <SubmitButton isloading={loading} title="Adjustment"/>
            </form>
    
        </div>
    );
}