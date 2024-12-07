import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const {title,abbrevation}=await request.json();
        const unit={title,abbrevation};
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