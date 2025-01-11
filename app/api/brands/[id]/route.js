import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const brand = await db.brand.findUnique({
            where:{
                id // selected brand
            },
        });
        return NextResponse.json(brand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the Brand"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params :{id}}){
    try {
        const {title}=await request.json();
        const brand = await db.brand.update({
            where:{
                id // selected brand
            },
            data:{
                title
            }
        });
        return NextResponse.json(brand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to update the Brand"
            },
            {
                status:500
            });
    }
}