import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title,abbreviation}=await request.json();
        const unit=await db.unit.create({data:{title,abbreviation},},);
        console.log(unit);
        return NextResponse.json(unit);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to create a Unit"
            },
            {
                status:500
            });
    }
    
}

export async function GET(){
    try {
        const units = await db.unit.findMany({
            orderBy:{
                createdAt : 'desc' // latest unit
            },
        });
        return NextResponse.json(units);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch a Unit"
            },
            {
                status:500
            });
    }
}