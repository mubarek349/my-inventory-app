import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title}=await request.json();
        const brand=await db.brand.create({data:{title},},);
        console.log(brand);
        return NextResponse.json(brand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a Brand"
            },
            {
                status:500
            });
    }
}

export async function GET(){
    try {
        const brands = await db.brand.findMany({
            orderBy:{
                createdAt : 'desc' // latest brand
            },
        });
        return NextResponse.json(brands);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch a Brand"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deletebrand= await db.brand.delete({
            where:{
                id  
            },
        });
        console.log(deletebrand);
        return NextResponse.json(deletebrand);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete brand"
            },
            {
                status:500
            });
    }
}