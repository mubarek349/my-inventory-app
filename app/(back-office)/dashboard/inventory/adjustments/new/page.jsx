"use client"
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import {React } from "react";
export default function NewAdjustments(){

    return(
        <div>
            {/* Header */}
            <FormHeader title="New Adjustments" href="/dashboard/inventory/"/>
            {/*  TransferInventoryForm  */}
            <TransferInventoryForm/> 
    
        </div>
    );
}