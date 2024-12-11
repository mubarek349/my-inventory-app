"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextInput from "@/components/form-inputs/TextInput";
import {React, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function NewUnit(){
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
        } = useForm();
    const [loading,setLoading]=useState(false);
    async function onSubmit(data){
        console.log(data)
        setLoading(true);
        const baseUrl="https://my-inventory-app-ten.vercel.app"
        try {
            const response=await fetch(`${baseUrl}/api/units`,
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
                    toast.success("New Unit Created Successfully!");
                    reset();
                }
        } catch (error) {
            setLoading(false);
            console.log(error);
            
        }
        
    }
    return(
        <div>
            {/* Header */}
            <FormHeader title="New Unit" href="/dashboard/inventory/"/>
            {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                    border border-gray-200 rounded-lg 
                    shadow sm:p-6 md:p-8 dark:bg-gray-800 
                    dark:border-gray-700 my-3">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                       <TextInput label="Unit Title"
                       name="title"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput label="Unit Abbreviation"
                       name="abbreviation"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />                       
                    </div>
                   <SubmitButton isloading={loading} title="Unit"/>
                </form>
        
        </div>
    );
}