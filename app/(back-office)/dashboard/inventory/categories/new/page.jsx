"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import {React, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function NewCategories(){
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
        const baseUrl="https://my-inventory-app-git-main-mubarek-ahmeds-projects.vercel.app"
        try {
            const response=await fetch(`${baseUrl}/api/categories`,
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
                    toast.success('New Category Created Successfully!');
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
            <FormHeader title="New Categories" href="/dashboard/inventory/"/>
            {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                    border border-gray-200 rounded-lg 
                    shadow sm:p-6 md:p-8 dark:bg-gray-800 
                    dark:border-gray-700 my-3">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                       <TextInput label="category Title"
                       name="title"
                       register={register}
                       errors={errors}
                       />
                       <TextAreaInput label="category Description"
                       name="description"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />
                    </div>
                   <SubmitButton isloading={loading} title="Category"/>
                </form>
        
        </div>
    );
}