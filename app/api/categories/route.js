import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title,description}=await request.json();
        const category=await db.category.create({data:{title,description},},);
        console.log(category);
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a category"
            },
            {
                status:500
            });
    }
    
}


export async function GET() {

    try {
        const categories = await db.category.findMany({
            orderBy:{
                createdAt : 'desc' // latest category
            },
        });
        return NextResponse.json(categories);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch a category"
            },
            {
                status:500
            });
    }
}

export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        const deletecategory= await db.category.delete({
            where:{
                id  
            },
        });
        console.log(deletecategory);
        return NextResponse.json(deletecategory);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to Delete category"
            },
            {
                status:500
            });
    }
}