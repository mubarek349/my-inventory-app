import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {title,location,description,type}=await request.json();
        const warehouse=await db.warehouse.create({data:{title,location,description,warehouseType:type},},);
        console.log(warehouse);
        return NextResponse.json(warehouse);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a Warehouse"
            },
            {
                status:500
            });
    }
    
}


export async function GET() {

    try {
        const warehouses = await db.warehouse.findMany({
            orderBy:{
                createdAt : 'desc' // latest warehouse
            },
        });
        return NextResponse.json(warehouses);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch a Warehouse"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deletewarehouse= await db.warehouse.delete({
            where:{
                id  
            },
        });
        console.log(deletewarehouse);
        return NextResponse.json(deletewarehouse);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete warehouse"
            },
            {
                status:500
            });
    }
}