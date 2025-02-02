"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function NewSupplier({isUpdate=false,initialData={}}){
    const router=useRouter();
    function redirect(){
        router.replace("/dashboard/inventory/suppliers");
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
          await makePutRequest(setLoading,`api/suppliers/${initialData.id}`,data,"Supplier",redirect,reset);
        }else{
          await makePostRequest(setLoading,"api/suppliers",data,"Supplier",reset);
        }
    }
    return(
        <div>
            {/* Header */}
            <FormHeader title={isUpdate?"Update Supplier":"New Supplier"} href="/dashboard/inventory/suppliers"/>
            {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                    border border-gray-200 rounded-lg 
                    shadow sm:p-6 md:p-8 dark:bg-gray-800 
                    dark:border-gray-700 my-3">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                       <TextInput 
                       label="Supplier Name"
                       name="title"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput 
                       label="Supplier Phone"
                       name="phone"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput 
                       label="Supplier Email"
                       name="email"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       type="email"
                       className="w-full"
                       />
                       <TextInput
                       label="Supplier Address"
                       name="address"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       className="w-full"
                       /> 
                       <TextInput 
                       label="Supplier Contact Person"
                       name="contactPerson"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput 
                       label="Supplier Code"
                       name="supplierCode"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput 
                       label="Supplier TIN"
                       name="taxId"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       className="w-full"
                       />
                       <TextAreaInput
                       label="Supplier Payment Terms"
                       name="paymentTerms"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />
                       <TextAreaInput 
                       label="Notes"
                       name="notes"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />                     
                    </div>
                   <SubmitButton isLoading={loading} title={isUpdate?"Updated Supplier":"New Supplier"}/>
                </form>
        
        </div>
    );
}