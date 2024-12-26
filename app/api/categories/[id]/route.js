import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const category = await db.category.findUnique({
            where:{
                id // selected category
            },
        });
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the category"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params}){
    try {
        const { id } = await params;
        const {title,description}=await request.json();
        const category = await db.category.update({
            where:{
                id // selected category
            },
            data:{
                title,
                description
            }
        });
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to update the category"
            },
            {
                status:500
            });
    }
}