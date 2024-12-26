import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxId,notes}=await request.json();
        const supplier=await db.supplier.create({data:{title,phone,email,address,contactPerson,supplierCode,paymentTerms,taxId,notes},},);
        console.log(supplier);
        return NextResponse.json(supplier);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a supplier"
            },
            {
                status:500
            });
    }
    
}

export async function GET(){
    try {
        const suppliers = await db.supplier.findMany({
            orderBy:{
                createdAt : 'desc' // latest supplier
            },
        });
        return NextResponse.json(suppliers);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch a supplier"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deletesupplier= await db.supplier.delete({
            where:{
                id  
            },
        });
        console.log(deletesupplier);
        return NextResponse.json(deletesupplier);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete supplier"
            },
            {
                status:500
            });
    }
}