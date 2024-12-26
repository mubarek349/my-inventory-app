import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params}){
    try {
        const { id } = await params;
        const unit = await db.unit.findUnique({
            where:{
                id // selected unit
            },
        });
        return NextResponse.json(unit);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to fetch the unit"
            },
            {
                status:500
            });
    }
}
export async function PUT(request,{params}){
    try {
        const { id } = await params;
        const {title,abbreviation}=await request.json();
        const unit = await db.unit.update({
            where:{
                id // selected unit
            },
            data:{
                title,
                abbreviation
            }
        });
        return NextResponse.json(unit);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error,
                message:"Failed to update the unit"
            },
            {
                status:500
            });
    }
}