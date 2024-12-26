"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewCategories({isUpdate=false,initialData={}}){
    const router=useRouter();
    function redirect(){
        router.replace("/dashboard/inventory/categories");
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
          await makePutRequest(setLoading,`api/categories/${initialData.id}`,data,"Category",redirect,reset);
        }else{
          await makePostRequest(setLoading,"api/categories",data,"Category",reset);
        }
    }
    return(
        <div>
            {/* Header */}
            <FormHeader title={isUpdate?"Update Category":"New Category"} href="/dashboard/inventory/categories"/>
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
                   <SubmitButton isLoading={loading} title={isUpdate?"Updated Category":"New Category"}/>
                </form>
        
        </div>
    );
}