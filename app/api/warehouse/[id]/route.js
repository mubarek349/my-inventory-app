import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const warehouse = await db.warehouse.findUnique({
            where:{
                id // selected warehouse
            },
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the warehouse"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params}){
    try {
        const { id } = await params;
        const {title,location,description,type}=await request.json();
        const warehouse = await db.warehouse.update({
            where:{
                id // selected warehouse
            },
            data:{
                title,location,description,type
            }
        });
        return NextResponse.json(warehouse);
    } catch (error) {
        console.error("Error updating warehouse",error);
        return NextResponse.json(
            {
                error,
                message:"Failed to update the warehouse"
            },
            {
                status:500
            });
    }
}
