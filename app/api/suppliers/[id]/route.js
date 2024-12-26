import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const supplier = await db.supplier.findUnique({
            where:{
                id // selected supplier
            },
        });
        return NextResponse.json(supplier);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the supplier"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params}){
    try {
        const { id } = await params;
        const {title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxId,notes}=await request.json();
        const supplier = await db.supplier.update({
            where:{
                id // selected supplier
            },
            data:{
                title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxId,notes
            }
        });
        return NextResponse.json(supplier);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to update the supplier"
            },
            {
                status:500
            });
    }
}