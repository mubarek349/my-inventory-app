"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/form-inputs/SelectInput";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewWarehouse(){
    const selectOptions=[
        {
            id : "Branch",
            name : "Branch"
        },
        {
            id : "Main",
            name : "Main"
        }
        
    ]
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
        } = useForm();
    const [loading,setLoading]=useState(false);

    async function onSubmit(data){
        console.log(data)
        makePostRequest(setLoading,"api/warehouse",data,"Warehouse",reset);
    }
    return(
        <div>
            {/* Header */}
            <FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse"/>
            {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                    border border-gray-200 rounded-lg 
                    shadow sm:p-6 md:p-8 dark:bg-gray-800 
                    dark:border-gray-700 my-3">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                       <SelectInput label="Select the Warehouse Type"
                       name="type"
                       register={register}
                       className="w-full"
                       options={selectOptions}
                       />
                       <TextInput label="Warehouse Title"
                       name="title"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput label="Warehouse Location"
                       name="location"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />
                       <TextAreaInput label="Warehouse Description"
                       name="description"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />                     
                    </div>
                   <SubmitButton isloading={loading} title="Warehouse"/>
                </form>
        
        </div>
    );
}