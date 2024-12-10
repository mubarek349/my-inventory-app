"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/form-inputs/ImageInput";
import SelectInput from "@/components/form-inputs/SelectInput";
import SubmitButton from "@/components/form-inputs/SubmitButton";
import TextAreaInput from "@/components/form-inputs/TextAreaInput";
import TextInput from "@/components/form-inputs/TextInput";
import React,  {useState } from "react";
import { useForm } from "react-hook-form";
import { FALSE } from "sass";
export default function NewItem(){

    const [imageUrl,setImageUrl] = useState("");

    const categories=[
        {
            label : "Electronics",
            value : "ds"
        },
        {
            label : "Clothes",
            value : "dss"
        }
        ];
    const suppliers=[
        {
            label : "Supplier 1",
            value : "su"
        },
        {
            label : "Supplier 2",
            value : "suu"
        }
        ];
    const units=[
        {
            label : "Kg",
            value : "kg"
        },
        {
            label : "Pcs",
            value : "kgg"
        }
        
        ];
        const brands=[
            {
                label : "Hp",
                value : "hp"
            },
            {
                label : "Dell",
                value : "hpp"
            }
        ];
        const warehouses=[
            {
                label : "Warehouse A",
                value : "kkkkkkkkkkkkkk"
            },
            {
                label : "Warehouse B",
                value : "dsssssssssssssss"
            }
        ];     
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
        } = useForm();
    const [loading,setLoading]=useState(false);
    //onsubmit function
    async function onSubmit(data){
        data.imageUrl=imageUrl;
        console.log(data);
        setLoading(true);
        const baseUrl="http://localhost:3000"
        try {
            const response=await fetch(`${baseUrl}/api/items`,
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
                    toast.success("New Item Created Successfully!");
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
            <FormHeader title="New Item" href="/dashboard/inventory/"/>
            {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto p-4 bg-white
                    border border-gray-200 rounded-lg 
                    shadow sm:p-6 md:p-8 dark:bg-gray-800 
                    dark:border-gray-700 my-3">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                       
                       <TextInput label="Warehouse Title"
                       name="title"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <SelectInput label="Select the Item Category"
                       name="categoryId"
                       register={register}
                       className="w-full"
                       options={categories}
                       />
                       <TextInput label="Item SKU"
                       name="sku"
                       register={register}
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput label="Item Barcode"
                       name="barcode"
                       register={register}
                       errors={errors}
                       isRequired = {false}
                       className="w-full"
                       />
                       <TextInput label="Item Quantity"
                       name="quantity"
                       register={register}
                       min={1}
                       mesg="and can not be less than 1"
                       errors={errors}
                       className="w-full"
                       type="number"
                       /> 
                        <SelectInput label="Select the Item Unit"
                       name="unitId"
                       register={register}
                       className="w-full"
                       options={units}
                       />
                       <SelectInput label="Select the Item Brand"
                       name="brandId"
                       register={register}
                       className="w-full"
                       options={brands}
                       /> 
                       <SelectInput label="Select the Item Supplier"
                       name="supplierId"
                       register={register}
                       className="w-full"
                       options={suppliers}
                       /> 
                       <TextInput label="Buying Price"
                       name="buyingPrice"
                       type="number"
                       register={register}
                       min={0}
                       mesg="and can not be less than 0"
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput label="Selling Price"
                       name="sellingPrice"
                       type="number"
                       register={register}
                       min={0}
                       mesg="and can not be less than 0"
                       errors={errors}
                       className="w-full"
                       />
                       <TextInput label="Re-Order Point"
                       name="reOrderPoint"
                       type="number"
                       register={register}
                       min={1}
                       mesg="and can not be less than 1"
                       errors={errors}
                       className="w-full"
                       />
                       <SelectInput label="Select the Item Brand"
                       name="warehouseId"
                       register={register}
                       className="w-full"
                       options={warehouses}
                       /> 
                       <TextInput label="Item Weight in Kgs"
                       name="weight"
                       type="number"
                       register={register}
                       errors={errors}
                       isRequired = {false}
                       className="w-full"
                       /> 
                       <TextInput label="Item Dimensions in cm (20 x 30 x 100)"
                       name="dimensions"
                       register={register}
                       errors={errors}
                       isRequired = {false}
                       className="w-full"
                       />
                       <TextInput label="Item Tax Rate in %"
                       name="taxRate"
                       type="number"
                       register={register}
                       min={0}
                       mesg="and must be a number between 0 and 100."
                       errors={errors}
                       className="w-full"
                       />
                       <TextAreaInput label="Item Description"
                       name="description"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       />
                       <TextAreaInput label="Item Notes"
                       name="notes"
                       register={register}
                       isRequired = {false}
                       errors={errors}
                       /> 
                       <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader"/>
                       </div>
                   <SubmitButton isloading={loading} title="Item"/>
                </form>
        
        </div>
    );
}
