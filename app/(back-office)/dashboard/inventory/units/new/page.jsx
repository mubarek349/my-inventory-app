"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextInput from "@/components/form-inputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewUnit({isUpdate=false,initialData={}}){
    const router=useRouter();
    function redirect(){
        router.replace("/dashboard/inventory/units");
    }
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
        } = useForm({
            defaultValues:initialData
        });
    const [loading,setLoading]=useState(false);
    async function onSubmit(data){
        console.log(data)
        if (isUpdate){
          await makePutRequest(setLoading,`api/units/${initialData.id}`,data,"Unit",redirect,reset);
        }else{
          await makePostRequest(setLoading,"api/units",data,"Unit",reset);
        }
    }
    return(
        <div>
            {/* Header */}
            <FormHeader title={isUpdate?"Update Unit":"New Unit"} href="/dashboard/inventory/units"/>
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
                   <SubmitButton isLoading={loading} title={isUpdate?"Updated Unit":"New Unit"}/>
                </form>
        
        </div>
    );
}