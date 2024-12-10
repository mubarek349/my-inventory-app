import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title}=await request.json();

        const brand=await db.brand.create({data:{title},},);
        console.log(brand);
        return NextResponse.json(brand);
    } catch (error) {
        console.log(error);
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